#!/usr/bin/env node

const readline = require("node:readline");

const PAYMENT_URL = "https://paypal.me/softjunk/5USD";
const ORDER_FORM_URL =
  "https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=one-lead-rescue-order.yml";
const ROOFING_ORDER_FORM_URL =
  "https://github.com/trungcodeer/softjunk-lead-kit/issues/new?template=roofing-estimate-rescue-order.yml";
const ROOFING_BUYER_ISSUE_URL =
  "https://github.com/trungcodeer/softjunk-lead-kit/issues/7";
const ROOT_RESCUE_URL = "https://trungcodeer.github.io/rescue/";
const ONE_BUYER_SHARE_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/one-buyer-share.html";
const ONE_BUYER_SHARE_JSON =
  "https://trungcodeer.github.io/softjunk-lead-kit/one-buyer-share.json";
const ONE_BUYER_SHARE_TEXT =
  "https://trungcodeer.github.io/softjunk-lead-kit/one-buyer-share.txt";
const CHECKOUT_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/checkout.html#quick-note-title";
const ROOFING_GENERATOR_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/roofing-estimate-generator.html";
const ROOFING_GENERATOR_JSON_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/roofing-estimate-generator.json";
const ROOFING_GENERATOR_TEXT_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/roofing-estimate-generator.txt";
const ROOFING_RESCUE_URL =
  "https://trungcodeer.github.io/softjunk-lead-kit/roofing-estimate-rescue.html";
const AGENTS_CHECKOUT_JSON =
  "https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/agents-checkout.json";
const AI_ACTION_CHECKOUT_JSON =
  "https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/ai-action-checkout.json";
const PACKAGE_JSON_URL =
  "https://raw.githubusercontent.com/trungcodeer/softjunk-lead-kit/main/package.json";
const NPM_FUNDING_JSON =
  "https://trungcodeer.github.io/softjunk-lead-kit/npm-funding.json";
