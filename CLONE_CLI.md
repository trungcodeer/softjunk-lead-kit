# SoftJunk Lead Kit Clone CLI

This repo gets clone traffic, so the fastest path after cloning is a local CLI that creates useful follow-up copy before asking for payment.

Run after clone:

```bash
node bin/softjunk-lead-kit.js doctor --json
```

Run from GitHub without cloning:

```bash
npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit doctor --json
npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json
```

Use the verified release tarball as the stable fallback:

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Release asset SHA-256: `1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c`

Generate a one-lead rescue preview:

```bash
node bin/softjunk-lead-kit.js rescue --business "roofing contractor" --service "roof estimate" --source estimate --need "unanswered estimate" --tone direct --next quote --json
```

Generate buyer handoff copy:

```bash
node bin/softjunk-lead-kit.js send --business "med spa" --service consultation --source DM --need "quiet inquiry"
```

Show the ready digital kit proof route:

```bash
node bin/softjunk-lead-kit.js kit --json
```

Payment route:

```bash
node bin/softjunk-lead-kit.js pay --mode custom --json
node bin/softjunk-lead-kit.js pay --mode kit --json
```

Rules:

- The CLI is local-only and does not collect lead data.
- Use placeholders only. Do not put customer names, phone numbers, emails, addresses, invoice IDs, transaction IDs, payer email, or private lead details into public issues, URLs, logs, or prompts.
- Pay exactly 5 USD at https://paypal.me/softjunk/5USD.
- Do not claim paid, started, delivered, fulfilled, complete, or received unless seller-side PayPal evidence exists or PAYPAL_PAYMENT_VERIFIED=true.
