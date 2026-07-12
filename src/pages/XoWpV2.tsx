import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";
import "@/styles/xo-editorial.css";

const journey = [
  ["01", "Checkout", "A branded quick or guided buying experience inside the existing WooCommerce store."],
  ["02", "Commercial path", "The transaction follows a native order or quotation path based on the merchant workflow."],
  ["03", "Delivery decision", "Known delivery can proceed. Uncertain freight can remain a quotation until it is confirmed."],
  ["04", "Customer action", "The buyer reviews documents, accepts the commercial offer and progresses to payment."],
  ["05", "Merchant visibility", "The team sees the activity, status and next action in one connected journey."],
] as const;

const tiers = [
  {
    name: "Free",
    label: "Working foundation",
    summary: "A useful WooCommerce-native checkout and quotation system—not a time-limited demonstration.",
    features: [
      "Selected branded checkout designs",
      "Quick and guided checkout modes",
      "WooCommerce-native orders",
      "Customer quotation requests",
      "Basic shipping and documents",
      "Consent capture and test payments",
    ],
  },
  {
    name: "Pro",
    label: "Managed B2B operations",
    summary: "For businesses ready to manage the complete quotation, approval, payment and customer journey.",
    features: [
      "All seven checkout design families",
      "Quote and invoice management",
      "Customer self-service portal",
      "Live payments",
      "Advanced shipping and routing",
      "Pipeline analytics and operational controls",
    ],
  },
  {
    name: "Enterprise",
    label: "Recovery and intelligence",
    summary: "For teams using connected activity to recover opportunities and understand customer relationships.",
    features: [
      "Dropped-checkout recovery",
      "Quote follow-up automation",
      "Customer opportunity signals",
      "Expanded marketing intelligence",
      "Web traffic and SEO insight",
      "Client 360 workspace",
    ],
  },
] as const;

const questions = [
  ["Does XO replace WooCommerce?", "No. WooCommerce remains the catalogue, inventory and core order foundation. XO improves the buyer and merchant workflows around complex checkout and B2B transactions."],
  ["What can I use today?", "XO for WooCommerce is the first and only current XO Commerce product. It is in active development, already operating in a live business environment and being opened gradually for structured testing."],
  ["Is Free only a product demo?", "No. Free is intended to be a credible working checkout and quotation foundation. Paid plans add operational depth rather than making Free legitimate retroactively."],
  ["Who is the product designed for?", "Manufacturers, wholesalers, distributors, contractors and mixed-commerce businesses managing formal quotations, variable delivery, repeat accounts or multi-stage order decisions."],
] as const;

