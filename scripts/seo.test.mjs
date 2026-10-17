import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout } from 'node:timers/promises';
const base = process.env.SEO_TEST_URL || 'http://127.0.0.1:3187';
let server;
const pages = new Map();
const paths = ['/', '/products', ...['crm','real-estate','clinic','agency','commerce','ai-calling'].map(s => `/products/${s}`), '/platform', '/custom-solutions', '/company', '/contact', '/book-demo'];
const decode = value => value?.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
const attr = (html, attribute, value, target = 'content') => decode(html.match(new RegExp(`<[^>]*${attribute}="${value}"[^>]*${target}="([^"]+)"`))?.[1]);
before(async () => {
  if (!process.env.SEO_TEST_URL) {
    server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3187'], { stdio: 'ignore' });
    for (let i = 0; i < 60; i++) {
      if (server.exitCode !== null) throw new Error('Test server exited; build first or check port 3187.');
      try { if ((await fetch(base)).ok) break; } catch {}
      await setTimeout(250);
    }
  }
  for (const path of paths) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    pages.set(path, await response.text());
  }
});
after(() => server?.kill());
test('17 public pages have unique metadata, clean canonicals, one H1 and matching social metadata', () => {
  const titles = new Set(), descriptions = new Set();
  for (const [path, html] of pages) {
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1]);
    const description = attr(html, 'name', 'description');
    assert.ok(title && description, path);
    assert.ok(!titles.has(title), `duplicate title: ${path}`); titles.add(title);
    assert.ok(!descriptions.has(description), `duplicate description: ${path}`); descriptions.add(description);
    assert.equal(attr(html, 'rel', 'canonical', 'href'), `https://melorite.com${path === '/' ? '' : path}`, path);
    assert.equal(attr(html, 'property', 'og:title'), title, path);
    assert.equal(attr(html, 'property', 'og:description'), description, path);
    assert.equal(attr(html, 'name', 'twitter:title'), title, path);
    assert.equal(attr(html, 'name', 'twitter:description'), description, path);
    assert.equal(attr(html, 'property', 'og:url'), `https://melorite.com${path === '/' ? '' : path}`, path);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path);
    assert.ok(!/name="robots" content="[^"]*noindex/.test(html), path);
  }
});
test('server-rendered structured data is valid and product breadcrumb matches visible navigation', () => {
  for (const [path, html] of pages) {
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    const entities = schemas.flatMap(s => s['@graph'] || [s]);
    assert.ok(entities.some(s => s['@type'] === 'Organization'), path);
    if (path !== '/') assert.ok(entities.some(s => s['@type'] === 'BreadcrumbList'), path);
    if (/^\/products\/.+/.test(path)) {
      assert.ok(entities.some(s => s['@type'] === 'SoftwareApplication'), path);
      const breadcrumb = entities.find(s => s['@type'] === 'BreadcrumbList');
      assert.deepEqual(breadcrumb.itemListElement.map(s => s.name).slice(0,2), ['Home','Products']);
      assert.ok(html.includes(`/book-demo?product=${path.split('/').pop()}`), path);
    }
    assert.ok(!entities.some(s => s['@type'] === 'AggregateRating'), path);
  }
});
test('all rendered local links, fragment targets and image assets resolve', async () => {
  const urls = new Set();
  for (const [path, html] of pages) {
    for (const match of html.matchAll(/<(?:a|img)\b[^>]*(?:href|src)="([^"]+)"/g)) {
      const href = decode(match[1]);
      if (href.startsWith('#')) { assert.ok(html.includes(`id="${href.slice(1)}"`), `${path}: ${href}`); continue; }
      if (href.startsWith('/') && !href.startsWith('//')) urls.add(href);
    }
  }
  for (const href of urls) {
    const response = await fetch(base + href, { redirect: 'manual' });
    assert.equal(response.status, 200, href);
    const url = new URL(href, base);
    if (url.hash) assert.ok((await response.text()).includes(`id="${url.hash.slice(1)}"`), href);
  }
});
test('robots allows rendering assets and sitemap contains only 17 clean public URLs without invented dates', async () => {
  const robots = await (await fetch(base + '/robots.txt')).text();
  assert.ok(!robots.includes('Disallow: /_next/'));
  assert.ok(robots.includes('Sitemap: https://melorite.com/sitemap.xml'));
  const xml = await (await fetch(base + '/sitemap.xml')).text();
  assert.equal((xml.match(/<loc>/g) || []).length, paths.length);
  assert.ok(!xml.includes('<lastmod>'));
  for (const path of paths) assert.ok(xml.includes(`<loc>https://melorite.com${path === '/' ? '' : path}</loc>`), path);
});
test('demo and custom enquiry query variants retain canonical metadata', async () => {
  for (const path of ['/book-demo?product=crm','/book-demo?type=custom-solution','/contact?enquiry=custom&product=custom-solution']) {
    const html = await (await fetch(base + path)).text();
    assert.equal(attr(html, 'rel', 'canonical', 'href'), `https://melorite.com${path.split('?')[0]}`);
  }
});
test('legacy redirects reach direct equivalents; unknown resource and product paths return real 404s', async () => {
  for (const [source, dest] of [["/why-melorite", "/platform"], ["/ai", "/products/ai-calling"], ["/ai/example", "/products/ai-calling"], ["/ai-agents", "/products/ai-calling"], ["/ai-calling", "/products/ai-calling"], ["/business-applications", "/products"], ["/business-applications/example", "/products"], ["/industries", "/products"], ["/industries/example", "/products"], ["/solutions/hospital", "/products/clinic"], ["/solutions/clinic", "/products/clinic"], ["/solutions/real-estate", "/products/real-estate"], ["/solutions/marketing-agency", "/products/agency"], ["/solutions/ecommerce", "/products/commerce"], ["/solutions/sales", "/products/crm"], ["/solutions", "/products"], ["/solutions/example", "/products"], ["/products/crm-growth", "/products/crm"], ["/products/real-estate-crm", "/products/real-estate"], ["/products/clinic-management", "/products/clinic"], ["/products/agency-management", "/products/agency"], ["/products/ecommerce", "/products/commerce"], ["/products/finance", "/products"], ["/products/hrms", "/products"], ["/products/projects", "/products"], ["/products/service", "/products"], ["/products/procurement-inventory", "/products"]]) {
    const response = await fetch(base + source, { redirect: 'manual' });
    assert.equal(response.status, 308, source);
    assert.equal(new URL(response.headers.get('location'), base).pathname, dest);
    assert.equal((await fetch(base + dest, { redirect: 'manual' })).status, 200);
  }
  for (const path of ['/does-not-exist','/products/does-not-exist']) {
    const response = await fetch(base + path);
    assert.equal(response.status, 404, path);
    assert.match(await response.text(), /noindex/);
  }
});
test('invalid and automated enquiry payloads are rejected without delivery', async () => {
  const headers = { 'Content-Type': 'application/json', 'x-forwarded-for': '192.0.2.123' };
  assert.equal((await fetch(base + '/api/enquiries', { method: 'POST', headers, body: '{}' })).status, 422);
  const body = { fullName: 'Local test', workEmail: 'test@example.invalid', phone: '', companyName: '', products: [], enquiryType: 'demo', message: 'Local validation check only', consent: true, website: 'automated', startedAt: Date.now() - 5000 };
  assert.equal((await fetch(base + '/api/enquiries', { method: 'POST', headers, body: JSON.stringify(body) })).status, 400);
});
