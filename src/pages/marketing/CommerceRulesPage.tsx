import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { CommerceSimulator } from "@/components/marketing/CommerceSimulator";
import { CheckoutMock, FeatureList, FinalCta, Hero, SectionIntro } from "@/components/marketing/MarketingComponents";

const CommerceRulesPage = () => (
  <MarketingShell>
    <Seo title="Conditional WooCommerce Checkout and Shipping | XO" description="See how destination, postcode groups, cart value and product conditions can guide a WooCommerce customer toward delivery, collection, payment or quotation." path="/xo-wp/commerce-rules" type="product" />
    <Hero eyebrow="Conditional commerce" title="One cart. The right path." body="A checkout should not treat every destination, product and order value as if they create the same commercial decision. XO lets the customer journey respond without turning the storefront into a rule manual." secondary={{ label: "See the quote journey", href: "/xo-wp/quotes-and-portal" }}>
      <CheckoutMock step="Delivery" tone="paper" />
    </Hero>
    <section className="mkt-fact-row"><div><span>Destination</span><strong>Regions and postcode groups</strong></div><div><span>Cart conditions</span><strong>Value, weight and quantity</strong></div><div><span>Product context</span><strong>Shipping classes and mixed carts</strong></div><div><span>Safe outcomes</span><strong>Deliver, collect or quote</strong></div></section>

    <section className="mkt-section mkt-section--surface">
      <SectionIntro eyebrow="Curated product demonstration" title="Change the order. Watch the customer path change." body="Each preset is a fictional public example. It demonstrates what a shopper may experience without exposing actual merchant settings, thresholds or evaluation logic." />
      <CommerceSimulator />
    </section>

    <section className="mkt-section">
      <SectionIntro eyebrow="What the journey can respond to" title="Several commercial signals. One coherent customer experience." />
      <div className="mkt-card-grid mkt-card-grid--illustrated">
        <article className="mkt-card"><span>01</span><div className="mkt-mini-scene is-soft" aria-hidden="true"><small>DELIVERY CHECK</small><strong>Cape Town · 7***</strong><div className="mkt-mini-row"><span>Destination</span><b>Known</b></div><div className="mkt-mini-row"><span>Available path</span><b>Direct delivery</b></div></div><h3>Where the order is going</h3><p>Use destination areas and postcode groups to determine which fulfilment paths make sense for the customer.</p><small>Business value: offer only the fulfilment paths the operation can support.</small></article>
        <article className="mkt-card"><span>02</span><div className="mkt-mini-scene is-soft" aria-hidden="true"><small>CART CONTEXT</small><strong>Mixed product cart</strong><div className="mkt-mini-tags"><span>14.8 kg</span><span>2 classes</span><span>R7,980</span></div><div className="mkt-mini-row"><span>Freight confidence</span><b>Review needed</b></div></div><h3>What is in the cart</h3><p>Let product classes, mixed carts, weight, quantity and cart value influence the safe commercial route.</p><small>Business value: protect margin and fulfilment before accepting payment.</small></article>
        <article className="mkt-card"><span>03</span><div className="mkt-mini-scene is-soft" aria-hidden="true"><small>NEXT ACTION</small><strong>Choose a safe path</strong><div className="mkt-mini-paths"><span>Deliver</span><span>Collect</span><span className="is-active">Quote</span></div><div className="mkt-mini-row"><span>Customer sees</span><b>A clear next step</b></div></div><h3>What should happen next</h3><p>Keep direct orders direct, surface an eligible incentive, offer collection or preserve the sale as a quotation.</p><small>Business value: keep the opportunity without forcing the wrong order.</small></article>
      </div>
    </section>

    <section className="mkt-section mkt-section--dark">
      <div className="mkt-split"><div><p className="mkt-eyebrow">Protect the order</p><h2>Do not turn uncertain freight into a confidently wrong total.</h2></div><div><p>When delivery cannot be confirmed safely, the customer can continue through a formal quotation path. The merchant keeps the opportunity without accepting a payable order built on false certainty.</p><FeatureList items={["Known delivery stays a direct order", "Collection remains a visible alternative", "Uncertain freight can move to review", "The customer receives a clear next action"]} /></div></div>
    </section>
    <FinalCta title="Bring us the cart your shipping plugin cannot explain." body="We are looking for real ecommerce conditions—mixed products, variable destinations and fulfilment decisions that deserve a better customer path." />
  </MarketingShell>
);

export default CommerceRulesPage;
