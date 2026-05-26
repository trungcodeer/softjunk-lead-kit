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

## 2026-05-26 Agent Commerce Capsule Evidence

Local validation:
- Product JSON parse returned `json_ok=19` for product root JSON, `.well-known` JSON, and `distribution/**/*.json`.
- Product XML parse returned `xml_ok=2` for `sitemap.xml` and `feed.xml`.
- Root JSON parse returned `json_ok=6` for root and `.well-known` JSON.
- Root XML parse returned `xml_ok=1` for root `sitemap.xml`.
- Product script parse returned `agent-commerce.html js_scripts=1 ok` and `index.html js_scripts=1 ok`.
- Root script parse returned `index.html js_scripts=0 ok` and `ai/index.html js_scripts=0 ok`.
- Local Chrome headless `--dump-dom` on `agent-commerce.html` emitted `Agent Commerce Capsule`, `agent-commerce.json`, `paypal.me/softjunk/5USD`, `PAYPAL_PAYMENT_VERIFIED`, `Lead Recovery Audit`, and `shareable order link`.

Files added:
- `agent-commerce.html`
- `agent-commerce.json`
- `agent-commerce.txt`

Commits and deploy:
- Product commit: `f3f9970 Add agent commerce capsule`.
- Root commit: `eae42ce Link agent commerce capsule from root`.
- Product Pages run `26425540770` completed with `success`.
- Root Pages run `26425540558` completed with `success`.

Live deploy validation:
- Product route checks returned HTTP 200 and expected content for `agent-commerce.html`, `agent-commerce.json`, `agent-commerce.txt`, `buyer-index.json`, `agent-buyer-packet.json`, `agent-offer.json`, `paypal-payment-intent.json`, `offers.json`, `product-feed.json`, `llms.txt`, `sitemap.xml`, and `feed.xml`.
- Root route checks returned `root_live_ok=11` for `/`, `/ai/`, `ai.json`, `ai.txt`, `root-offer.json`, `paypal.json`, `.well-known/paypal-payment.json`, `.well-known/softjunk-root-offer.json`, `.well-known/openapi.yaml`, `llms.txt`, and `sitemap.xml`.
- Live Chrome headless `--dump-dom` on `agent-commerce.html` emitted `Agent Commerce Capsule`, `agent-commerce.json`, `paypal.me/softjunk/5USD`, `PAYPAL_PAYMENT_VERIFIED`, `Lead Recovery Audit`, and `shareable order link`.

Public distribution:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.5`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-agent-commerce-v1`.
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.
- `gh gist view --raw` confirmed both Gists expose `agent-commerce`, `paypal.me/softjunk/5USD`, and `PAYPAL_PAYMENT_VERIFIED`.
- IndexNow returned success for 31 submitted URLs.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4538506401`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4538507691`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Custom Sequence Gallery Deploy Evidence

Live deploy validation:
- Product route checks returned HTTP 200 for `custom-sequence-gallery.html`, `custom-sequence-gallery.json`, `custom-sequence-gallery.txt`, `custom-sequence-preview.html`, `buyer-index.json`, `agent-buyer-packet.json`, `agent-offer.json`, `paypal-payment-intent.json`, `offers.json`, `product-feed.json`, `share-kit.html`, `llms.txt`, `sitemap.xml`, and `feed.xml`.
- Root route checks returned HTTP 200 for `/`, `/ai/`, `/pay/`, `/paypal/`, `/buy/`, `ai.json`, `ai.txt`, `root-offer.json`, `paypal.json`, `.well-known/paypal-payment.json`, `.well-known/softjunk-root-offer.json`, `.well-known/openapi.yaml`, `llms.txt`, and `sitemap.xml`.
- Chrome headless `--dump-dom` on the live gallery emitted `Custom Sequence Gallery`, `HVAC repair form lead`, `custom-sequence-preview.html`, `paypal.me/softjunk/5USD`, and `PAYPAL_PAYMENT_VERIFIED`.
- Chrome headless `--dump-dom` on the live HVAC prefilled preview emitted `Preview generated`, `Custom Sequence Preview`, `HVAC company`, `shareable-order-link.html`, and `paypal.me/softjunk/5USD`.

Release and discovery:
- Product release: `https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.4`.
- Root release: `https://github.com/trungcodeer/trungcodeer.github.io/releases/tag/root-custom-sequence-gallery-v1`.
- IndexNow returned `status=200 urls=39`.
- Public tracking issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/2#issuecomment-4538232839`.
- Public examples issue comment: `https://github.com/trungcodeer/softjunk-lead-kit/issues/3#issuecomment-4538232732`.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
- Completion still requires seller-side PayPal evidence, verifier success, or trusted PayPal CSV proof.

## 2026-05-26 Custom Sequence Gallery Evidence

Local validation:
- Product JSON parse: all product root `*.json`, `.well-known/*.json`, and `distribution/**/*.json` parsed with `ConvertFrom-Json`.
- Product XML parse: `sitemap.xml` and `feed.xml` parsed as XML.
- Root JSON parse: root `*.json` and `.well-known/*.json` parsed with `ConvertFrom-Json`.
- Root XML parse: root `sitemap.xml` parsed as XML.
- Product script parse: `custom-sequence-gallery.html`, `custom-sequence-preview.html`, `index.html`, `share-kit.html`, and `follow-up-examples.html` inline scripts parsed with Node.
- Root script parse: `index.html`, `ai/index.html`, `pay/index.html`, `paypal/index.html`, and `buy/index.html` inline scripts parsed with Node.
- Browser smoke test: Chrome headless `--dump-dom` loaded `custom-sequence-gallery.html` and emitted gallery title, HVAC scenario, preview links, PayPal URL, and verification gate text.
- Browser smoke test: Chrome headless `--dump-dom` loaded the HVAC prefilled custom preview URL and emitted generated preview, PayPal note, shareable order link, PayPal URL, and `Preview generated` status text.

Files added:
- `custom-sequence-gallery.html`
- `custom-sequence-gallery.json`
- `custom-sequence-gallery.txt`

Public Gist updates:
- Payment-intent Gist `167d3dc5f8696bf9edb04d3db6c53a02` updated from local distribution sources.
- Quiet-lead Gist `caeeb4b5aa7fc91a1b6f0e6d154f8a08` updated from local distribution sources.
- Agent buyer packet Gist `85b6eef2cd6deb244d0bfbe18e744a3c` updated from local packet files.

Payment gate:
- `scripts/verify-paypal-5usd.ps1` returned `PAYPAL_PAYMENT_VERIFIED=false reason=missing_credentials required=PAYPAL_ACCESS_TOKEN_or_PAYPAL_CLIENT_ID_and_PAYPAL_SECRET`.
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
