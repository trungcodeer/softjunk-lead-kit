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

## Current npmjs Publish Status

As of 2026-05-28 from this machine:

```bash
npm view softjunk-lead-kit --json
```

returns `E404`, so the package name is not live on the public npmjs registry yet.

```bash
npm whoami
```

returns `ENEEDAUTH`, so npmjs publish cannot be completed from this machine until an owner logs in or provides `NPM_TOKEN` / `NODE_AUTH_TOKEN`.

The package is still publish-ready: `npm pack --dry-run --json` passed for `softjunk-lead-kit-0.2.2.tgz`. Machine-readable status:

```text
https://trungcodeer.github.io/softjunk-lead-kit/npm-publish-status.json
```

Manual publish path after owner auth:

```bash
npm publish --access public
```

GitHub Actions publish template after adding `NPM_TOKEN` and pushing with a GitHub token that has `workflow` scope:

```text
https://github.com/trungcodeer/softjunk-lead-kit/blob/main/NPM_PUBLISH_WORKFLOW.yml.example
```

## No Clone Release Asset

Use the current GitHub Release tarball when npm registry publish is unavailable or a buyer-agent should run the package without cloning:

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit doctor --json
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Release: https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.163

SHA-256 file: https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz.sha256

Stable fallback release asset, used only if the current asset is unavailable:

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Stable fallback SHA-256: `1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c`.

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
