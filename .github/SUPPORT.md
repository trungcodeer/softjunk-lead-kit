# SoftJunk $5 Payment And Fulfillment Support

Use this support path only for the SoftJunk Lead Follow-Up Kit or custom 7-day lead follow-up sequence.

## Pay

- Short PayPal route: https://trungcodeer.github.io/paypal/
- Direct PayPal.Me URL: https://paypal.me/softjunk/5USD
- Fast checkout: https://trungcodeer.github.io/softjunk-lead-kit/checkout.html
- QR page: https://trungcodeer.github.io/softjunk-lead-kit/pay-qr.html

## Machine-Readable Payment Intent

- Product payment intent: https://trungcodeer.github.io/softjunk-lead-kit/paypal-payment-intent.json
- Well-known payment intent: https://trungcodeer.github.io/softjunk-lead-kit/.well-known/paypal-payment.json
- Public payment intent Gist: https://gist.github.com/trungcodeer/167d3dc5f8696bf9edb04d3db6c53a02
- Raw Gist JSON: https://gist.githubusercontent.com/trungcodeer/167d3dc5f8696bf9edb04d3db6c53a02/raw/softjunk-5usd-paypal-payment-intent.json

## After Paying

- Digital kit note: `Lead Follow-Up Kit`
- Custom sequence note builder: https://trungcodeer.github.io/softjunk-lead-kit/agent-order.html
- After-payment handoff: https://trungcodeer.github.io/softjunk-lead-kit/after-pay.html
- Order forms: https://github.com/trungcodeer/softjunk-lead-kit/issues/new/choose

Do not post PayPal transaction IDs, buyer email addresses, phone numbers, or private customer details in public issues.

Fulfillment starts only after the seller can see the 5 USD PayPal transaction, the API verifier returns `PAYPAL_PAYMENT_VERIFIED=true`, or a trusted seller-side PayPal CSV export returns `PAYPAL_PAYMENT_VERIFIED=true source=csv`.
