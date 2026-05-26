# SoftJunk PayPal Note First

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

Pay exactly 5 USD:

https://paypal.me/softjunk/5USD

## Optional After-Payment Form

If the PayPal note is too short, submit non-sensitive order details after payment:

https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml

## Fulfillment Gate

Delivery starts only after the seller can see the 5 USD PayPal transaction, the API verifier returns PAYPAL_PAYMENT_VERIFIED=true, or a trusted seller-side PayPal CSV export returns PAYPAL_PAYMENT_VERIFIED=true source=csv.

Machine-readable route:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/PAYPAL_NOTE_FIRST.md

https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/paypal-note-first.json

Buy Now packet:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/BUY_NOW.md

Public Gist:

https://gist.github.com/trungcodeer/fbd0764d1575076c27eaddb55042459a

Raw Gist JSON:

https://gist.githubusercontent.com/trungcodeer/fbd0764d1575076c27eaddb55042459a/raw/paypal-note-first.json
