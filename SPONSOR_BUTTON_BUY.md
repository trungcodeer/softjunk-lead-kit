# SoftJunk Sponsor Button Buy Route

Use this route when a buyer is already inside the GitHub repository and wants the native GitHub Sponsor button to lead to the 5 USD PayPal checkout.

## What The Button Points To

The repository funding file is:

https://github.com/trungcodeer/softjunk-lead-kit/blob/main/.github/FUNDING.yml

The first custom funding URL is the exact PayPal checkout:

https://paypal.me/softjunk/5USD

The other custom URLs explain the order note, delivery shell, and Buy Now route.

## Buyer Steps

1. Click the repository Sponsor button, or open the PayPal URL directly.
2. Pay exactly 5 USD at https://paypal.me/softjunk/5USD.
3. Use this PayPal note if buying one quiet-lead rescue:

```text
One Lead Rescue | Business: [business type] | Service: [service] | Source: [form/DM/call/email/referral] | Need: [missed call/estimate/no-show/quiet DM/price] | Tone: [friendly/professional/direct] | Next: [book/reply/quote/call]
```

4. If the PayPal note is too short, submit non-sensitive order context after payment:

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
- Direct PayPal checkout: https://paypal.me/softjunk/5USD
- PayPal note first: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/PAYPAL_NOTE_FIRST.md
- Instant fulfillment packet: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/INSTANT_FULFILLMENT_PACKET.md
- Buy Now packet: https://github.com/trungcodeer/softjunk-lead-kit/blob/main/BUY_NOW.md
