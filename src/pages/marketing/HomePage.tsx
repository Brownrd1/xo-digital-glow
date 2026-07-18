import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { CheckoutMock, FinalCta, Hero, SectionIntro } from "@/components/marketing/MarketingComponents";
import { CommerceSimulator } from "@/components/marketing/CommerceSimulator";
import { MerchantJourneyCards } from "@/components/marketing/MerchantJourneyCards";
import { UseCaseGrid } from "@/components/marketing/UseCaseGrid";
import { publicFaqs } from "@/content/site";

const HomePage = () => (
  <MarketingShell>
    <Seo title="XO Digital Systems | Commerce That Adapts to the Order" description="XO Digital Systems builds branded checkout and connected commerce software, available first through XO for WooCommerce." path="/" />
    <Hero variant="trust" eyebrow="XO Digital Systems · Introducing XO Commerce" title="Commerce should adapt to the order." body="XO for WooCommerce gives every store a branded checkout—then helps each order follow the right path through delivery, quotation, payment or customer action." secondary={{ label: "Explore XO for WooCommerce", href: "/xo-wp" }}>
      <CheckoutMock tone="trust" />
    </Hero>

    <section className="mkt-fact-row" aria-label="Current product facts">
      <div><span>Current product</span><strong>XO for WooCommerce</strong></div><div><span>Checkout direction</span><strong>Seven design families</strong></div><div><span>Commerce paths</span><strong>Order, collection or quote</strong></div><div><span>Availability</span><strong>Controlled early access</strong></div>
    </section>

    <section className="mkt-section">
      <SectionIntro eyebrow="A better final step—and more" title="Checkout is where XO becomes visible. The engine behind it is where XO becomes valuable." body="Start with the problem every WooCommerce merchant can see: a generic checkout. Then let the customer journey respond when the order, delivery or relationship needs something more." />
      <MerchantJourneyCards />
    </section>

    <section className="mkt-section mkt-section--surface">
      <SectionIntro eyebrow="Adaptive commerce journeys" title="The same store. Different orders. The right next step." body="These fictional scenarios show the customer-facing outcomes XO can support without publishing a merchant’s private rules or connected systems." />
      <CommerceSimulator compact />
    </section>

    <section className="mkt-section">
      <SectionIntro eyebrow="Built around real ways of selling" title="Useful to ecommerce stores first. Ready when commerce becomes more demanding." />
      <UseCaseGrid linkLabel="Follow this journey" />
    </section>

    <section className="mkt-section mkt-section--dark">
      <div className="mkt-split">
        <div><p className="mkt-eyebrow">What exists now</p><h2>One current product. A much deeper product than a template pack.</h2></div>
        <div><p>XO for WooCommerce is in active development and already operating in a live business environment. WooCommerce remains the catalogue, inventory and core order foundation; XO improves the customer and merchant journeys around it.</p><div className="mkt-proof-panel"><div className="mkt-proof-panel__head"><small>Current public product</small><strong>XO for WooCommerce</strong></div><ul className="mkt-proof-panel__rows"><li><span>01</span><div><strong>Branded checkout</strong><small>Quick and guided customer experiences</small></div><strong>Current</strong></li><li><span>02</span><div><strong>Conditional commerce</strong><small>Delivery, collection, incentives and quote paths</small></div><strong>Current</strong></li><li><span>03</span><div><strong>Connected operations</strong><small>Quote, portal, payment and customer visibility</small></div><strong>Tiered</strong></li></ul></div></div>
      </div>
    </section>

    <section className="mkt-section mkt-section--surface">
      <SectionIntro eyebrow="Clear before clever" title="What merchants usually want to know first." />
      <div className="mkt-faq">{publicFaqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </section>
    <FinalCta title="Tell us how your store actually sells." body="We are opening access gradually to WooCommerce merchants who care about the buying experience and are willing to test XO across real ecommerce conditions." />
  </MarketingShell>
);

export default HomePage;
