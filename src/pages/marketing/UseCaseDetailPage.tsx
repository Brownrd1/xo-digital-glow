import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { FinalCta, Hero, JourneyStrip, SectionIntro } from "@/components/marketing/MarketingComponents";
import { useCases } from "@/content/site";

const UseCaseDetailPage = () => {
  const { slug } = useParams();
  const useCase = useCases.find((item) => item.slug === slug);
  if (!useCase) return <MarketingShell><Seo title="Use Case Not Found | XO Digital Systems" description="The requested XO use case could not be found." path={`/use-cases/${slug ?? "not-found"}`} /><section className="mkt-section"><SectionIntro eyebrow="Not found" title="That use case does not exist." body="Return to the use-case library to explore the current XO for WooCommerce journeys." /><a className="mkt-button mkt-button--dark" href="/use-cases">View use cases</a></section></MarketingShell>;

  return (
    <MarketingShell>
      <Seo title={`${useCase.eyebrow} | XO for WooCommerce Use Case`} description={useCase.summary} path={`/use-cases/${useCase.slug}`} type="product" />
      <Hero compact eyebrow={useCase.eyebrow} title={useCase.title} body={useCase.summary} secondary={{ label: "See relevant plans", href: "/pricing" }} />
      <section className="mkt-section mkt-section--surface"><div className="mkt-split"><div><p className="mkt-eyebrow">The current problem</p><h2>Where the ordinary WooCommerce journey starts to strain.</h2></div><div><p>{useCase.problem}</p></div></div></section>
      <section className="mkt-section"><SectionIntro eyebrow="What can shape the path" title="The customer experience responds to commercial context." /><div className="mkt-card-grid">{useCase.detects.map((item, index) => <article className="mkt-card" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>XO can use this type of context to present a safer, clearer next step to the customer.</p></article>)}</div></section>
      <section className="mkt-section mkt-section--dark"><SectionIntro eyebrow="The customer journey" title="A short story with a visible next action." inverse /><JourneyStrip steps={useCase.journey} /></section>
      <section className="mkt-section mkt-section--surface"><div className="mkt-outcome-story"><div><p className="mkt-eyebrow">Merchant outcome</p><h2>{useCase.outcome}</h2><div className="mkt-outcome-story__flow" aria-hidden="true"><span>Customer context</span><ArrowRight /><strong>Controlled business outcome</strong></div></div><aside><small>RELEVANT PLAN</small><strong>{useCase.tier}</strong><p>This public use case describes customer-facing outcomes without publishing private thresholds, routing precedence or connected store data.</p></aside></div></section>
      <FinalCta title="Does this look like your store?" body="Bring us the real workflow. We will assess whether the current XO product and early-access programme are a sensible fit." />
    </MarketingShell>
  );
};

export default UseCaseDetailPage;
