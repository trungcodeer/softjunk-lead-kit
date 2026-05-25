# Shareable Order Link Intent

Requested outcome: create a less-traditional, AI-native buyer surface that helps a buyer, VA, or assistant turn lead details into a shareable order URL, PayPal note, and $5 checkout handoff.

Scope:
- Add a public `shareable-order-link.html` tool and machine-readable JSON.
- Wire the route into existing product discovery surfaces and root buyer hub metadata.
- Keep seller-side PayPal verification as the only completion gate for money received.

Non-goals:
- No spam, scraping, deception, fake reviews, unauthorized outreach, or claims of payment without seller-side evidence.
- No automated fulfillment before PayPal evidence exists.

Baseline refs:
- `index.html`
- `agent-order.html`
- `buyer-index.json`
- `agent-offer.json`
- `offers.json`
- `product-feed.json`
- `.well-known/softjunk-offer.json`
- `.well-known/openapi.yaml`
- root hub metadata in `C:/Users/minglucky/Desktop/trungcodeer.github.io`

Impact statement:
This slice should reduce checkout friction and improve assistant/VA handoff quality by creating a URL that carries the buyer's order context directly into a copyable PayPal note.
