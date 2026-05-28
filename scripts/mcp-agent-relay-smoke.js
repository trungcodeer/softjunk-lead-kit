#!/usr/bin/env node
'use strict';

const { spawn } = require('node:child_process');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function request(id, method, params) {
  return JSON.stringify({ jsonrpc: '2.0', id, method, params });
}

const child = spawn(process.execPath, ['mcp-server-softjunk.js'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let stdout = '';
let stderr = '';

child.stdout.setEncoding('utf8');
child.stderr.setEncoding('utf8');
child.stdout.on('data', (chunk) => {
  stdout += chunk;
});
child.stderr.on('data', (chunk) => {
  stderr += chunk;
});

child.stdin.write(`${request(1, 'initialize', { protocolVersion: '2025-11-25' })}\n`);
child.stdin.write(`${request(2, 'tools/list', {})}\n`);
child.stdin.write(`${request(3, 'tools/call', { name: 'get_softjunk_agent_relay', arguments: {} })}\n`);
child.stdin.end();

const timer = setTimeout(() => {
  child.kill();
}, 5000);

child.on('close', (code) => {
  clearTimeout(timer);
  assert(code === 0, `expected MCP server exit 0, got ${code}; stderr=${stderr}`);

  const messages = stdout
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));

  const list = messages.find((message) => message.id === 2);
  assert(list && list.result && Array.isArray(list.result.tools), 'expected tools/list response');
  assert(
    list.result.tools.some((tool) => tool.name === 'get_softjunk_agent_relay'),
    'expected get_softjunk_agent_relay in tools/list'
  );

  const call = messages.find((message) => message.id === 3);
  assert(call && call.result && call.result.structuredContent, 'expected structuredContent for relay call');

  const payload = call.result.structuredContent;
  assert(payload.payment_url === 'https://paypal.me/softjunk/5USD', 'expected PayPal URL');
  assert(payload.amount === '5.00', 'expected amount=5.00');
  assert(payload.currency === 'USD', 'expected currency=USD');
  assert(payload.success_signal === 'PAYPAL_PAYMENT_VERIFIED=true', 'expected success signal');
  assert(
    payload.run_from_github_package_agent ===
      'npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit agent --json',
    'expected GitHub package agent relay command'
  );
  assert(
    payload.run_from_github_package_pay_custom ===
      'npm exec --yes --package github:trungcodeer/softjunk-lead-kit -- softjunk-lead-kit pay --mode custom --json',
    'expected GitHub package checkout command'
  );
  assert(
    Array.isArray(payload.fit_checks) && payload.fit_checks.length >= 3,
    'expected fit checks'
  );
  assert(
    payload.verification_gate && payload.verification_gate.success_signal === 'PAYPAL_PAYMENT_VERIFIED=true',
    'expected verification gate'
  );

  console.log('mcp_agent_relay_smoke_ok');
});
