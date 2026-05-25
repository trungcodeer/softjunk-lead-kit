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
