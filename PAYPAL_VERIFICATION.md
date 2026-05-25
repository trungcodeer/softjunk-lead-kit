# PayPal Payment Verification

Use this before marking any SoftJunk order as paid or delivered.

The verifier checks the PayPal Transaction Search API for a successful incoming `5.00 USD` transaction in the seller account. It does not store credentials and does not expose payer details.

## Required environment

Use either an existing access token:

```powershell
$env:PAYPAL_ACCESS_TOKEN = "access-token"
```

Or REST app credentials that can access Transaction Search:

```powershell
$env:PAYPAL_CLIENT_ID = "client-id"
$env:PAYPAL_SECRET = "secret"
```

For sandbox testing only:

```powershell
$env:PAYPAL_ENV = "sandbox"
```

## Verify the $5 payment

```powershell
.\scripts\verify-paypal-5usd.ps1
```

Optional stricter checks:

```powershell
.\scripts\verify-paypal-5usd.ps1 -LookbackHours 24 -NoteContains "Lead Follow-Up"
.\scripts\verify-paypal-5usd.ps1 -LookbackHours 168 -NoteContains "Estimate Follow-Up"
```

Exit codes:

- `0`: a successful `5.00 USD` PayPal transaction was found.
- `2`: no matching payment was found, or credentials are missing.
- `1`: PayPal API/token call failed unexpectedly.

Fulfillment rule: do not deliver the ZIP or custom sequence until this verifier returns `PAYPAL_PAYMENT_VERIFIED=true` or the seller manually confirms the same payment inside PayPal.

Official PayPal references:

- Transaction Search API: https://developer.paypal.com/docs/api/transaction-search/v1/
- Transaction Search integration guide: https://developer.paypal.com/docs/transaction-search/
