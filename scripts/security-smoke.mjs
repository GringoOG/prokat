#!/usr/bin/env node
/**
 * Non-destructive security smoke checks for the static PROKAT site.
 * Usage:
 *   node scripts/security-smoke.mjs
 *   node scripts/security-smoke.mjs https://www.prokat.cz
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const target = process.argv[2] || null;
const root = process.cwd();
let failed = 0;

function ok(msg) {
  console.log(`PASS  ${msg}`);
}
function fail(msg) {
  failed += 1;
  console.error(`FAIL  ${msg}`);
}
function info(msg) {
  console.log(`INFO  ${msg}`);
}

function walkPhp(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkPhp(full, out);
    else if (entry.name.endsWith('.php') || entry.name === 'composer.json') out.push(full);
  }
  return out;
}

const phpFiles = walkPhp(root);
if (phpFiles.length === 0) ok('No PHP application files or composer.json in project tree');
else fail(`PHP artifacts found: ${phpFiles.join(', ')}`);

const gitignore = readFileSync(join(root, '.gitignore'), 'utf8');
for (const pattern of ['.env*', 'node_modules/', 'dist/']) {
  if (gitignore.includes(pattern)) ok(`.gitignore covers ${pattern}`);
  else fail(`.gitignore missing ${pattern}`);
}

const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const allHeaders = (vercel.headers || []).flatMap((h) => h.headers || []).map((h) => h.key);
for (const needed of [
  'Content-Security-Policy',
  'Strict-Transport-Security',
  'X-Content-Type-Options',
  'Referrer-Policy',
  'X-Frame-Options',
  'Permissions-Policy',
]) {
  if (allHeaders.includes(needed)) ok(`vercel.json defines ${needed}`);
  else fail(`vercel.json missing ${needed}`);
}

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
info(`package name=${pkg.name} deps=${Object.keys(pkg.dependencies || {}).join(',')}`);

if (target) {
  const res = await fetch(target, { redirect: 'follow' });
  const headers = res.headers;
  info(`Fetched ${target} status=${res.status}`);
  for (const h of [
    'content-security-policy',
    'strict-transport-security',
    'x-content-type-options',
    'referrer-policy',
    'x-frame-options',
  ]) {
    if (headers.get(h)) ok(`Live header present: ${h}`);
    else fail(`Live header missing: ${h}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log('\nAll smoke checks passed');
