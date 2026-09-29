import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

const script = readFileSync(resolve(import.meta.dirname, '..', 'script.js'), 'utf8');

test('mobile navigation state, Escape focus and link dismissal', () => {
  const attrs = {};
  const active = new Set();
  const iconClasses = new Set(['fa-bars']);
  const events = {};
  const icon = {classList: {
    add(name) {iconClasses.add(name);}, remove(name) {iconClasses.delete(name);}
  }};
  const links = [{addEventListener(type, listener) {this[type] = listener;}}];
  const button = {
    querySelector(selector) {assert.equal(selector, 'i'); return icon;},
    setAttribute(name, value) {attrs[name] = value;},
    addEventListener(type, listener) {this[type] = listener;},
    focus() {this.focused = true;}
  };
  const nav = {
    classList: {
      contains(name) {return active.has(name);},
      toggle(name, state) {state ? active.add(name) : active.delete(name);}
    },
    querySelectorAll(selector) {assert.equal(selector, 'a'); return links;}
  };
  const document = {
    getElementById(id) {return id === 'mobileMenuBtn' ? button : id === 'mobileNav' ? nav : null;},
    querySelectorAll() {return [];},
    addEventListener(type, listener) {events[type] = listener;}
  };
  const window = {addEventListener() {}, PerformanceObserver: class {observe() {}}};
  class EmptyObserver {observe() {}}
  vm.runInNewContext(script, {document, window, IntersectionObserver: EmptyObserver,
    PerformanceObserver: EmptyObserver, console: globalThis.console});
  button.click();
  assert.equal(attrs['aria-expanded'], 'true');
  assert.equal(attrs['aria-label'], 'Close navigation');
  assert.equal(iconClasses.has('fa-times'), true);
  events.keydown({key:'Escape'});
  assert.equal(attrs['aria-expanded'], 'false');
  assert.equal(button.focused, true);
  assert.equal(iconClasses.has('fa-bars'), true);
  button.click();
  links[0].click();
  assert.equal(attrs['aria-expanded'], 'false');
});
