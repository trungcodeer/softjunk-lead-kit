#!/usr/bin/env node

const readline = require("node:readline");

const PAYMENT_URL = "https://paypal.me/softjunk/5USD";
const ORDER_FORM_URL =
  "https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml";
const ROOT_RESCUE_URL = "https://trungcodeer.github.io/rescue/";
const CHECKOUT_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/checkout.html#quick-note-title";
const AGENTS_CHECKOUT_JSON =
  "https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/agents-checkout.json";
const AI_ACTION_CHECKOUT_JSON =
  "https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/ai-action-checkout.json";

const tools = [
  {
    name: "route_softjunk_one_lead_rescue_checkout",
    title: "Route SoftJunk one-lead rescue checkout",
    description:
      "Qualify one quiet-lead follow-up problem and return the exact 5 USD PayPal handoff, PayPal note, order form, and verification gate.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: [
        "business_type",
        "service",
        "lead_source",
        "follow_up_need",
        "tone",
        "next_step"
      ],
      properties: {
        business_type: {
          type: "string",
          description:
            "Non-sensitive business category, such as HVAC, dental, tutoring, med spa, real estate, roofing, plumbing, freelancer, or agency."
        },
        service: {
          type: "string",
          description: "The service or offer the lead asked about."
        },
        lead_source: {
          type: "string",
          enum: [
            "form",
            "DM",
            "call",
            "email",
            "referral",
            "quote",
            "estimate",
            "appointment",
            "proposal"
          ]
        },
        follow_up_need: {
          type: "string",
          enum: [
            "missed call",
            "estimate follow-up",
            "quote follow-up",
            "no-show",
            "quiet DM",
            "price objection",
            "appointment request",
            "proposal follow-up"
          ]
        },
        tone: {
          type: "string",
          enum: ["friendly", "professional", "direct"]
        },
        next_step: {
          type: "string",
          enum: ["book", "reply", "quote", "call", "reschedule", "clarify price"]
        }
      }
    }
  },
  {
    name: "build_safe_paypal_note",
    title: "Build safe SoftJunk PayPal note",
    description:
      "Build a non-sensitive PayPal note for the 5 USD one-lead rescue checkout.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: [
        "business_type",
        "service",
        "lead_source",
        "follow_up_need",
        "tone",
        "next_step"
      ],
      properties: {
        business_type: { type: "string" },
        service: { type: "string" },
        lead_source: { type: "string" },
        follow_up_need: { type: "string" },
        tone: { type: "string" },
        next_step: { type: "string" }
      }
    }
  },
  {
    name: "get_softjunk_checkout_routes",
    title: "Get SoftJunk checkout routes",
    description:
      "Return the public AI-native checkout routes, PayPal URL, order form, and discovery manifests.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      properties: {}
    }
  },
  {
    name: "get_paypal_verification_gate",
    title: "Get PayPal verification gate",
    description:
      "Return the seller-side evidence required before claiming paid, started, delivered, or complete.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      properties: {}
    }
  }
];