const XoWpV2 = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://xodigital.systems/xo-wp#software",
    name: "XO for WooCommerce",
    alternateName: "XO-WP",
    url: "https://xodigital.systems/xo-wp",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "WooCommerce checkout and B2B commerce software",
    operatingSystem: "WordPress with WooCommerce",
    isAccessibleForFree: true,
    description: "A WooCommerce checkout and B2B commerce product connecting quotation requests, managed workflows on paid plans, shipping decisions, customer self-service, payments and commercial visibility.",
    publisher: {
      "@type": "Organization",
      "@id": "https://xodigital.systems/#organization",
      name: "XO Digital Systems",
      url: "https://xodigital.systems/",
    },
  };

  return (
    <div className="xo-e">
      <Helmet>
        <title>XO for WooCommerce | Connected B2B Commerce</title>
        <meta name="description" content="A modern WooCommerce checkout that grows into a connected B2B quotation, delivery, customer action and payment workflow." />
        <link rel="canonical" href="https://xodigital.systems/xo-wp" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <a className="xo-e__skip" href="#main-content">Skip to main content</a>

      <header className="xo-e__header">
        <a className="xo-e__brand" href="/" aria-label="XO Digital Systems home">
          <img src={logoMark} alt="" width="36" height="36" />
          <span>XO DIGITAL <small>SYSTEMS</small></span>
        </a>
        <nav className="xo-e__nav" aria-label="Product navigation">
          <a href="#workflow">Workflow</a>
          <a href="#plans">Plans</a>
          <a href="/trust">Trust</a>
          <a className="xo-e__nav-cta" href="/#contact">Request early access</a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="xo-e__hero">
          <div className="xo-e__hero-copy">
            <p className="xo-e__kicker">XO for WooCommerce · Controlled early access</p>
            <h1>Complex WooCommerce sales, handled as one connected journey.</h1>
            <p className="xo-e__lede">A modern checkout that grows into structured quotation, delivery, customer action and payment workflows—without replacing the WooCommerce foundation your store already uses.</p>
            <div className="xo-e__actions">
              <a className="xo-e__button xo-e__button--primary" href="/#contact">Request early access <ArrowRight aria-hidden="true" /></a>
              <a className="xo-e__button xo-e__button--secondary" href="#workflow">See the workflow</a>
            </div>
          </div>

          <div className="xo-e__system-map" aria-label="Connected commerce journey overview">
            <div className="xo-e__system-head">
              <span>Current product</span>
              <strong>XO for WooCommerce</strong>
            </div>
            <ol>
              <li><span>01</span><div><strong>Buyer experience</strong><small>Checkout and quotation request</small></div></li>
              <li><span>02</span><div><strong>Commercial decision</strong><small>Order, quote and delivery path</small></div></li>
              <li><span>03</span><div><strong>Customer action</strong><small>Review, acceptance and payment</small></div></li>
            </ol>
            <p>WooCommerce remains the catalogue, inventory and core order foundation.</p>
          </div>
        </section>

        <section className="xo-e__facts" aria-label="Current product facts">
          <div><span>Status</span><strong>Active development</strong></div>
          <div><span>Evidence</span><strong>Running in a live business</strong></div>
          <div><span>Checkout designs</span><strong>Seven current families</strong></div>
          <div><span>Foundation</span><strong>WordPress + WooCommerce</strong></div>
        </section>

        <section className="xo-e__problem">
          <div className="xo-e__section-label">The operating problem</div>
          <div>
            <h2>A checkout plugin cannot solve a fragmented B2B sale.</h2>
            <p>Complex WooCommerce businesses often move from checkout to email, spreadsheets, manually calculated freight, disconnected documents and repeated customer follow-up. XO treats those moments as one commercial workflow.</p>
          </div>
        </section>

        <section id="workflow" className="xo-e__workflow">
          <div className="xo-e__section-intro">
            <p className="xo-e__kicker">Connected workflow</p>
            <h2>From the first buyer decision to the final customer action.</h2>
            <p>The sequence is designed around how complex B2B transactions actually progress—not around a generic retail checkout.</p>
          </div>
          <ol className="xo-e__journey">
            {journey.map(([number, title, body]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <ChevronRight aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="xo-e__proof">
          <div className="xo-e__proof-copy">
            <p className="xo-e__kicker">Product evidence</p>
            <h2>The interface should do the proving.</h2>
            <p>Real application captures are being prepared during the current product-polish pass. These positions are reserved for verified checkout, merchant and customer interfaces—not generated concept artwork.</p>
            <a href="/#contact">Ask to see the current product <ExternalLink aria-hidden="true" /></a>
          </div>
          <div className="xo-e__proof-grid" aria-label="Product interface evidence being prepared">
            <div><span>Buyer</span><strong>Checkout experience</strong><small>Desktop + mobile capture</small></div>
            <div><span>Merchant</span><strong>Quote operations</strong><small>Dashboard + editor capture</small></div>
            <div><span>Customer</span><strong>Portal and documents</strong><small>Acceptance + payment capture</small></div>
          </div>
        </section>

        <section className="xo-e__protection">
          <div className="xo-e__section-label">Margin protection</div>
          <div>
            <h2>Do not turn uncertain freight into a confidently wrong total.</h2>
            <p>When delivery cannot be confirmed safely, the commercial path can remain a quotation until the merchant resolves it. The buyer can continue without forcing the store to accept an incorrect payable order.</p>
            <ul>
              <li><Check aria-hidden="true" /> Work with destination, product and shipping-class conditions</li>
              <li><Check aria-hidden="true" /> Support collection, known delivery and manually confirmed freight</li>
              <li><Check aria-hidden="true" /> Preserve a clear customer path when delivery needs review</li>
            </ul>
          </div>
        </section>

        <section id="plans" className="xo-e__plans">
          <div className="xo-e__section-intro">
            <p className="xo-e__kicker">Plans with distinct jobs</p>
            <h2>Start with a working foundation. Add operational depth when the business needs it.</h2>
          </div>
          <div className="xo-e__tier-grid">
            {tiers.map((tier) => (
              <article key={tier.name} className={tier.name === "Pro" ? "xo-e__tier xo-e__tier--featured" : "xo-e__tier"}>
                <p>{tier.label}</p>
                <h3>{tier.name}</h3>
                <div className="xo-e__tier-rule" />
                <p>{tier.summary}</p>
                <ul>
                  {tier.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="xo-e__fit">
          <div>
            <p className="xo-e__kicker">Designed for operational complexity</p>
            <h2>Built for businesses where a sale involves more than adding an item to a basket.</h2>
          </div>
          <ul>
            <li>Manufacturers</li>
            <li>Wholesalers and distributors</li>
            <li>Contractors and building suppliers</li>
            <li>Industrial and technical suppliers</li>
            <li>Mixed retail and B2B stores</li>
            <li>Businesses with variable delivery</li>
          </ul>
        </section>

        <section className="xo-e__faq">
          <div className="xo-e__section-intro">
            <p className="xo-e__kicker">Before you evaluate XO</p>
            <h2>Clear answers, without pretending the product is broadly released.</h2>
          </div>
          <div className="xo-e__questions">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="xo-e__cta">
          <div>
            <p className="xo-e__kicker">Controlled early access</p>
            <h2>Tell us where your WooCommerce process becomes difficult.</h2>
          </div>
          <div>
            <p>We are prioritising businesses with formal quotations, variable delivery, repeat accounts, customer approvals or multi-stage order decisions.</p>
            <a className="xo-e__button xo-e__button--light" href="/#contact">Start the conversation <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer className="xo-e__footer">
        <a className="xo-e__brand" href="/" aria-label="XO Digital Systems home">
          <img src={logoMark} alt="" width="32" height="32" />
          <span>XO DIGITAL <small>SYSTEMS</small></span>
        </a>
        <p>Connected commerce software for complex buying journeys.</p>
        <nav aria-label="Legal and support">
          <a href="/trust">Trust & Support</a>
          <a href="/privacy">Website Privacy</a>
          <a href="mailto:admin@xo.systems.com">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default XoWpV2;
