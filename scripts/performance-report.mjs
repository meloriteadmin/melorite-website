import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'artifacts/performance');
const routes = ['/', '/products', '/products/crm', '/resources/guides', '/contact', '/book-demo', '/custom-solutions', '/company', '/platform'];
const report = Object.fromEntries(routes.map(route => {
  const name = route === '/' ? 'index' : route.slice(1);
  const html = readFileSync(resolve(root, `.next/server/app/${name}.html`), 'utf8');
  const assets = [...new Set([...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+\.(?:js|css))/g)].map(match => match[1]))];
  const size = extension => assets.filter(asset => asset.endsWith(extension)).reduce((total, asset) => total + gzipSync(readFileSync(resolve(root, `.next/${asset.slice(7)}`))).length, 0);
  return [route, { assets, jsGzip: size('.js'), cssGzip: size('.css') }];
}));
mkdirSync(output, { recursive: true });
writeFileSync(resolve(output, 'after.json'), JSON.stringify(report, null, 2) + '\n');
let before = {};
try { before = JSON.parse(readFileSync(resolve(output, 'before.json'), 'utf8')); } catch { /* A baseline is optional for future builds. */ }
const kb = bytes => `${(bytes / 1024).toFixed(1)} KiB`;
const change = (old, current) => old ? `${((1 - current / old) * 100).toFixed(1)}%` : '—';
const rows = Object.entries(report).map(([route, current]) => {
  const old = before[route];
  return `| ${route} | ${old ? kb(old.jsGzip) : '—'} → ${kb(current.jsGzip)} | ${change(old?.jsGzip, current.jsGzip)} | ${old ? kb(old.cssGzip) : '—'} → ${kb(current.cssGzip)} | ${change(old?.cssGzip, current.cssGzip)} |`;
});
const markdown = [
  '# Production asset comparison', '',
  'Gzip estimates for unique initial JavaScript and CSS assets linked by each generated HTML page. Deferred animation/validation chunks, images, prefetched routes and HTML are excluded. These are download-size comparisons, not Lighthouse scores or measured loading times.', '',
  '| Page | Initial JavaScript (before → after) | Reduction | Initial CSS (before → after) | Reduction |',
  '| --- | --- | --- | --- | --- |', ...rows, '',
  'Run `npm run build` followed by `npm run analyze` to refresh the current measurements.', '',
].join('\n');
writeFileSync(resolve(output, 'report.md'), markdown);
console.log(markdown);