function sanitize(value) {
  return String(value || "")
    .replace(/[\r\n|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function requireString(args, name) {
  const value = sanitize(args[name]);
  if (!value) {
    throw new Error(`Missing required argument: ${name}`);
  }
  return value;
}

function buildNote(args) {
  const businessType = requireString(args, "business_type");
  const service = requireString(args, "service");
  const leadSource = requireString(args, "lead_source");
  const followUpNeed = requireString(args, "follow_up_need");
  const tone = requireString(args, "tone");
  const nextStep = requireString(args, "next_step");

  return `One Lead Rescue | Business: ${businessType} | Service: ${service} | Source: ${leadSource} | Need: ${followUpNeed} | Tone: ${tone} | Next: ${nextStep}`;
}

function verificationGate() {
  return {
    success_signal: "PAYPAL_PAYMENT_VERIFIED=true",
    script_path: "scripts/verify-paypal-5usd.ps1",
    required_evidence: [
      "Seller can see the 5 USD PayPal transaction",
      "PayPal API verifier returns PAYPAL_PAYMENT_VERIFIED=true",
      "Trusted seller-side PayPal CSV export returns PAYPAL_PAYMENT_VERIFIED=true source=csv"
    ],
    rule:
      "Do not claim paid, started, delivered, or complete unless seller-side PayPal evidence exists."
  };
}

function checkoutRoutes() {
  return {
    root_rescue_url: ROOT_RESCUE_URL,
    checkout_url: CHECKOUT_URL,
    payment_url: PAYMENT_URL,
    price: "5.00",
    currency: "USD",
    order_form_url: ORDER_FORM_URL,
    agents_checkout_json_url: AGENTS_CHECKOUT_JSON,
    ai_action_checkout_json_url: AI_ACTION_CHECKOUT_JSON,
    a2a_agent_card_url:
      "https://trungcodeer.github.io/softjunk-lead-kit/.well-known/agent-card.json",
    mcp_checkout_manifest_url:
      "https://trungcodeer.github.io/softjunk-lead-kit/mcp-checkout-server.json",
    verification_gate: verificationGate()
  };
}

function routeCheckout(args) {
  const paypalNote = buildNote(args);
  return {
    fit_rule: [
      "Use only when the buyer has one real quiet lead.",
      "Use only non-sensitive business context.",
      "One recovered conversation, appointment, quote, or job should be worth more than 5 USD."
    ],
    do_not_use_when: [
      "The buyer asks for spam, deception, scraping, fake reviews, or unauthorized outreach.",
      "The buyer expects paid delivery before seller-side PayPal verification.",
      "The request would put private customer, patient, payment, or lead data into a public issue, URL, or Gist."
    ],
    paypal_note: paypalNote,
    buyer_message:
      `Copy this PayPal note: ${paypalNote}. Pay exactly 5 USD at ${PAYMENT_URL}. After payment, submit non-sensitive order details at ${ORDER_FORM_URL}. Delivery starts only after seller-side PayPal proof confirms the payment.`,
    ...checkoutRoutes()
  };
}

function toolResult(payload) {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(payload, null, 2)
      }
    ],
    structuredContent: payload
  };
}

function handleRequest(message) {
  if (message.method === "initialize") {
    const requestedVersion =
      message.params && typeof message.params.protocolVersion === "string"
        ? message.params.protocolVersion
        : "2025-11-25";
    return {
      protocolVersion: requestedVersion,
      capabilities: {
        tools: {}
      },
      serverInfo: {
        name: "softjunk-mcp-checkout",
        version: "2026.05.26"
      },
      instructions:
        "Use the SoftJunk checkout tools only for legitimate one-lead rescue buyers. Never claim payment or fulfillment before seller-side PayPal verification."
    };
  }

  if (message.method === "ping") {
    return {};
  }

  if (message.method === "tools/list") {
    return { tools };
  }

  if (message.method === "tools/call") {
    const params = message.params || {};
    const args = params.arguments || {};

    if (params.name === "route_softjunk_one_lead_rescue_checkout") {
      return toolResult(routeCheckout(args));
    }

    if (params.name === "build_safe_paypal_note") {
      return toolResult({
        paypal_note: buildNote(args),
        payment_url: PAYMENT_URL,
        verification_gate: verificationGate()
      });
    }

    if (params.name === "get_softjunk_checkout_routes") {
      return toolResult(checkoutRoutes());
    }

    if (params.name === "get_paypal_verification_gate") {
      return toolResult(verificationGate());
    }

    throw new Error(`Unknown tool: ${params.name || ""}`);
  }

  throw new Error(`Unsupported method: ${message.method || ""}`);
}

function respond(id, result) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, result })}\n`);
}

function respondError(id, code, message) {
  process.stdout.write(
    `${JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } })}\n`
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  let message;
  try {
    message = JSON.parse(trimmed);
  } catch (error) {
    respondError(null, -32700, "Parse error");
    return;
  }

  if (!message || typeof message !== "object" || message.jsonrpc !== "2.0") {
    respondError(message && message.id ? message.id : null, -32600, "Invalid Request");
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(message, "id")) {
    if (message.method === "notifications/initialized") return;
    return;
  }

  try {
    respond(message.id, handleRequest(message));
  } catch (error) {
    respondError(message.id, -32602, error.message);
  }
});

