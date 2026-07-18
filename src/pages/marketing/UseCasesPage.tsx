import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { FinalCta, Hero, SectionIntro } from "@/components/marketing/MarketingComponents";
import { UseCaseGrid } from "@/components/marketing/UseCaseGrid";

const UseCasesPage = () => (
  <MarketingShell>
    <Seo title="XO for WooCommerce Use Cases | Ecommerce, Delivery and Quotes" description="Explore how XO supports branded ecommerce, complex delivery, mixed retail and B2B, and formal quotation workflows." path="/use-cases" />
    <Hero compact eyebrow="XO use cases" title="Different ways of selling deserve different customer paths." body="XO starts with the branded checkout every ecommerce store can understand, then adds commercial depth only where the products, destination or customer journey require it." secondary={{ label: "Explore the product", href: "/xo-wp" }} />
    <section className="mkt-section">
      <SectionIntro eyebrow="Four journeys" title="Choose the problem that looks most like your store." />
      <UseCaseGrid />
    </section>
    <FinalCta title="Your store may combine more than one of these journeys." body="Tell us what customers buy, where delivery becomes difficult and when the order needs a more formal path." />
  </MarketingShell>
);

export default UseCasesPage;
