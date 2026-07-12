import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";
import "@/styles/xo-editorial.css";

const journey = [
  ["01", "Make it yours", "Choose a checkout design, apply the store brand and select a quick or guided buyer journey."],
  ["02", "Keep buying simple", "Customers complete a clear, responsive checkout that remains connected to WooCommerce."],
  ["03", "Choose the right path", "Use standard orders for ordinary sales and quotation workflows where the business requires them."],
  ["04", "Handle delivery", "Apply straightforward shipping or expand into more advanced delivery and routing decisions."],
  ["05", "Grow the operation", "Add customer self-service, analytics, recovery and intelligence as the store becomes more demanding."],
] as const;

const tiers = [
  {
    name: "Free",
    label: "Branded ecommerce foundation",
    summary: "A useful WooCommerce-native checkout and quotation foundation—not a time-limited demonstration.",
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
    label: "Expanded commerce operations",
    summary: "For stores ready to add the complete quotation, approval, payment and customer journey.",
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
    label: "Growth and intelligence",
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
  ["Who is the product designed for?", "Any WooCommerce store that wants a better branded checkout can start with XO. Its deeper quotation, delivery, portal and intelligence capabilities are especially valuable to growing, mixed-commerce and B2B businesses."],
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
    applicationSubCategory: "WooCommerce checkout and connected commerce software",
    operatingSystem: "WordPress with WooCommerce",
    isAccessibleForFree: true,
    description: "A branded WooCommerce checkout product that expands into quotation, delivery, customer self-service, payment, analytics, recovery and commercial visibility.",
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
        <title>XO for WooCommerce | Branded Checkout and Connected Commerce</title>
        <meta name="description" content="Replace the basic WooCommerce checkout with a branded buying experience, then add quotation, delivery, customer and growth tools when your store needs more." />
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
            <h1>A WooCommerce checkout that finally looks like your store.</h1>
            <p className="xo-e__lede">Replace the basic WooCommerce checkout with a branded quick or guided buying experience. Start there, then add quotation, delivery, customer and growth tools as your store needs more.</p>
            <div className="xo-e__actions">
              <a className="xo-e__button xo-e__button--primary" href="/#contact">Request early access <ArrowRight aria-hidden="true" /></a>
              <a className="xo-e__button xo-e__button--secondary" href="#workflow">See the workflow</a>
            </div>
          </div>

          <div className="xo-e__system-map" aria-label="XO for WooCommerce product progression">
            <div className="xo-e__system-head">
              <span>Current product</span>
              <strong>XO for WooCommerce</strong>
            </div>
            <ol>
              <li><span>01</span><div><strong>Branded checkout</strong><small>Seven design families</small></div></li>
              <li><span>02</span><div><strong>Flexible buying</strong><small>Quick, guided, order and quote paths</small></div></li>
              <li><span>03</span><div><strong>Connected growth</strong><small>Portal, analytics, recovery and intelligence</small></div></li>
            </ol>
            <p>WooCommerce remains the catalogue, inventory and core order foundation.</p>
          </div>
        </section>

        <section className="xo-e__facts" aria-label="Current product facts">
          <div><span>Checkout designs</span><strong>Seven current families</strong></div>
          <div><span>Buyer journeys</span><strong>Quick + guided modes</strong></div>
          <div><span>Order foundation</span><strong>WooCommerce-native</strong></div>
          <div><span>Starting point</span><strong>A useful Free plan</strong></div>
        </section>

        <section className="xo-e__problem">
          <div className="xo-e__section-label">The operating problem</div>
          <div>
            <h2>Your checkout should look like your business—not every other WooCommerce store.</h2>
            <p>The default checkout gets the transaction done, but it rarely carries the quality, clarity or character of the store around it. XO starts by giving ecommerce businesses a better branded buying experience. The connected operational tools are there when checkout is no longer the only problem to solve.</p>
          </div>
        </section>

        <section id="workflow" className="xo-e__workflow">
          <div className="xo-e__section-intro">
            <p className="xo-e__kicker">Start simple. Expand deliberately.</p>
            <h2>Begin with checkout. Grow into a connected commerce system.</h2>
            <p>A straightforward ecommerce store should not be forced into enterprise complexity. XO adds depth progressively as the merchant, buyer journey and operation demand it.</p>
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
            <h2>Seven checkout directions. One store identity.</h2>
            <p>Real desktop and mobile captures are being prepared during the current product-polish pass. These positions are reserved for verified checkout designs and application interfaces—not generated concept artwork.</p>
            <a href="/#contact">Ask to see the current product <ExternalLink aria-hidden="true" /></a>
          </div>
          <div className="xo-e__proof-grid" aria-label="Product interface evidence being prepared">
            <div><span>Checkout</span><strong>Seven design families</strong><small>Desktop + mobile gallery</small></div>
            <div><span>Journey</span><strong>Quick and guided modes</strong><small>Responsive buyer flow</small></div>
            <div><span>Operations</span><strong>Merchant and customer tools</strong><small>Paid-plan interface evidence</small></div>
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
            <h2>Improve checkout first. Add operational depth when the business needs it.</h2>
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
            <p className="xo-e__kicker">One product, several stages of commerce</p>
            <h2>Useful to ecommerce stores now. Ready for more demanding operations later.</h2>
          </div>
          <ul>
            <li>Growing ecommerce stores</li>
            <li>Brand-led product businesses</li>
            <li>Mixed retail and B2B stores</li>
            <li>Wholesalers and distributors</li>
            <li>Manufacturers and suppliers</li>
            <li>Businesses with complex delivery</li>
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
            <h2>Show customers a checkout that belongs to your store.</h2>
          </div>
          <div>
            <p>We are opening access gradually to WooCommerce stores that care about the buying experience and are willing to help test XO across real ecommerce conditions.</p>
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
