# SoftJunk Sponsor Button Buy Route

## One rewrite included after verified payment

The 5 USD custom sequence includes one rewrite if the first draft is not usable and the buyer supplies non-sensitive business context. Fulfillment starts only after seller-side PayPal evidence exists or `PAYPAL_PAYMENT_VERIFIED=true`.

Buyer-agent BuyAction manifest: https://trungcodeer.github.io/softjunk-lead-kit/paypal-buy-action.json

Use this route when a buyer is already inside the GitHub repository and wants the native GitHub Sponsor button to lead to the 5 USD PayPal checkout.

## What The Button Points To

The repository funding file is:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/.github/FUNDING.yml

The first custom funding URL is the exact PayPal checkout:

https://paypal.me/softjunk/5USD

The second custom funding URL is the one-read roofing buyer-send packet:

https://trungcodeer.github.io/softjunk-lead-kit/roofing-buyer-send.html

The remaining custom URLs explain the Sponsor button route and safe PayPal note.

## Buyer Steps

1. Click the repository Sponsor button, open the buyer-send packet, or open the PayPal URL directly.
2. If buying the roofing estimate rescue, load the buyer-send packet: https://trungcodeer.github.io/softjunk-lead-kit/roofing-buyer-send.html
3. Pay exactly 5 USD at https://paypal.me/softjunk/5USD.
4. Use this PayPal note if buying one quiet-lead rescue:

```text
One Lead Rescue | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Need: [missed call/estimate/no-show/quiet DM/price] | Tone: [friendly/professional/direct] | Next: [book/reply/quote/call]
```

5. If the PayPal note is too short, submit non-sensitive order context after payment:

https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml

## What Gets Delivered

The instant fulfillment packet shows the post-verification shell:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/INSTANT_FULFILLMENT_PACKET.md

## Verification Gate

This Sponsor button route is a payment path, not proof that payment arrived.

Do not claim paid, started, delivered, or complete unless the seller can see the 5 USD PayPal transaction, the API verifier returns PAYPAL_PAYMENT_VERIFIED=true, or a trusted seller-side PayPal CSV export returns PAYPAL_PAYMENT_VERIFIED=true source=csv.

## Machine-Readable Route

- Sponsor button route: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/SPONSOR_BUTTON_BUY.md
- Sponsor button JSON: https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/sponsor-button-buy.json
- Sponsor button Gist: https://gist.github.com/trungcodeer/8f30064ad27d3f9f71ae152fe46703a7
- Sponsor button Gist JSON: https://gist.githubusercontent.com/trungcodeer/8f30064ad27d3f9f71ae152fe46703a7/raw/sponsor-button-buy.json
- Funding config: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/.github/FUNDING.yml
- Roofing buyer-send packet: https://trungcodeer.github.io/softjunk-lead-kit/roofing-buyer-send.html
- Roofing buyer-send JSON: https://trungcodeer.github.io/softjunk-lead-kit/roofing-buyer-send.json
- Roofing buyer-send text: https://trungcodeer.github.io/softjunk-lead-kit/roofing-buyer-send.txt
- Roofing buyer-send Gist: https://gist.github.com/trungcodeer/75cf486f79f6a5ab61b938ba786e0805
- Direct PayPal checkout: https://paypal.me/softjunk/5USD
- PayPal note first: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/PAYPAL_NOTE_FIRST.md
- Instant fulfillment packet: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/INSTANT_FULFILLMENT_PACKET.md
- Buy Now packet: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/BUY_NOW.md
## Current Sponsor Button URLs

The visible GitHub Sponsor button should route a buyer through these four URLs, in order:

1. Pay exactly 5 USD on PayPal: https://paypal.me/softjunk/5USD
2. Open the shortest buyer card: https://trungcodeer.github.io/5/
3. Open the product buyer card: https://trungcodeer.github.io/softjunk-lead-kit/five-dollar-buyer-card.html
4. Read this Sponsor button route: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/SPONSOR_BUTTON_BUY.md

The `/5/` card explains the one-rewrite included promise, the privacy rule, and the `PAYPAL_PAYMENT_VERIFIED=true` fulfillment gate.
