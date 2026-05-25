param(
  [decimal]$Amount = 5.00,
  [string]$Currency = "USD",
  [int]$LookbackHours = 72,
  [string]$NoteContains = "",
  [string]$CsvPath = "",
  [int]$MaxPages = 10,
  [switch]$Sandbox
)

$ErrorActionPreference = "Stop"

function Write-Result {
  param(
    [string]$Message,
    [int]$Code
  )
  Write-Host $Message
  exit $Code
}

function Get-PayPalBaseUrl {
  if ($Sandbox -or $env:PAYPAL_ENV -eq "sandbox") {
    return "https://api-m.sandbox.paypal.com"
  }
  return "https://api-m.paypal.com"
}

function Get-AccessToken {
  if (-not [string]::IsNullOrWhiteSpace($env:PAYPAL_ACCESS_TOKEN)) {
    return $env:PAYPAL_ACCESS_TOKEN
  }

  if ([string]::IsNullOrWhiteSpace($env:PAYPAL_CLIENT_ID) -or [string]::IsNullOrWhiteSpace($env:PAYPAL_SECRET)) {
    Write-Result "PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET" 2
  }

  $baseUrl = Get-PayPalBaseUrl
  $pair = "{0}:{1}" -f $env:PAYPAL_CLIENT_ID, $env:PAYPAL_SECRET
  $basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes($pair))
  $response = Invoke-RestMethod `
    -Method Post `
    -Uri "$baseUrl/v1/oauth2/token" `
    -Headers @{ Authorization = "Basic $basic" } `
    -ContentType "application/x-www-form-urlencoded" `
    -Body "grant_type=client_credentials"

  if ([string]::IsNullOrWhiteSpace($response.access_token)) {
    Write-Result "PAYPAL_PAYMENT_VERIFIED=false reason=token_response_missing_access_token" 1
  }

  return $response.access_token
}

function New-QueryString {
  param([hashtable]$Values)
  $pairs = foreach ($key in $Values.Keys) {
    "{0}={1}" -f [uri]::EscapeDataString($key), [uri]::EscapeDataString([string]$Values[$key])
  }
  return ($pairs -join "&")
}

function Convert-ToDecimal {
  param([string]$Value)
  if ([string]::IsNullOrWhiteSpace($Value)) {
    return $null
  }

  $clean = $Value.Trim()
  $isNegative = $clean.StartsWith("(") -and $clean.EndsWith(")")
  $clean = $clean.Trim("()")
  $clean = $clean -replace "[^\d,.\-]", ""

  if ($clean.Contains(",") -and -not $clean.Contains(".")) {
    $clean = $clean.Replace(",", ".")
  } else {
    $clean = $clean.Replace(",", "")
  }

  if ([string]::IsNullOrWhiteSpace($clean)) {
    return $null
  }

  $result = [decimal]::Parse($clean, [Globalization.CultureInfo]::InvariantCulture)
  if ($isNegative) {
    return -1 * $result
  }
  return $result
}

function Get-SearchBlob {
  param($Detail)
  return ($Detail | ConvertTo-Json -Depth 30 -Compress)
}

function ConvertTo-NormalizedName {
  param([string]$Name)
  return (($Name -replace "[^A-Za-z0-9]", "").ToLowerInvariant())
}

function Get-RowValue {
  param(
    $Row,
    [string[]]$Names
  )

  $properties = @($Row.PSObject.Properties)
  foreach ($name in $Names) {
    $wanted = ConvertTo-NormalizedName $name
    foreach ($property in $properties) {
      if ((ConvertTo-NormalizedName $property.Name) -eq $wanted) {
        return [string]$property.Value
      }
    }
  }
  return ""
}

function Test-CompletedStatus {
  param([string]$Status)
  if ([string]::IsNullOrWhiteSpace($Status)) {
    return $true
  }

  $normalized = $Status.Trim().ToLowerInvariant()
  return $normalized -in @("s", "success", "successful", "completed", "complete")
}

function Find-CsvMatches {
  param(
    [string]$Path,
    [decimal]$TargetAmount,
    [string]$CurrencyUpper,
    [string]$RequiredNote
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    Write-Result "PAYPAL_PAYMENT_VERIFIED=false reason=csv_not_found path=$Path" 2
  }

  $rows = @(Import-Csv -LiteralPath $Path)
  if ($rows.Count -eq 0) {
    Write-Result "PAYPAL_PAYMENT_VERIFIED=false reason=csv_empty path=$Path" 2
  }

  $found = @()
  foreach ($row in $rows) {
    $rowCurrency = Get-RowValue $row @("Currency", "Currency Code", "Transaction Currency", "Transaction Amount Currency Code")
    $rowAmount = Get-RowValue $row @("Gross", "Amount", "Transaction Amount", "Transaction Amount Value", "Value")
    $rowStatus = Get-RowValue $row @("Status", "Transaction Status", "Payment Status")

    if ([string]::IsNullOrWhiteSpace($rowCurrency) -or $rowCurrency.Trim().ToUpperInvariant() -ne $CurrencyUpper) {
      continue
    }

    $amountValue = Convert-ToDecimal $rowAmount
    if ($null -eq $amountValue -or [decimal]::Round($amountValue, 2) -ne $TargetAmount) {
      continue
    }

    if (-not (Test-CompletedStatus $rowStatus)) {
      continue
    }

    if (-not [string]::IsNullOrWhiteSpace($RequiredNote)) {
      $blob = Get-SearchBlob $row
      if ($blob.IndexOf($RequiredNote, [StringComparison]::OrdinalIgnoreCase) -lt 0) {
        continue
      }
    }

    $found += $row
  }

  return $found
}

$baseUrl = Get-PayPalBaseUrl
$end = (Get-Date).ToUniversalTime()
$start = $end.AddHours(-1 * $LookbackHours)
$currencyUpper = $Currency.ToUpperInvariant()
$targetAmount = [decimal]::Round($Amount, 2)

if ([string]::IsNullOrWhiteSpace($CsvPath) -and -not [string]::IsNullOrWhiteSpace($env:PAYPAL_TRANSACTION_CSV)) {
  $CsvPath = $env:PAYPAL_TRANSACTION_CSV
}

if (-not [string]::IsNullOrWhiteSpace($CsvPath)) {
  $csvMatches = @(Find-CsvMatches $CsvPath $targetAmount $currencyUpper $NoteContains)
  if ($csvMatches.Count -eq 0) {
    $notePart = if ([string]::IsNullOrWhiteSpace($NoteContains)) { "none" } else { $NoteContains }
    Write-Result ("PAYPAL_PAYMENT_VERIFIED=false source=csv amount={0:0.00} currency={1} note_filter={2}" -f $targetAmount, $currencyUpper, $notePart) 2
  }

  $firstCsv = $csvMatches[0]
  $csvTransactionId = Get-RowValue $firstCsv @("Transaction ID", "Transaction Id", "TransactionID", "Txn ID", "TxnId", "Transaction Number")
  $csvTransactionDate = Get-RowValue $firstCsv @("Date", "Transaction Date", "Time", "Timestamp", "Initiation Date")
  Write-Host ("PAYPAL_PAYMENT_VERIFIED=true source=csv amount={0:0.00} currency={1} matches={2} transaction_id={3} transaction_date={4}" -f $targetAmount, $currencyUpper, $csvMatches.Count, $csvTransactionId, $csvTransactionDate)
  exit 0
}

$token = Get-AccessToken

$matches = @()

for ($page = 1; $page -le $MaxPages; $page++) {
  $query = New-QueryString @{
    start_date = $start.ToString("yyyy-MM-ddTHH:mm:ssZ")
    end_date = $end.ToString("yyyy-MM-ddTHH:mm:ssZ")
    fields = "all"
    page_size = 100
    page = $page
  }

  $response = Invoke-RestMethod `
    -Method Get `
    -Uri "$baseUrl/v1/reporting/transactions?$query" `
    -Headers @{ Authorization = "Bearer $token"; Accept = "application/json" }

  foreach ($detail in @($response.transaction_details)) {
    $info = $detail.transaction_info
    if ($null -eq $info) {
      continue
    }

    $transactionCurrency = [string]$info.transaction_amount.currency_code
    $transactionValue = Convert-ToDecimal ([string]$info.transaction_amount.value)
    $transactionStatus = [string]$info.transaction_status

    if ($transactionCurrency.ToUpperInvariant() -ne $currencyUpper) {
      continue
    }
    if ($transactionValue -ne $targetAmount) {
      continue
    }
    if ($transactionStatus -ne "S") {
      continue
    }
    if (-not [string]::IsNullOrWhiteSpace($NoteContains)) {
      $blob = Get-SearchBlob $detail
      if ($blob.IndexOf($NoteContains, [StringComparison]::OrdinalIgnoreCase) -lt 0) {
        continue
      }
    }

    $matches += $detail
  }

  if ($null -eq $response.total_pages -or [int]$response.total_pages -le $page) {
    break
  }
}

if ($matches.Count -eq 0) {
  $notePart = if ([string]::IsNullOrWhiteSpace($NoteContains)) { "none" } else { $NoteContains }
  Write-Result ("PAYPAL_PAYMENT_VERIFIED=false amount={0:0.00} currency={1} lookback_hours={2} note_filter={3}" -f $targetAmount, $currencyUpper, $LookbackHours, $notePart) 2
}

$first = $matches[0]
$firstInfo = $first.transaction_info
$transactionId = [string]$firstInfo.transaction_id
$transactionDate = [string]$firstInfo.transaction_initiation_date
$subject = [string]$firstInfo.transaction_subject
if ($subject.Length -gt 80) {
  $subject = $subject.Substring(0, 80)
}

Write-Host ("PAYPAL_PAYMENT_VERIFIED=true amount={0:0.00} currency={1} matches={2} transaction_id={3} transaction_date={4}" -f $targetAmount, $currencyUpper, $matches.Count, $transactionId, $transactionDate)
if (-not [string]::IsNullOrWhiteSpace($subject)) {
  Write-Host ("PAYPAL_TRANSACTION_SUBJECT={0}" -f $subject)
}
exit 0
