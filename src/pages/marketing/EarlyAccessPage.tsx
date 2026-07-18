import { MarketingShell, Seo } from "@/components/marketing/MarketingShell";
import { EarlyAccessForm } from "@/components/marketing/EarlyAccessForm";

const EarlyAccessPage = () => (
  <MarketingShell>
    <Seo title="Request XO for WooCommerce Early Access" description="Tell XO Digital Systems about your WooCommerce store, buying journey and current checkout or commercial workflow." path="/early-access" />
    <section className="mkt-section">
      <div className="mkt-form-layout">
        <div className="mkt-form-copy"><p className="mkt-eyebrow">Controlled early access</p><h1>Tell us how your store actually sells.</h1><p>We are working with a limited number of WooCommerce merchants while XO moves through structured real-world testing.</p><ul className="mkt-feature-list"><li>A strong brand that deserves a better checkout</li><li>Products with delivery or collection complexity</li><li>Customers who sometimes need quotations or approval</li><li>A willingness to test real purchasing conditions carefully</li></ul></div>
        <div className="mkt-form-card"><EarlyAccessForm /></div>
      </div>
    </section>
  </MarketingShell>
);

export default EarlyAccessPage;
