# Pay $5 for SoftJunk Lead Follow-Up

Use this when you already know you want the paid SoftJunk lead follow-up kit or custom sequence.

## Payment

Pay exactly $5 through PayPal:

https://paypal.me/softjunk/5USD

## Digital Kit Note

For the digital kit, use this PayPal note:

`Lead Follow-Up Kit`

## Custom Sequence Note

For a custom sequence, create the shareable order link and generated PayPal note here:

https://trungcodeer.github.io/softjunk-lead-kit/shareable-order-link.html

Public shareable order link Gist:

https://gist.github.com/trungcodeer/423bb45dd4b98d552f4db6ed11f399fb

Then paste the generated note into PayPal before sending payment.

## No-Clone Checkout Proof

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Release: https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.163

Current release tarball SHA-256 file: `https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz.sha256`

## After Payment

Open the after-payment handoff:

https://trungcodeer.github.io/softjunk-lead-kit/after-pay.html

The seller delivers manually using the email shown in the PayPal transaction.

## No-Clone Checkout Proof

```bash
npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json
```

Release: https://github.com/trungcodeer/softjunk-lead-kit/releases/tag/v2.29.163

Current release tarball SHA-256 file: `https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz.sha256`

Success signal: `PAYPAL_PAYMENT_VERIFIED=true`

Stop only after seller-side PayPal proof, PayPal API verification, trusted seller-side CSV proof, or `PAYPAL_PAYMENT_VERIFIED=true`.
