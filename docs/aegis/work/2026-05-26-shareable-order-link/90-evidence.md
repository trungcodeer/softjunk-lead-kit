# Shareable Order Link Evidence

Local validation:
- Product JSON parse: all `*.json` files under `softjunk-lead-kit-site` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: all `*.json` files under `trungcodeer.github.io` parsed with `ConvertFrom-Json`.
- Root XML parse: `sitemap.xml` parsed as XML.
- Page script parse: `node -e` extracted inline scripts from `shareable-order-link.html` and returned `script ok 1`.

Files added:
- `shareable-order-link.html`
- `shareable-order-link.json`
- `shareable-order-link.txt`

Public distribution:
- Gist: `https://gist.github.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb`
- Raw JSON: `https://gist.githubusercontent.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb/raw/shareable-order-link.json`
- Raw text: `https://gist.githubusercontent.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb/raw/shareable-order-link.txt`

Payment gate:
- This slice did not verify a PayPal transaction.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Funnel Alignment Evidence

Local validation:
- Product JSON parse: all product root `*.json`, `.well-known/*.json`, and `distribution/**/*.json` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: root `*.json` and `.well-known/*.json` parsed with `ConvertFrom-Json`.
- Root XML parse: root `sitemap.xml` parsed as XML.

Public Gist validation:
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` was updated from local distribution sources.
- Quiet-lead Gist `caeeb4b5aa7fc91a1b6f0e6d154f8a08` was updated from local distribution sources.
- `gh gist view --raw` confirmed both Gists now expose `shareable-order-link` references.

Payment gate:
- This slice still did not verify a PayPal transaction.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Custom Sequence Preview Evidence

Local validation:
- Product JSON parse: all product root `*.json`, `.well-known/*.json`, and `distribution/**/*.json` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: root `*.json` and `.well-known/*.json` parsed with `ConvertFrom-Json`.
- Root XML parse: root `sitemap.xml` parsed as XML.
- Product script parse: `custom-sequence-preview.html`, `index.html`, and `share-kit.html` inline scripts parsed with Node.
- Root script parse: `index.html`, `ai/index.html`, `pay/index.html`, `paypal/index.html`, and `buy/index.html` inline scripts parsed with Node.
- Browser smoke test: Chrome headless `--dump-dom` loaded `custom-sequence-preview.html` with query params and emitted generated preview, PayPal note, shareable order link, and `Preview generated` status text.

Files added:
- `custom-sequence-preview.html`
- `custom-sequence-preview.json`
- `custom-sequence-preview.txt`

Public Gist updates:
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Quiet-lead Gist `caeeb4b5aa7fc91a1b6f0e6d154f8a08` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.

Payment gate:
- This slice still did not verify a PayPal transaction.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.
