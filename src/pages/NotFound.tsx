import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";

const NotFound = () => (
  <MarketingShell>
    <Seo title="Page Not Found | XO Digital Systems" description="The requested XO Digital Systems page could not be found." path="/404" />
    <section className="mkt-section"><p className="mkt-eyebrow">404 · Page not found</p><div className="mkt-section-intro"><h2>This path does not lead to a current XO page.</h2><p>Return to the platform story or explore the current XO for WooCommerce product.</p></div><div className="mkt-actions"><a className="mkt-button mkt-button--dark" href="/">Return home</a><a className="mkt-text-link" href="/xo-wp">Explore XO for WooCommerce</a></div></section>
  </MarketingShell>
);

export default NotFound;
