# SoftJunk Instant Fulfillment Packet

Use this after seller-side PayPal proof confirms the 5 USD payment. This public packet is a fulfillment shell and copy bank, not proof that payment arrived.

## Buyer Gets

- Day 0, Day 1, Day 3, Day 5, and Day 7 follow-up messages for one quiet lead.
- One no-show recovery reply.
- One price-objection reply.
- A short seller checklist so fulfillment can be sent without exposing private lead or PayPal details.

## Required PayPal Note

Copy this into PayPal before paying:

```text
One Lead Rescue | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Need: [missed call/estimate/no-show/quiet DM/price] | Tone: [friendly/professional/direct] | Next: [book/reply/quote/call]
```

Pay exactly 5 USD:

https://paypal.me/softjunk/5USD

No-clone checkout proof:

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.162/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Release: https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.162

Current release tarball SHA-256 file: `https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.162/softjunk-lead-kit-0.2.2.tgz.sha256`

Delivery starts only after the seller can see the 5 USD PayPal transaction, the API verifier returns PAYPAL_PAYMENT_VERIFIED=true, or a trusted seller-side PayPal CSV export returns PAYPAL_PAYMENT_VERIFIED=true source=csv.

## Seller Inputs

Use only non-sensitive context from the PayPal note or order form:

- Business: [business type]
- Service: [service]
- Source: [form/DM/call/email/referral]
- Need: [missed call/estimate/no-show/quiet DM/price]
- Tone: [friendly/professional/direct]
- Next: [book/reply/quote/call]

Do not include customer names, emails, phone numbers, addresses, transaction IDs, patient data, or private lead details in public issues, URLs, Gists, or notes.

## Day 0

```text
Hi [Name], quick follow-up on [service]. If this is still open, I can help with [next]. Reply with one word: time, price, or later, and I will send the easiest next step.
```

## Day 1

```text
Hi [Name], checking once more on [service]. If timing is the blocker, I can send the next available option. If price or scope is the blocker, reply with that and I will keep it simple.
```

## Day 3

```text
Hi [Name], I do not want to crowd your inbox. Should I close this out for now, or would you still like help with [service]? A one-word reply is fine.
```

## Day 5

```text
Hi [Name], last practical check-in on [service]. If this is still useful, I can send [next]. If not, no problem and I will stop here.
```

## Day 7

```text
Hi [Name], closing the loop on [service]. If the timing changes, reply here and I can restart from the best next step.
```

## No-Show Recovery

```text
Hi [Name], looks like today got busy. Do you want another time for [service], or should I close this out for now?
```

## Price-Objection Reply

```text
That makes sense. If budget is the main issue, I can show the smallest useful version first or explain what is included so you can decide without pressure.
```

## Seller Delivery Checklist

1. Confirm seller-side PayPal evidence or PAYPAL_PAYMENT_VERIFIED=true.
2. Replace bracketed placeholders using only non-sensitive PayPal note or order-form context.
3. Send the final sequence through the PayPal email or another buyer-requested safe channel.
4. Do not post private customer or payment details publicly.
5. Record only non-sensitive evidence in the public worklog.

## Machine-Readable Packet

- Canonical packet: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/INSTANT_FULFILLMENT_PACKET.md
- JSON: https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/instant-fulfillment-packet.json
- Public Gist: https://gist.github.com/trungcodeer/b291f4850559d170ab8bcdd832e6d93d
- Raw Gist Markdown: https://gist.githubusercontent.com/trungcodeer/b291f4850559d170ab8bcdd832e6d93d/raw/INSTANT_FULFILLMENT_PACKET.md
- Raw Gist JSON: https://gist.githubusercontent.com/trungcodeer/b291f4850559d170ab8bcdd832e6d93d/raw/instant-fulfillment-packet.json
- Buy Now packet: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/BUY_NOW.md
- PayPal note first: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/PAYPAL_NOTE_FIRST.md
- Direct PayPal checkout: https://paypal.me/softjunk/5USD
