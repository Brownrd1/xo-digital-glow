import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { FinalCta, Hero, SectionIntro } from "@/components/marketing/MarketingComponents";
import { tiers } from "@/content/site";

const PricingPage = () => (
  <MarketingShell>
    <Seo title="XO for WooCommerce Plans | Free, Pro and Enterprise" description="Compare the distinct jobs of XO Free, Pro and Enterprise without vague feature bundling or launch pricing claims." path="/pricing" type="product" />
    <Hero compact eyebrow="XO plans" title="A useful Free product. Operational depth when the business earns it." body="Free, Pro and Enterprise are different products for different stages of commerce. Final subscription prices will be published before broad launch." secondary={{ label: "Understand the product", href: "/xo-wp" }} />
    <section className="mkt-section">
      <SectionIntro eyebrow="Plans with distinct jobs" title="Start with the buyer experience. Add systems only when they solve a real operational problem." />
      <div className="mkt-tier-grid">{tiers.map((tier) => <article className={`mkt-tier${tier.featured ? " is-featured" : ""}`} key={tier.name}><small>{tier.name === "Free" ? "No time limit" : "Pricing announced before launch"}</small><h3>{tier.name}</h3><strong>{tier.job}</strong><p>{tier.summary}</p><ul className="mkt-feature-list">{tier.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></article>)}</div>
    </section>
    <section className="mkt-section mkt-section--dark"><div className="mkt-split"><div><p className="mkt-eyebrow">Quotation is the clearest distinction</p><h2>Free receives the request. Pro manages the commercial journey.</h2></div><div><p>Free gives customers a real quotation path with basic WooCommerce-native handling. Pro adds the dedicated quote and invoice workspace, customer portal, live payment and advanced operations required to manage that opportunity from request to completion.</p></div></div></section>
    <section className="mkt-section mkt-section--surface"><SectionIntro eyebrow="Choose by operational need" title="Enterprise is not the price of making XO useful." /><div className="mkt-card-grid mkt-card-grid--plan-fit"><article className="mkt-card"><span>01</span><div className="mkt-plan-fit is-free"><small>MERCHANT JOB</small><strong>Improve the buyer experience</strong><span>Checkout · quote requests · basic delivery</span></div><h3>Choose Free</h3><p>When the immediate goal is a better branded checkout, quotation requests, basic delivery and a safe way to evaluate XO.</p></article><article className="mkt-card"><span>02</span><div className="mkt-plan-fit is-pro"><small>MERCHANT JOB</small><strong>Run connected operations</strong><span>Managed quotes · portal · live payment</span></div><h3>Choose Pro</h3><p>When the team needs managed quotes, customer self-service, live payments, advanced routing and broader commerce operations.</p></article><article className="mkt-card"><span>03</span><div className="mkt-plan-fit is-enterprise"><small>MERCHANT JOB</small><strong>Act on commercial signals</strong><span>Recovery · automation · Client 360</span></div><h3>Choose Enterprise</h3><p>When meaningful customer and pipeline activity justifies recovery, automation and a deeper relationship view.</p></article></div></section>
    <FinalCta title="Evaluate the workflow before the plan." body="Tell us what the store needs today. We will not position a more complex tier where a simpler product is the better fit." />
  </MarketingShell>
);

export default PricingPage;
