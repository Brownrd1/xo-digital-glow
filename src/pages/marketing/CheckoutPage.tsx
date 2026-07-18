import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { FeatureList, FinalCta, Hero, SectionIntro } from "@/components/marketing/MarketingComponents";
import { CheckoutDirectionBoard, CheckoutGallery } from "@/components/marketing/CheckoutGallery";

const CheckoutPage = () => (
  <MarketingShell>
    <Seo title="WooCommerce Checkout Designs | XO for WooCommerce" description="Explore seven branded, responsive WooCommerce checkout families with quick and guided customer journeys." path="/xo-wp/checkout" type="product" />
    <Hero eyebrow="XO checkout" title="The final step should still feel like your store." body="Choose a checkout direction with real character, apply the store’s identity, and give customers a clearer quick or guided buying experience across desktop and mobile." secondary={{ label: "See how customer paths change", href: "/xo-wp/commerce-rules" }}>
      <CheckoutDirectionBoard />
    </Hero>
    <section className="mkt-fact-row"><div><span>Current range</span><strong>Seven distinct families</strong></div><div><span>Flow choice</span><strong>Quick or guided</strong></div><div><span>Responsive</span><strong>Designed for mobile</strong></div><div><span>Brand application</span><strong>Logo, colour and content</strong></div></section>

    <section id="gallery" className="mkt-section">
      <SectionIntro eyebrow="Seven genuine product directions" title="A design system for different stores—not seven recoloured copies." body="Explore the thinking behind each family: what it represents, which brands it suits and what makes its visual character distinct. The checkout screens themselves remain private." />
      <CheckoutGallery />
    </section>

    <section className="mkt-section mkt-section--dark">
      <div className="mkt-split"><div><p className="mkt-eyebrow">Quick or guided</p><h2>The flow can match the purchase—not only the brand.</h2></div><div><div className="mkt-mode-visual" aria-hidden="true"><div className="is-quick"><small>QUICK</small><strong>Buy in one clear flow</strong><span>Details · delivery · payment</span></div><div className="is-guided"><small>GUIDED</small><strong>One decision at a time</strong><span>Details → delivery → review</span></div></div><p>A familiar cart can move through a compact experience. A purchase requiring delivery choices, formal customer details or a quotation can receive more guidance without making every buyer endure enterprise complexity.</p><FeatureList items={["Quick checkout for direct buying", "Guided steps for considered orders", "Visible order context through the journey", "Clear delivery, review and payment moments"]} /></div></div>
    </section>

    <section className="mkt-section mkt-section--surface">
      <div className="mkt-split"><div><p className="mkt-eyebrow">More than presentation</p><h2>The design stays connected to real commerce states.</h2><p>Delivery, collection, quote selection, consent, documents and payment are not decorative screenshots. They are moments the product is built to handle.</p></div><div className="mkt-proof-panel"><div className="mkt-proof-panel__head"><small>Customer journey</small><strong>Your Company checkout</strong></div><ul className="mkt-proof-panel__rows"><li><span>01</span><div><strong>Details</strong><small>Customer and business information</small></div><strong>Clear</strong></li><li><span>02</span><div><strong>Delivery</strong><small>Calculated, collection or review path</small></div><strong>Adaptive</strong></li><li><span>03</span><div><strong>Review and action</strong><small>Order, quote or payment outcome</small></div><strong>Connected</strong></li></ul></div></div>
    </section>
    <FinalCta title="Give checkout back to the brand." body="Show us the store, the products and the buying experience you want customers to remember." />
  </MarketingShell>
);

export default CheckoutPage;
