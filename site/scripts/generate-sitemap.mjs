/**
 * generate-sitemap.mjs
 * Reads walkthroughs and roundup data, outputs public/sitemap.xml
 * Run with: npm run sitemap
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── helpers ────────────────────────────────────────────────────────────────

function ddmmyyToISO(date) {
  // "25.05.26" → "2026-05-25"
  const [d, m, y] = date.split('.');
  return `20${y}-${m}-${d}`;
}

function url(loc, { lastmod, changefreq = 'weekly', priority = '0.7' } = {}) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n');
}

// ── read data (strip ES module syntax at runtime) ──────────────────────────

function readDataFile(relPath) {
  const abs = resolve(ROOT, 'src', 'data', relPath);
  let src = readFileSync(abs, 'utf8');

  // Remove import statements
  src = src.replace(/^import .+$/gm, '');
  // Replace export const X = Y → const X = Y
  src = src.replace(/^export const /gm, 'const ');
  // Replace export default X → (nothing — not used here)
  src = src.replace(/^export default .+$/gm, '');
  // Wrap in a function that returns the named exports
  return src;
}

// Dynamically import via file:// — Vite data files use plain JS arrays
// We use a tiny regex-based extractor to avoid needing a bundler

function extractArray(src, varName) {
  // Find "const <varName> = [" and grab the balanced array literal
  const start = src.indexOf(`const ${varName}`);
  if (start === -1) return [];
  const arrStart = src.indexOf('[', start);
  if (arrStart === -1) return [];
  let depth = 0, i = arrStart;
  for (; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) break; }
  }
  const arrayStr = src.slice(arrStart, i + 1);
  // eslint-disable-next-line no-eval
  try { return eval(arrayStr); } catch { return []; }
}

// ── load data ──────────────────────────────────────────────────────────────

const walkthroughsSrc = readDataFile('walkthroughs.js');
const roundupsSrc     = readDataFile('roundups.js');

const walkthroughs = extractArray(walkthroughsSrc, 'walkthroughs');
const roundups     = extractArray(roundupsSrc,     'roundups');

const SITE = 'https://underwritingcowboy.com';
const today = new Date().toISOString().slice(0, 10);

// ── build sitemap ──────────────────────────────────────────────────────────

const entries = [
  // Static pages
  url(`${SITE}/`,             { lastmod: today, changefreq: 'daily',   priority: '1.0' }),
  url(`${SITE}/field-guide`,  { lastmod: today, changefreq: 'weekly',  priority: '0.9' }),
  url(`${SITE}/roundup`,      { lastmod: today, changefreq: 'weekly',  priority: '0.8' }),
  url(`${SITE}/toolkit`,      { lastmod: today, changefreq: 'monthly', priority: '0.7' }),
  url(`${SITE}/about`,        { lastmod: today, changefreq: 'monthly', priority: '0.6' }),
  url(`${SITE}/work-with-me`, { lastmod: today, changefreq: 'monthly', priority: '0.6' }),
  url(`${SITE}/subscribe`,    { lastmod: today, changefreq: 'monthly', priority: '0.7' }),

  // Dynamic walkthrough pages
  ...walkthroughs.map(w =>
    url(`${SITE}/field-guide/${w.slug}`, {
      lastmod:    w.date ? ddmmyyToISO(w.date) : today,
      changefreq: 'monthly',
      priority:   w.access === 'free' ? '0.8' : '0.7',
    })
  ),

  // Dynamic roundup pages (if/when they get individual URLs)
  ...roundups
    .filter(r => r.slug)
    .map(r =>
      url(`${SITE}/roundup/${r.slug}`, {
        lastmod:    r.date ? ddmmyyToISO(r.date) : today,
        changefreq: 'never',
        priority:   '0.6',
      })
    ),
];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  '</urlset>',
].join('\n');

const dest = resolve(ROOT, 'public', 'sitemap.xml');
writeFileSync(dest, xml, 'utf8');
console.log(`✓ sitemap.xml written — ${entries.length} URLs`);
walkthroughs.forEach(w => console.log(`  /field-guide/${w.slug}`));
