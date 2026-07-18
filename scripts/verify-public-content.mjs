import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const site = read("src/content/site.ts");
const app = read("src/App.tsx");
const sitemap = read("public/sitemap.xml");
const llms = read("public/llms.txt");

for (const route of ["/xo-wp", "/xo-wp/checkout", "/xo-wp/commerce-rules", "/xo-wp/quotes-and-portal", "/xo-wp/intelligence", "/use-cases", "/pricing", "/early-access", "/trust", "/privacy"]) {
  assert.ok(app.includes(`path=\"${route}\"`), `App is missing route ${route}`);
  assert.ok(sitemap.includes(`https://xodigital.systems${route}`), `Sitemap is missing ${route}`);
}

for (const family of ["Standard", "Soft Premium", "Clean Corporate", "Dark Luxury", "Art Deco Gatsby", "Bold Modern", "Meridian"]) assert.ok(site.includes(`name: \"${family}\"`), `Missing checkout family ${family}`);
assert.equal((site.match(/principles: \["/g) ?? []).length, 7, "Every checkout family must explain its design principles");
assert.equal(site.includes("/images/checkout-proof/"), false, "Public content must not reference private checkout captures");
assert.equal(existsSync(new URL("public/images/checkout-proof", root)), false, "Checkout captures must not be deployed in the public directory");
for (const scenario of ["metro", "value", "remote", "collection"]) assert.ok(site.includes(`id: \"${scenario}\"`), `Missing scenario ${scenario}`);

assert.ok(site.includes('CTA_MODE: CtaMode = "early_access"'), "CTA mode must remain early access before launch");
assert.ok(site.includes("Customer quotation requests"), "Free quotation request claim is missing");
assert.ok(site.includes("Managed quote and invoice dashboard"), "Pro managed quote distinction is missing");
assert.ok(site.includes("Client 360 workspace"), "Enterprise Client 360 claim is missing");
assert.ok(llms.includes("Free customer quotation requests are not the same"), "AI documentation must preserve the Free/Pro distinction");

const publicFiles = [
  ...readdirSync(new URL("src", root), { recursive: true }).filter((entry) => typeof entry === "string" && /\.(ts|tsx|css)$/.test(entry)).map((entry) => join("src", entry)),
  "public/llms.txt",
  "public/sitemap.xml",
];
const forbidden = [/Plastics For Africa/i, /Keymaster/i, /djozbgoibwermxbjcgxm/i, /zldzhzmwvhcqnvivuiff/i];
for (const file of publicFiles) {
  const content = read(file.replaceAll("\\", "/"));
  for (const pattern of forbidden) assert.equal(pattern.test(content), false, `Forbidden public term ${pattern} found in ${file}`);
}

console.log(`Verified ${publicFiles.length} public source files, 10 routes, 7 checkout families, 4 scenarios, and tier/CTA invariants.`);
