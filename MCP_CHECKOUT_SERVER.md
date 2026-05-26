# SoftJunk MCP Checkout Server

This repository includes a dependency-free Model Context Protocol stdio server for AI clients that can run local MCP tools.

It exposes checkout-only tools for the SoftJunk 5 USD one-lead rescue. It does not process payment and does not verify payment.

## Run

From this repository:

```bash
node mcp-server-softjunk.js
```

For MCP clients that accept JSON config, use this shape and adjust the absolute path:

```json
{
  "mcpServers": {
    "softjunk-checkout": {
      "command": "node",
      "args": [
        "C:/path/to/softjunk-lead-kit/mcp-server-softjunk.js"
      ]
    }
  }
}
```

## Tools

- `route_softjunk_one_lead_rescue_checkout`
- `build_safe_paypal_note`
- `get_softjunk_checkout_routes`
- `get_paypal_verification_gate`

The main checkout tool returns:

- PayPal note
- exact 5 USD payment URL: https://paypal.me/softjunk/5USD
- order form: https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml
- verification gate: `PAYPAL_PAYMENT_VERIFIED=true`

## Safety Gate

Do not claim paid, started, delivered, or complete unless one of these is true:

- Seller can see the 5 USD PayPal transaction.
- PayPal API verifier returns `PAYPAL_PAYMENT_VERIFIED=true`.
- Trusted seller-side PayPal CSV export returns `PAYPAL_PAYMENT_VERIFIED=true source=csv`.

## Public Discovery

- MCP checkout manifest: https://trungcodeer.github.io/softjunk-lead-kit/mcp-checkout-server.json
- Well-known MCP checkout manifest: https://trungcodeer.github.io/softjunk-lead-kit/.well-known/mcp-checkout-server.json
- Raw server source: https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/mcp-server-softjunk.js
- Public Gist fallback: https://gist.github.com/trungcodeer/76b4b70a3b13bfec62c5f66c3ebec30d

The official MCP Registry `server.json` format supports package and remote server declarations. This repo does not claim a public remote MCP endpoint because GitHub Pages cannot serve a live JSON-RPC `POST /mcp` transport.
