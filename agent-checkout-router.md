# SoftJunk Agent Checkout Router

Canonical JSON: https://trungcodeer.github.io/softjunk-lead-kit/agent-checkout-router.json

Use this when an assistant, crawler, VA, or buyer-agent needs the shortest legitimate path from context to the exact 5 USD PayPal handoff.

Latest release: `v2.29.161`

Latest release target: `b4fcb9f35b46f5e9833bc9b7bc4a2b03e46fc2fe`

NPM publish status: https://trungcodeer.github.io/softjunk-lead-kit/npm-publish-status.json

Owner-auth workflow template: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/NPM_PUBLISH_WORKFLOW.yml.example

Current npmjs status: `E404`

Current local npm auth status: `ENEEDAUTH`

Pay exactly 5 USD: https://paypal.me/softjunk/5USD

Success signal: `PAYPAL_PAYMENT_VERIFIED=true`

## Ranked Routes

1. Ready buyer fastest path: https://trungcodeer.github.io/5/ and https://trungcodeer.github.io/5.json
2. Qualified buyer copy-ready handoff: https://trungcodeer.github.io/send-5/ and https://trungcodeer.github.io/send-5.json
3. Buyer intent preview before payment: https://trungcodeer.github.io/intent-5/ and https://trungcodeer.github.io/intent-5.json
4. Agent checkout contract: https://trungcodeer.github.io/softjunk-lead-kit/agent-close.json
5. One known buyer send path: https://trungcodeer.github.io/softjunk-lead-kit/one-buyer-share.html
6. Digital kit proof and order contract: https://trungcodeer.github.io/softjunk-lead-kit/digital-kit-order.json
7. Latest GitHub package no-clone checkout: `npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json`
8. Stable release-tarball checkout fallback: `npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json`
9. Public Gist checkout mirrors: https://trungcodeer.github.io/softjunk-lead-kit/public-gist-checkout-index.json
10. Free preview first: https://trungcodeer.github.io/softjunk-lead-kit/custom-sequence-gallery.html
11. PayPal URL health before handoff: https://trungcodeer.github.io/paypal-url-health.json

## Rules

Use only owned public surfaces or one known fitting buyer context. Do not use scraped lists, spam, deception, unauthorized outreach, fake payment claims, or private customer/payment data. Do not claim paid, received, started, fulfilled, complete, or stopped unless seller-side PayPal evidence exists or `PAYPAL_PAYMENT_VERIFIED=true`.
