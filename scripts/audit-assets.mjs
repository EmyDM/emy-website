#!/usr/bin/env node
// EMY launch audit: report local static assets referenced by application source.
// Run: node scripts/audit-assets.mjs
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourceDirs = ['app', 'components'];
const extensions = new Set(['.tsx', '.ts', '.jsx', '.js', '.css', '.json']);
const references = new Map();
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (extensions.has(path.extname(entry.name))) {
      const body = await readFile(full, 'utf8');
      const regex = /\/(?:images|fonts|publications)\/[\w.\-\/]+/g;
      for (const match of body.matchAll(regex)) {
        const asset = match[0];
        if (!references.has(asset)) references.set(asset, new Set());
        references.get(asset).add(path.relative(root, full));
      }
    }
  }
}
for (const dir of sourceDirs) await walk(path.join(root, dir));
const missing = [];
for (const [asset, sources] of references) {
  try { if (!(await stat(path.join(publicDir, asset.slice(1)))).isFile()) throw Error('not a file'); }
  catch { missing.push({ asset, sources: [...sources] }); }
}
missing.sort((a,b) => a.asset.localeCompare(b.asset));
console.log(JSON.stringify({ checked: references.size, missing: missing.length, details: missing }, null, 2));
if (missing.length) process.exitCode = 1;
