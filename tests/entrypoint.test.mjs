import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const source = read('index.html');
const built = read('dist/index.html');

function checkStaticEntry(html, label) {
  assert.match(html, /<h1 class="hero-title">[\s\S]*?Immigration Families/, `${label}: static hero must be the entry`);
  assert.doesNotMatch(html, /<script[^>]+src=["'][^"']*src\/main\.jsx/, `${label}: React prototype must not be an unreviewed entry`);
  assert.doesNotMatch(html, /<div[^>]+id=["']root["']/, `${label}: unexpected React mount`);
  for (const id of ['services', 'process', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`), `${label}: missing ${id} section`);
    assert.match(html, new RegExp(`href="#${id}"`), `${label}: missing ${id} nav`);
  }
  for (const href of ['https://notary.cx/nd', 'https://notary.im']) {
    assert.ok(html.includes(`href="${href}"`), `${label}: missing contact link ${href}`);
  }
  assert.match(html, /<button[^>]+id="mobileMenuBtn"[^>]+aria-controls="mobileNav"[^>]+aria-expanded="false"/,
    `${label}: mobile navigation control lost its accessible state`);
  assert.match(html, /<nav[^>]+id="mobileNav"/, `${label}: mobile navigation target missing`);
}

test('source entry explicitly selects the static page and a bundled module', () => {
  checkStaticEntry(source, 'source');
  assert.match(source, /<script type="module" src="\/script\.js"><\/script>/,
    'classic script.js is left out of Vite output');
});

test('production artifact contains the static page, bundled behavior and host rules', () => {
  checkStaticEntry(built, 'dist');
  const scriptAssets = [...built.matchAll(/<script[^>]+src="(\/assets\/[^"?#]+\.js)"/g)].map(m => m[1]);
  assert.ok(scriptAssets.length > 0, 'dist/index.html must reference a built script');
  assert.ok(scriptAssets.some(asset => {
    const path = resolve(root, 'dist', asset.slice(1));
    return existsSync(path) && readFileSync(path, 'utf8').includes('mobileMenuBtn');
  }), 'referenced JS asset must contain the mobile navigation behavior');
  assert.match(built, /<link[^>]+href="\/assets\/[^"?#]+\.css"/,
    'dist/index.html must reference a built stylesheet');
  for (const rule of ['_redirects', 'web.config']) {
    assert.equal(read(`dist/${rule}`), read(`public/${rule}`), `${rule} host artifact changed`);
  }
});
