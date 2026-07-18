import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { CheckoutMock, FinalCta, Hero, JourneyStrip, SectionIntro } from "@/components/marketing/MarketingComponents";
import { CommerceSimulator } from "@/components/marketing/CommerceSimulator";
import { MerchantJourneyCards } from "@/components/marketing/MerchantJourneyCards";
import { tiers } from "@/content/site";

const ProductOverviewPage = () => (
  <MarketingShell>
    <Seo title="XO for WooCommerce | Branded Checkout and Adaptive Commerce" description="A WooCommerce checkout that looks like your brand and knows when an order needs delivery, collection, quotation, payment or customer action." path="/xo-wp" type="product" />
    <Hero eyebrow="XO for WooCommerce · Controlled early access" title="A checkout that looks like your brand—and knows what should happen next." body="Replace the generic WooCommerce checkout with a better buying experience. Keep ordinary ecommerce fast, then add the delivery, quotation, customer and growth depth the business actually needs." secondary={{ label: "See all seven checkout families", href: "/xo-wp/checkout" }}>
      <CheckoutMock />
    </Hero>
    <section className="mkt-fact-row"><div><span>Design system</span><strong>Seven checkout families</strong></div><div><span>Buyer experience</span><strong>Quick + guided modes</strong></div><div><span>Order foundation</span><strong>WooCommerce-native</strong></div><div><span>Starting plan</span><strong>A genuinely useful Free tier</strong></div></section>

    <section className="mkt-section">
      <SectionIntro eyebrow="Not another cosmetic checkout" title="The customer sees a better checkout. The merchant gets a more capable commerce journey." />
      <MerchantJourneyCards />
    </section>

    <section className="mkt-section mkt-section--surface">
      <SectionIntro eyebrow="One cart, different outcomes" title="XO can keep the easy order easy—and give the difficult order somewhere intelligent to go." body="Try the four fictional examples. The interface changes the customer path, not merely the colour of the button." />
      <CommerceSimulator />
    </section>

    <section className="mkt-section mkt-section--dark">
      <SectionIntro eyebrow="The connected journey" title="From customer intent to completed commercial action." body="Quotation and portal depth does not replace ecommerce. It becomes available when the order needs a more formal path." inverse />
      <JourneyStrip steps={["Branded checkout", "Delivery decision", "Order or quotation", "Customer action", "Payment and fulfilment"]} />
    </section>

    <section className="mkt-section">
      <SectionIntro eyebrow="Three plans. Three jobs." title="Start with a better checkout. Add operational depth when it earns its place." />
      <div className="mkt-tier-grid">{tiers.map((tier) => <article className={`mkt-tier${tier.featured ? " is-featured" : ""}`} key={tier.name}><small>{tier.name === "Free" ? "Start here" : tier.name === "Pro" ? "Connected operations" : "Recovery and intelligence"}</small><h3>{tier.name}</h3><strong>{tier.job}</strong><p>{tier.summary}</p><ul className="mkt-feature-list">{tier.features.slice(0, 5).map((feature) => <li key={feature}>{feature}</li>)}</ul></article>)}</div>
      <p style={{ marginTop: 24, color: "var(--mkt-muted)", fontSize: 12 }}>See the complete, accurate plan comparison on the <a href="/pricing"><u>Plans page</u></a>.</p>
    </section>
    <FinalCta title="Bring us the checkout your store has outgrown." body="Tell us about the products, delivery conditions and customer journeys that make your current WooCommerce process harder than it should be." />
  </MarketingShell>
);

export default ProductOverviewPage;
