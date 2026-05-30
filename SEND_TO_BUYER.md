# Send This To One Buyer

Use this packet only when a business owner already has one real quiet lead and one recovered reply, quote, appointment, or job is worth more than 5 USD.

Public page:
https://trungcodeer.github.io/softjunk-lead-kit/send-to-buyer.html

Machine-readable JSON:
https://trungcodeer.github.io/softjunk-lead-kit/send-to-buyer.json

Public Gist:
https://gist.github.com/trungcodeer/2cb79cccf1e0e5d0efdfa4ae6d15f683

One-copy order packet:
https://trungcodeer.github.io/softjunk-lead-kit/fix-one-quiet-lead.html

PayPal checkout after packet:
https://paypal.me/softjunk/5USD

No-clone checkout proof:

```bash
npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json
```

Current release marker:
https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.164

Current release tarball:
https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.164/softjunk-lead-kit-0.2.2.tgz

Current release tarball SHA-256 file:
https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.164/softjunk-lead-kit-0.2.2.tgz.sha256

Current release tarball command:
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.164/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json

Stable fallback tarball:
https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz

Stable fallback tarball SHA-256:
`1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c`

## Local Buyer Pitch Generator

The public page includes a local-only generator for:

- Business type
- Service or offer
- Why $5 is worth it
- Lead source
- Lead problem
- Tone
- Best next step

It outputs a buyer-specific short DM, email, PayPal note, `mailto:` link, and prefilled share link. It does not submit field values. Share links place field values in the URL, so only non-sensitive context should be used. The page warns before copying/sharing if editable fields appear to contain email addresses, phone numbers, street addresses, PayPal IDs, invoice IDs, or transaction IDs.

## Short DM

```text
You have one lead that went quiet. If one recovered reply is worth more than $5, I can write the Day 0, 1, 3, 5, and 7 follow-up sequence for that one situation.

Use only non-sensitive business context. Build the one-copy order packet first:
https://trungcodeer.github.io/softjunk-lead-kit/fix-one-quiet-lead.html

Pay exactly $5 after the packet is ready:
https://paypal.me/softjunk/5USD

No-clone checkout proof:
npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json

Current release:
https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.164

Stable fallback tarball:
https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz

Stable fallback tarball SHA-256:
1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c

PayPal note:
One Lead Rescue | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Need: [missed call/estimate/no-show/quiet DM/price] | Tone: [friendly/professional/direct] | Next: [book/reply/quote/call]

After payment, send non-sensitive details here:
https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml
```

## Email

```text
Subject: $5 follow-up sequence for one quiet lead

Hi,

If you have one lead that stopped replying after a form, DM, call, quote, estimate, appointment, or referral, I can write the follow-up sequence for that one situation.

You get Day 0, 1, 3, 5, and 7 messages, plus no-show and price-objection replies. Use only non-sensitive business context.

Build the one-copy order packet first:
https://trungcodeer.github.io/softjunk-lead-kit/fix-one-quiet-lead.html

Pay exactly $5 after the packet is ready:
https://paypal.me/softjunk/5USD

No-clone checkout proof:
npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json

Current release:
https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.164

Stable fallback tarball:
https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.151/softjunk-lead-kit-0.2.2.tgz

Stable fallback tarball SHA-256:
1bc8497b69211a11a28c4fb4cacb98fecb5911ac2b4ca20a30be7bf4456a986c

PayPal note:
One Lead Rescue | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Need: [missed call/estimate/no-show/quiet DM/price] | Tone: [friendly/professional/direct] | Next: [book/reply/quote/call]

After payment, submit non-sensitive order details:
https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml

Fulfillment starts only after seller-side PayPal proof confirms the $5 payment.
```

## Gate

Do not claim paid, started, delivered, or complete unless seller-side PayPal evidence exists, the API verifier returns `PAYPAL_PAYMENT_VERIFIED=true`, or a trusted seller-side PayPal CSV export verifies the 5 USD transaction.
