# SoftJunk PayPal Note First

## One rewrite included

After the 5 USD PayPal payment is seller-side verified, a custom sequence includes one rewrite if the first draft is not usable. Use only non-sensitive business context and placeholders.

Buyer-agent BuyAction manifest: https://trungcodeer.github.io/softjunk-lead-kit/paypal-buy-action.json

Use this when the buyer is ready to pay and wants the shortest path: copy one safe note, pay 5 USD, and let the seller fulfill from the PayPal transaction.

## Copy One Note

Choose the closest note and replace only the bracketed business context. Do not include private customer names, emails, phone numbers, addresses, transaction IDs, patient data, or private lead details.

### One Quiet Lead

```text
One Lead Rescue | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Need: [missed call/estimate/no-show/quiet DM/price] | Tone: [friendly/professional/direct] | Next: [book/reply/quote/call]
```

### Digital Kit

```text
Lead Follow-Up Kit
```

### Custom Sequence

```text
Custom Sequence | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Tone: [friendly/professional/direct] | Need: [what follow-up should solve] | Next: [desired next step]
```

## Pay

Run the no-clone checkout proof command when an agent needs executable payment handoff before opening PayPal:

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Current release notes:

https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.163

Current release tarball SHA-256 file:

`https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz.sha256`

Pay exactly 5 USD:

https://paypal.me/softjunk/5USD

## Optional After-Payment Form

If the PayPal note is too short, submit non-sensitive order details after payment:

https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml

## What Gets Sent

The instant fulfillment packet shows the Day 0, Day 1, Day 3, Day 5, Day 7, no-show, and price-objection reply shell used after verified payment:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/INSTANT_FULFILLMENT_PACKET.md

## Fulfillment Gate

Delivery starts only after the seller can see the 5 USD PayPal transaction, the API verifier returns PAYPAL_PAYMENT_VERIFIED=true, or a trusted seller-side PayPal CSV export returns PAYPAL_PAYMENT_VERIFIED=true source=csv.

Machine-readable route:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/PAYPAL_NOTE_FIRST.md

https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/paypal-note-first.json

Buy Now packet:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/BUY_NOW.md

Instant fulfillment JSON:

https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/instant-fulfillment-packet.json

Instant fulfillment Gist:

https://gist.github.com/trungcodeer/b291f4850559d170ab8bcdd832e6d93d

Public Gist:

https://gist.github.com/trungcodeer/fbd0764d1575076c27eaddb55042459a

Raw Gist JSON:

https://gist.githubusercontent.com/trungcodeer/fbd0764d1575076c27eaddb55042459a/raw/paypal-note-first.json
