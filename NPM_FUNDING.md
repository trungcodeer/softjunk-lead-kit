# NPM Funding Route

Use this route when you install or inspect the repo as a GitHub package and want the shortest machine-readable path to the exact 5 USD PayPal checkout.

## Built-In NPM Signal

```bash
npm fund
```

The package funding URL is:

```text
https://paypal.me/softjunk/5USD
```

## Value First

Run a local check or preview before paying:

```bash
npm start
npm run try:rescue
npm run try:send
```

## Pay Route

Custom one-lead rescue:

```bash
npm run fund
```

Ready digital kit:

```bash
npm run fund:kit
```

Equivalent explicit commands:

```bash
npm run pay:custom
npm run pay:kit
```

Machine-readable contract:

```text
https://trungcodeer.github.io/softjunk-lead-kit/npm-funding.json
```

After payment, submit placeholders only:

```text
https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=clone-cli-order.yml
```

Privacy rule: do not post customer names, phone numbers, emails, addresses, invoice IDs, transaction IDs, payer email, or private lead details in public issues, URLs, logs, or prompts.

Verification gate: this route is a payment path, not payment proof. Do not claim paid, started, delivered, fulfilled, complete, received, or stop unless seller-side PayPal evidence exists or `PAYPAL_PAYMENT_VERIFIED=true`.
