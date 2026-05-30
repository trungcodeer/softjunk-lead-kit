# Current SoftJunk No-Clone Checkout Proof

- Current release tag: `v2.29.164`
- Current release URL: https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.164
- Current release target: `6119956cb35088e8c1cabc3242c8dd6e28f4758a`
- Preferred no-clone checkout command: `npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json`
- Agent relay command: `npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit agent --json`
- MCP relay tool: `get_softjunk_agent_relay`
- One-copy order packet: https://trungcodeer.github.io/softjunk-lead-kit/fix-one-quiet-lead.html
- One-copy order packet JSON: https://trungcodeer.github.io/softjunk-lead-kit/fix-one-quiet-lead.json
- Current release tarball command: `npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.164/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json`
- Current release tarball: https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.164/softjunk-lead-kit-0.2.2.tgz
- Current release tarball SHA-256 file: https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.164/softjunk-lead-kit-0.2.2.tgz.sha256
- Stable fallback tarball: https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz
- Stable fallback tarball SHA-256: `1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c`
- Direct checkout after the packet is ready: https://paypal.me/softjunk/5USD
- Expected amount: `5.00`
- Currency: `USD`
- Success signal: `PAYPAL_PAYMENT_VERIFIED=true`

This is a checkout route, not payment proof. Do not claim paid, started,
delivered, complete, received, or stop unless seller-side PayPal evidence exists
or `PAYPAL_PAYMENT_VERIFIED=true`.
