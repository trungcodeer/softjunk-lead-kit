# Run This First

This repo is meant to produce a useful lead follow-up preview before you decide whether to pay.

## Fastest Path After Clone

```bash
npm start
```

That runs:

```bash
node bin/softjunk-lead-kit.js doctor --json
```

## No Clone Buyer-Agent Command

Use the verified release tarball when a coding agent, VA, or buyer assistant should print the exact PayPal handoff without cloning the repo:

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Release: https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.151

Release asset SHA-256: `1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c`.

## Try One Real Use Case Locally

```bash
npm run try:rescue
```

Or provide your own placeholders:

```bash
node bin/softjunk-lead-kit.js rescue --business "roofing contractor" --service "roof estimate" --source estimate --need "unanswered estimate" --tone direct --next quote --json
```

## Send One Buyer A Safe Handoff

```bash
node bin/softjunk-lead-kit.js send --business "med spa" --service consultation --source DM --need "quiet inquiry"
```

## Pay Exactly 5 USD

NPM funding metadata:

```bash
npm fund
```

Custom one-lead rescue:

```bash
npm run fund
node bin/softjunk-lead-kit.js pay --mode custom --json
```

Ready digital kit:

```bash
npm run fund:kit
node bin/softjunk-lead-kit.js pay --mode kit --json
```

PayPal URL: https://paypal.me/softjunk/5USD

Machine-readable NPM funding route:
https://trungcodeer.github.io/softjunk-lead-kit/npm-funding.json

After payment, use the clone CLI order form with placeholders only:
https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=clone-cli-order.yml

Privacy rule: do not post customer names, phone numbers, emails, addresses, invoice IDs, transaction IDs, payer email, or private lead details in public issues, URLs, logs, or prompts.

Verification gate: do not claim paid, started, delivered, fulfilled, complete, or received unless seller-side PayPal evidence exists or PAYPAL_PAYMENT_VERIFIED=true.
