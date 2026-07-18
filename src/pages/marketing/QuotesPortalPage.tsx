import { useState } from "react";
import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { FinalCta, Hero, JourneyStrip, SectionIntro } from "@/components/marketing/MarketingComponents";

const views = [
  { id: "merchant", label: "Merchant workspace", note: "Review and manage", title: "The commercial work remains visible.", rows: [["Q-1042", "Your Company", "Awaiting review"], ["Q-1038", "Northline Studio", "Customer action"], ["Q-1034", "Field & Form", "Accepted"]] },
  { id: "customer", label: "Customer portal", note: "Review and respond", title: "The customer always knows the next action.", rows: [["Quotation Q-1042", "Review document", "Available"], ["Delivery", "Merchant confirmed", "Updated"], ["Next step", "Accept and continue", "Ready"]] },
] as const;

const QuoteSwitcher = () => {
  const [activeId, setActiveId] = useState<(typeof views)[number]["id"]>("merchant");
  const active = views.find((view) => view.id === activeId) ?? views[0];
  return <div className="mkt-quote-switcher"><div className="mkt-quote-switcher__nav" role="tablist">{views.map((view) => <button id={`quote-${view.id}`} aria-controls="quote-panel" aria-selected={active.id === view.id} role="tab" key={view.id} type="button" onClick={() => setActiveId(view.id)}><strong>{view.label}</strong><small>{view.note}</small></button>)}</div><div id="quote-panel" className="mkt-quote-switcher__panel" role="tabpanel" aria-labelledby={`quote-${active.id}`} aria-live="polite"><small>Fictional Your Company product view</small><h3>{active.title}</h3><div className="mkt-quote-table"><div><span>Item</span><span>Action</span><span>Status</span></div>{active.rows.map((row) => <div key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><em>{row[2]}</em></div>)}</div></div></div>;
};

const QuotesPortalPage = () => (
  <MarketingShell>
    <Seo title="WooCommerce Quotes and Customer Portal | XO" description="Connect WooCommerce quotation requests, merchant review, customer acceptance, payment and self-service in one clear commercial journey." path="/xo-wp/quotes-and-portal" type="product" />
    <Hero eyebrow="Quotes and customer self-service · Pro" title="A quotation should not disappear into an inbox." body="Keep the sale moving from customer request to merchant review, formal document, acceptance and payment—with a clear place for both sides to act." secondary={{ label: "See plans", href: "/pricing" }}>
      <QuoteSwitcher />
    </Hero>
    <section className="mkt-fact-row"><div><span>Free begins with</span><strong>Customer quote requests</strong></div><div><span>Pro adds</span><strong>Managed quote operations</strong></div><div><span>Customer action</span><strong>Review, accept and pay</strong></div><div><span>Shared context</span><strong>Documents and activity</strong></div></section>

    <section className="mkt-section mkt-section--dark">
      <SectionIntro eyebrow="The quote-to-payment journey" title="Every stage has an owner and a next action." body="The normal ecommerce order remains available. This deeper workflow appears when the sale genuinely needs formal review and customer approval." inverse />
      <JourneyStrip steps={["Customer request", "Merchant review", "Formal quotation", "Customer acceptance", "Payment and fulfilment"]} />
    </section>

    <section className="mkt-section">
      <SectionIntro eyebrow="Two sides of one commercial record" title="Merchant control without customer confusion." />
      <QuoteSwitcher />
    </section>

    <section className="mkt-section mkt-section--surface">
      <div className="mkt-split"><div><p className="mkt-eyebrow">A useful distinction</p><h2>Free can receive the request. Pro manages what happens after it.</h2></div><div><p>The Free plan gives a customer a credible quotation path and keeps basic order handling WooCommerce-native. Pro adds the XO dashboard, quote and invoice operations, customer portal, live payments and the visibility needed to manage the full journey.</p></div></div>
    </section>
    <FinalCta title="Turn formal enquiries into visible opportunities." body="Tell us how quotations are created, approved and paid in your business today—and where the process becomes difficult to follow." />
  </MarketingShell>
);

export default QuotesPortalPage;

