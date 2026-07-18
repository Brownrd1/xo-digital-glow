import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const site = read("src/content/site.ts");
const simulator = read("src/components/marketing/CommerceSimulator.tsx");
const gallery = read("src/components/marketing/CheckoutGallery.tsx");
const shell = read("src/components/marketing/MarketingShell.tsx");

test("commerce scenarios cover four distinct customer outcomes", () => {
  for (const outcome of ["A clear payable order", "The right offer, automatically", "The sale continues without a bad total", "A simpler fulfilment path"]) assert.ok(site.includes(outcome));
  assert.ok(simulator.includes("setActiveId"));
  assert.ok(simulator.includes('role="tabpanel"'));
  assert.ok(simulator.includes('aria-live="polite"'));
});

test("all seven checkout families are interactive and publicly named", () => {
  assert.equal((site.match(/character: \"/g) ?? []).length, 7);
  assert.equal((site.match(/principles: \["/g) ?? []).length, 7);
  assert.ok(gallery.includes("setActiveKey"));
  assert.ok(gallery.includes('role="tablist"'));
  assert.equal(gallery.includes("<img"), false);
  assert.equal(gallery.includes("CheckoutMock"), false);
});

test("plan truth keeps customer quote requests separate from managed operations", () => {
  const free = site.indexOf('name: "Free"');
  const pro = site.indexOf('name: "Pro"');
  const enterprise = site.indexOf('name: "Enterprise"');
  assert.ok(free > -1 && pro > free && enterprise > pro);
  assert.ok(site.slice(free, pro).includes("Customer quotation requests"));
  assert.equal(site.slice(free, pro).includes("Managed quote and invoice dashboard"), false);
  assert.ok(site.slice(pro, enterprise).includes("Managed quote and invoice dashboard"));
});

test("site-wide CTA is controlled by one mode", () => {
  assert.ok(site.includes('export const CTA_MODE: CtaMode = "early_access"'));
  assert.ok(site.includes('free_download: { label: "Install XO Free"'));
  assert.ok(shell.includes("ctaCopy[CTA_MODE]"));
});
