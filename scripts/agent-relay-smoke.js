#!/usr/bin/env node
'use strict';

const { spawnSync } = require('node:child_process');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const result = spawnSync(
  process.execPath,
  ['bin/softjunk-lead-kit.js', 'agent', '--json'],
  { encoding: 'utf8' }
);

assert(result.status === 0, `expected exit 0, got ${result.status}: ${result.stderr || result.stdout}`);

let payload;
try {
  payload = JSON.parse(result.stdout);
} catch (error) {
  throw new Error(`expected JSON stdout: ${error.message}\n${result.stdout}`);
}

assert(payload.ok === true, 'expected ok=true');
assert(payload.command === 'agent', 'expected command=agent');
assert(payload.payment_url === 'https://paypal.me/softjunk/5USD', 'expected PayPal URL');
assert(payload.amount === '5.00', 'expected amount=5.00');
assert(payload.currency === 'USD', 'expected currency=USD');
assert(payload.success_signal === 'PAYPAL_PAYMENT_VERIFIED=true', 'expected PayPal verification gate');
assert(
  payload.preferred_no_clone_command ===
    'npm exec --yes --package https://github.com/trungcodeer/softjunk-lead-kit/releases/download/v2.29.163/softjunk-lead-kit-0.2.2.tgz -- softjunk-lead-kit pay --mode custom --json',
  'expected preferred current release tarball no-clone command'
);
assert(
  payload.no_clone_checkout_proof &&
    payload.no_clone_checkout_proof.command === payload.preferred_no_clone_command,
  'expected no_clone_checkout_proof.command to match preferred command'
);
assert(Array.isArray(payload.fit_checks) && payload.fit_checks.length >= 3, 'expected fit checks');
assert(Array.isArray(payload.fastest_buyer_path) && payload.fastest_buyer_path.length >= 5, 'expected buyer path');
assert(
  typeof payload.copyable_agent_instruction === 'string' &&
    payload.copyable_agent_instruction.includes('https://paypal.me/softjunk/5USD') &&
    payload.copyable_agent_instruction.includes('PAYPAL_PAYMENT_VERIFIED=true'),
  'expected copyable agent instruction with PayPal URL and gate'
);

console.log('agent_relay_smoke_ok');
