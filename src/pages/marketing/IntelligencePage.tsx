import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { FinalCta, Hero, JourneyStrip, SectionIntro } from "@/components/marketing/MarketingComponents";

const IntelligenceVisual = () => <div className="mkt-proof-panel"><div className="mkt-proof-panel__head"><small>Your Company · opportunity view</small><strong>Enterprise</strong></div><ul className="mkt-proof-panel__rows"><li><span>01</span><div><strong>Quote awaiting action</strong><small>Customer activity indicates renewed interest</small></div><strong>Review</strong></li><li><span>02</span><div><strong>Dropped checkout</strong><small>High-value cart did not complete</small></div><strong>Recover</strong></li><li><span>03</span><div><strong>Repeat customer</strong><small>Recent commercial activity is connected</small></div><strong>Context</strong></li></ul></div>;

const IntelligencePage = () => (
  <MarketingShell>
    <Seo title="WooCommerce Revenue and Customer Intelligence | XO" description="See how XO Enterprise connects checkout, quote, recovery, traffic and customer activity into clearer commercial action." path="/xo-wp/intelligence" type="product" />
    <Hero eyebrow="Recovery and intelligence · Enterprise" title="See the opportunity before it becomes forgotten activity." body="Bring connected checkout, quotation and customer activity into a clearer view of what is moving, what is stalled and where the next commercial action may matter." secondary={{ label: "Compare plans", href: "/pricing" }}><IntelligenceVisual /></Hero>
    <section className="mkt-fact-row"><div><span>Pipeline</span><strong>Movement and conversion</strong></div><div><span>Recovery</span><strong>Dropped checkout and quotes</strong></div><div><span>Customer context</span><strong>Opportunity signals</strong></div><div><span>Visibility</span><strong>Traffic, SEO and Client 360</strong></div></section>

    <section className="mkt-section">
      <SectionIntro eyebrow="From activity to attention" title="Not more dashboards. A clearer reason to act." />
      <div className="mkt-card-grid mkt-card-grid--illustrated"><article className="mkt-card"><span>01</span><div className="mkt-mini-scene is-trust" aria-hidden="true"><small>PIPELINE VIEW</small><strong>R68,400 in active quotes</strong><div className="mkt-mini-bars"><i style={{ width: "82%" }} /><i style={{ width: "58%" }} /><i style={{ width: "34%" }} /></div><div className="mkt-mini-row"><span>Needs attention</span><b>3 opportunities</b></div></div><h3>Know what is moving</h3><p>Understand quote movement, conversion, value and the time opportunities spend between commercial stages.</p><small>Pipeline analytics begin with Pro.</small></article><article className="mkt-card"><span>02</span><div className="mkt-mini-scene is-trust" aria-hidden="true"><small>RECOVERY SIGNAL</small><strong>Dropped checkout</strong><div className="mkt-mini-row"><span>Cart value</span><b>R4,620</b></div><div className="mkt-mini-row"><span>Suggested action</span><b>Review follow-up</b></div></div><h3>Recover what is stalling</h3><p>Identify dropped checkouts and quotation activity that may need a timely follow-up rather than another forgotten reminder.</p><small>Recovery and automation are Enterprise capabilities.</small></article><article className="mkt-card"><span>03</span><div className="mkt-mini-scene is-trust" aria-hidden="true"><small>CLIENT 360</small><strong>Your Company customer</strong><div className="mkt-mini-tags"><span>2 orders</span><span>1 quote</span><span>Returning</span></div><div className="mkt-mini-row"><span>Connected context</span><b>Visible</b></div></div><h3>See the relationship</h3><p>Bring connected customer activity into a broader view so the team can respond with context instead of isolated records.</p><small>Customer intelligence and Client 360 are Enterprise capabilities.</small></article></div>
    </section>

    <section className="mkt-section mkt-section--steel">
      <SectionIntro eyebrow="A connected signal path" title="The value comes from activity already moving through XO." body="The objective is not to predict everything. It is to make existing commercial signals harder to miss." inverse />
      <JourneyStrip steps={["Customer intent", "Checkout or quote activity", "Commercial signal", "Team attention", "Customer next action"]} />
    </section>
    <section className="mkt-section mkt-section--surface"><div className="mkt-split"><div><p className="mkt-eyebrow">Accurate tiering</p><h2>Enterprise is depth—not a promise that every merchant needs enterprise software.</h2></div><div><p>A brand-led ecommerce store can receive substantial value from Free or Pro. Enterprise is for teams with enough connected activity, quotation volume and customer relationships to justify recovery, automation and deeper visibility.</p></div></div></section>
    <FinalCta title="Make existing commercial activity easier to act on." body="If the team already handles meaningful quote volume, repeat customers or dropped opportunities, tell us where visibility currently breaks down." />
  </MarketingShell>
);

export default IntelligencePage;
