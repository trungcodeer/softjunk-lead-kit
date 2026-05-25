# SoftJunk Lead Kit

![SoftJunk Lead Kit $5 PayPal offer](social-card-qr.png)

A $5 lead follow-up kit and same-price custom sequence for small businesses that get leads from forms, DMs, email, ads, referrals, quotes, appointments, or calls.

## Buy

![PayPal QR code for the $5 SoftJunk checkout](paypal-qr.svg)

- Pay $5 on PayPal: https://paypal.me/softjunk/5USD
- Buyer index: https://trungcodeer.github.io/softjunk-lead-kit/buyer-index.json
- Fast checkout: https://trungcodeer.github.io/softjunk-lead-kit/checkout.html
- Payment page: https://trungcodeer.github.io/softjunk-lead-kit/pay.html
- PayPal QR: https://trungcodeer.github.io/softjunk-lead-kit/pay-qr.html
- Printable QR flyer: https://trungcodeer.github.io/softjunk-lead-kit/printable-paypal-flyer.html
- PayPal QR SVG: https://trungcodeer.github.io/softjunk-lead-kit/paypal-qr.svg
- AI buyer brief: https://trungcodeer.github.io/softjunk-lead-kit/agent-buy-brief.html
- Paid ZIP proof: https://trungcodeer.github.io/softjunk-lead-kit/paid-kit-proof.html
- Pinned public order board: https://github.com/trungcodeer/softjunk-lead-kit/issues/1
- Order forms after payment: https://github.com/trungcodeer/softjunk-lead-kit/issues/new/choose
- After-payment handoff: https://trungcodeer.github.io/softjunk-lead-kit/after-pay.html

Use PayPal note `Lead Follow-Up Kit` for the digital ZIP. For a custom sequence, open the free generator or AI agent order path and copy the generated PayPal note before paying.

## What You Get

Two $5 options:

1. Digital kit: 7-day follow-up guide, copy-paste templates, lead tracker CSV, and AI prompt pack.
2. Custom sequence: Day 0, 1, 3, 5, and 7 messages written for one business, plus no-show and price-objection replies.

The paid ZIP is not public in this repository. Delivery is manual to the email shown in the PayPal transaction.

## Try Before Paying

- Free generator: https://trungcodeer.github.io/softjunk-lead-kit/
- Lead loss calculator: https://trungcodeer.github.io/softjunk-lead-kit/lead-loss-calculator.html
- Fix one quiet lead: https://trungcodeer.github.io/softjunk-lead-kit/fix-one-quiet-lead.html
- Lead follow-up rewriter: https://trungcodeer.github.io/softjunk-lead-kit/lead-follow-up-rewriter.html
- Lead follow-up answers: https://trungcodeer.github.io/softjunk-lead-kit/lead-follow-up-answers.html
- GitHub-native answer brief: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/LEAD_FOLLOW_UP_ANSWERS.md
- Public Gist answer brief: https://gist.github.com/trungcodeer/78f709d9550e952dc6c0595660ca643a
- Free 3-message preview: https://trungcodeer.github.io/softjunk-lead-kit/free-preview.html
- Free sample pack: https://trungcodeer.github.io/softjunk-lead-kit/free-sample-pack.html
- Download sample ZIP: https://trungcodeer.github.io/softjunk-lead-kit/softjunk-free-sample-pack.zip
- Template library: https://trungcodeer.github.io/softjunk-lead-kit/lead-follow-up-templates.html
- Before and after examples: https://trungcodeer.github.io/softjunk-lead-kit/follow-up-examples.html
- Missed call follow-up sample: https://trungcodeer.github.io/softjunk-lead-kit/missed-call-follow-up.html
- Estimate follow-up sample: https://trungcodeer.github.io/softjunk-lead-kit/estimate-follow-up-template.html

## Niche Pages

- Dental: https://trungcodeer.github.io/softjunk-lead-kit/dental-follow-up.html
- Appointment setting: https://trungcodeer.github.io/softjunk-lead-kit/appointment-setting-follow-up.html
- Med spa: https://trungcodeer.github.io/softjunk-lead-kit/med-spa-follow-up.html
- Tutoring: https://trungcodeer.github.io/softjunk-lead-kit/tutoring-follow-up.html
- HVAC: https://trungcodeer.github.io/softjunk-lead-kit/hvac-lead-follow-up.html
- Roofing: https://trungcodeer.github.io/softjunk-lead-kit/roofing-estimate-follow-up.html
- Real estate: https://trungcodeer.github.io/softjunk-lead-kit/real-estate-lead-follow-up.html
- Plumbing: https://trungcodeer.github.io/softjunk-lead-kit/plumbing-lead-follow-up.html

## Machine-Readable Discovery

- Buyer index JSON: https://trungcodeer.github.io/softjunk-lead-kit/buyer-index.json
- GitHub-readable buyer index: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/BUYER_INDEX.md
- GitHub profile offer: https://github.com/trungcodeer/trungcodeer
- GitHub profile offer JSON: https://raw.githubusercontent.com/trungcodeer/trungcodeer/main/softjunk-profile-offer.json
- llms.txt: https://trungcodeer.github.io/softjunk-lead-kit/llms.txt
- Offers JSON: https://trungcodeer.github.io/softjunk-lead-kit/offers.json
- Answer engine JSON: https://trungcodeer.github.io/softjunk-lead-kit/answer-engine.json
- GitHub-native answer brief: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/LEAD_FOLLOW_UP_ANSWERS.md
- Public Gist answer brief: https://gist.github.com/trungcodeer/78f709d9550e952dc6c0595660ca643a
- Agent offer JSON: https://trungcodeer.github.io/softjunk-lead-kit/agent-offer.json
- Paid kit manifest: https://trungcodeer.github.io/softjunk-lead-kit/paid-kit-manifest.json
- Product feed: https://trungcodeer.github.io/softjunk-lead-kit/product-feed.json
- RSS feed: https://trungcodeer.github.io/softjunk-lead-kit/feed.xml
- Share kit: https://trungcodeer.github.io/softjunk-lead-kit/share-kit.html
- Share kit JSON: https://trungcodeer.github.io/softjunk-lead-kit/share-kit.json
- Well-known offer: https://trungcodeer.github.io/softjunk-lead-kit/.well-known/softjunk-offer.json
- OpenAPI discovery: https://trungcodeer.github.io/softjunk-lead-kit/.well-known/openapi.yaml

## Payment Verification

Fulfillment starts only after the seller can see the 5 USD PayPal transaction, the API verifier returns `PAYPAL_PAYMENT_VERIFIED=true`, or a trusted seller-side CSV export returns `PAYPAL_PAYMENT_VERIFIED=true source=csv`.

Run locally:

```powershell
.\scripts\verify-paypal-5usd.ps1
```

Or verify a seller-side PayPal activity CSV export:

```powershell
.\scripts\verify-paypal-5usd.ps1 -CsvPath "C:\path\to\paypal-activity.csv" -NoteContains "Lead Follow-Up Kit"
```

See [PAYPAL_VERIFICATION.md](PAYPAL_VERIFICATION.md) for required PayPal API credentials and stricter note filters.

The included `PAYPAL_VERIFICATION_WORKFLOW.yml.example` can be copied into `.github/workflows/` after adding PayPal API credentials as repository secrets.