const NPM_FUNDING_MARKDOWN =
  "https://github.com/trungcodeer/softjunk-lead-kit/blob/main/NPM_FUNDING.md";

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
    name: "build_roofing_estimate_follow_up_sequence",
    title: "Build roofing estimate follow-up sequence",
    description:
      "Generate Day 0, 1, 3, 5, and 7 roofing estimate follow-up texts from non-sensitive context, plus the exact 5 USD PayPal rescue handoff.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: [
        "project_type",
        "likely_blocker",
        "tone",
        "next_step",
        "value_reason"
      ],
      properties: {
        business_type: {
          type: "string",
          description:
            "Non-sensitive business category. Default: roofing contractor."
        },
        project_type: {
          type: "string",
          description:
            "Non-sensitive roofing project type, such as roof replacement estimate."
        },
        likely_blocker: {
          type: "string",
          enum: [
            "scope",
            "timing",
            "budget",
            "insurance",
            "comparison shopping",
            "not sure"
          ]
        },
        tone: {
          type: "string",
          enum: ["friendly", "professional", "direct", "calm"]
        },
        next_step: {
          type: "string",
          enum: [
            "confirm the next step",
            "answer one question",
            "review the scope",
            "show a smaller option",
            "schedule a call"
          ]
        },
        value_reason: {
          type: "string",
          description:
            "Non-sensitive reason the recovery is worth testing, such as one recovered roof job is worth more than 5 USD."
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
    name: "get_softjunk_npm_funding_route",
    title: "Get SoftJunk npm funding route",
    description:
      "Return package metadata, npm fund commands, exact 5 USD PayPal URL, order form, and verification gate for GitHub package installs and repo cloners.",
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

function hasPrivateIdentifier(value) {
  return (
    /\S+@\S+\.\S+/.test(value) ||
    /(?:\+?\d[\d\s().-]{6,}\d)/.test(value) ||
    /\b\d{1,5}\s+[A-Za-z0-9.\s]{2,}\s+(?:street|st|avenue|ave|road|rd|lane|ln|drive|dr|blvd|boulevard|way|court|ct)\b/i.test(value) ||
    /\b(?:paypal|transaction|invoice|claim|policy)\s*(?:id|email|number|no\.?)\b/i.test(value)
  );
}

function requireString(args, name) {
  const value = sanitize(args[name]);
  if (!value) {
    throw new Error(`Missing required argument: ${name}`);
  }
  if (hasPrivateIdentifier(value)) {
    throw new Error(
      `Private identifier detected in ${name}; use non-sensitive business context only.`
    );
  }
  return value;
}

function optionalString(args, name, fallback) {
  const value = sanitize(args[name]) || fallback;
  if (hasPrivateIdentifier(value)) {
    throw new Error(
      `Private identifier detected in ${name}; use non-sensitive business context only.`
    );
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

function buildRoofingEstimateSequence(args) {
  const businessType = optionalString(
    args,
    "business_type",
    "roofing contractor"
  );
  const projectType = requireString(args, "project_type");
  const likelyBlocker = requireString(args, "likely_blocker");
  const tone = requireString(args, "tone");
  const nextStep = requireString(args, "next_step");
  const valueReason = requireString(args, "value_reason");
  const blockerLine =
    likelyBlocker === "not sure"
      ? "scope, timing, budget, insurance, or one line item"
      : likelyBlocker;
  const paypalNote = `One Lead Rescue | Business: ${businessType} | Service: ${projectType} | Source: estimate | Need: unanswered roofing estimate | Tone: ${tone} | Next: ${nextStep}`;
  const sequence = {
    day_0: `Hi, checking that you saw the ${projectType}. If the scope looks right, I can ${nextStep}. If ${blockerLine} is the blocker, reply with that and I will make the path clearer.`,
    day_1: `Hi, quick follow-up on the ${projectType}. Do you want me to hold the current scope, show a smaller option, or answer one question first?`,
    day_3:
      "Hi, I know roofing decisions are not small. If you are comparing options, I can clarify what is included so the estimate is easier to judge.",
    day_5: `Hi, should I keep this ${projectType} active? Reply yes and I will send the next step, or reply with the part you want adjusted.`,
    day_7:
      "Hi, I will close the loop for now so I do not keep bothering you. If the roof project comes back up, reply here and I can reopen the estimate path."
  };

  return {
    fit_rule: [
      "Use when the buyer is a roofing contractor, assistant, or VA with one unanswered roofing estimate.",
      "Use only non-sensitive business context.",
      "One recovered roof job should be worth more than 5 USD."
    ],
    privacy_rule:
      "Do not enter homeowner names, emails, phone numbers, street addresses, insurance claim numbers, invoice IDs, transaction IDs, PayPal IDs, or private job details.",
    project_type: projectType,
    likely_blocker: likelyBlocker,
    tone,
    value_reason: valueReason,
    sequence,
    paypal_note: paypalNote,
    buyer_message:
      `Use this generated roofing estimate sequence. If a custom rescue is wanted, open the public roofing buyer issue at ${ROOFING_BUYER_ISSUE_URL}, copy this PayPal note: ${paypalNote}. Pay exactly 5 USD at ${PAYMENT_URL}. After payment, submit non-sensitive roofing order details at ${ROOFING_ORDER_FORM_URL}. Delivery starts only after seller-side PayPal proof confirms the payment.`,
    roofing_estimate_generator_url: ROOFING_GENERATOR_URL,
    roofing_estimate_generator_json_url: ROOFING_GENERATOR_JSON_URL,
    roofing_estimate_generator_text_url: ROOFING_GENERATOR_TEXT_URL,
    roofing_estimate_rescue_url: ROOFING_RESCUE_URL,
    roofing_buyer_issue_url: ROOFING_BUYER_ISSUE_URL,
    roofing_estimate_order_form_url: ROOFING_ORDER_FORM_URL,
    ...checkoutRoutes()
  };
}

function checkoutRoutes() {
  return {
    root_rescue_url: ROOT_RESCUE_URL,
    one_buyer_share_url: ONE_BUYER_SHARE_URL,
    one_buyer_share_json_url: ONE_BUYER_SHARE_JSON,
    one_buyer_share_text_url: ONE_BUYER_SHARE_TEXT,
    checkout_url: CHECKOUT_URL,
    roofing_estimate_generator_url: ROOFING_GENERATOR_URL,
    roofing_estimate_generator_json_url: ROOFING_GENERATOR_JSON_URL,
    roofing_estimate_generator_text_url: ROOFING_GENERATOR_TEXT_URL,
    roofing_estimate_rescue_url: ROOFING_RESCUE_URL,
    roofing_buyer_issue_url: ROOFING_BUYER_ISSUE_URL,
    payment_url: PAYMENT_URL,
    price: "5.00",
    currency: "USD",
    order_form_url: ORDER_FORM_URL,
    roofing_estimate_order_form_url: ROOFING_ORDER_FORM_URL,
    agents_checkout_json_url: AGENTS_CHECKOUT_JSON,
    ai_action_checkout_json_url: AI_ACTION_CHECKOUT_JSON,
    npm_funding_json_url: NPM_FUNDING_JSON,
    npm_funding_markdown_url: NPM_FUNDING_MARKDOWN,
    package_json_url: PACKAGE_JSON_URL,
    npm_fund_command: "npm fund",
    npm_run_fund_command: "npm run fund",
    npm_run_fund_kit_command: "npm run fund:kit",
    a2a_agent_card_url:
      "https://trungcodeer.github.io/softjunk-lead-kit/.well-known/agent-card.json",
    mcp_checkout_manifest_url:
      "https://trungcodeer.github.io/softjunk-lead-kit/mcp-checkout-server.json",
    verification_gate: verificationGate()
  };
}

function npmFundingRoute() {
  return {
    package_name: "softjunk-lead-kit",
    package_json_url: PACKAGE_JSON_URL,
    funding_type: "custom",
    funding_url: PAYMENT_URL,
    npm_funding_json_url: NPM_FUNDING_JSON,
    npm_funding_markdown_url: NPM_FUNDING_MARKDOWN,
    commands: [
      {
        command: "npm fund",
        purpose: "Read package funding metadata and surface the exact PayPal URL."
      },
      {
        command: "npm run fund",
        purpose: "Print the custom one-lead rescue PayPal handoff JSON."
      },
      {
        command: "npm run fund:kit",
        purpose: "Print the ready digital kit PayPal handoff JSON."
      }
    ],
    value_first_commands: ["npm start", "npm run try:rescue", "npm run try:send"],
    payment_url: PAYMENT_URL,
    price: "5.00",
    currency: "USD",
    order_form_url: ORDER_FORM_URL,
    verification_gate: verificationGate(),
    route_rule:
      "This is a payment route, not payment proof. Do not claim paid, started, delivered, fulfilled, complete, or received unless seller-side PayPal evidence exists or PAYPAL_PAYMENT_VERIFIED=true."
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
        version: "2026.05.27"
      },
      instructions:
        "Use the SoftJunk checkout tools only for legitimate one-lead rescue buyers. Use the npm funding tool when an agent, repo cloner, or package scanner needs package-native payment discovery. Use the roofing estimate tool only with non-sensitive context. Never claim payment or fulfillment before seller-side PayPal verification."
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

    if (params.name === "build_roofing_estimate_follow_up_sequence") {
      return toolResult(buildRoofingEstimateSequence(args));
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

    if (params.name === "get_softjunk_npm_funding_route") {
      return toolResult(npmFundingRoute());
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
