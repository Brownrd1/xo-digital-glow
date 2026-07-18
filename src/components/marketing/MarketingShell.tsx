import { useEffect, useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logoMark from "@/assets/logo-mark.svg";
import { CTA_MODE, ctaCopy, productNavigation } from "@/content/site";
import "@/styles/marketing.css";

export const CtaLink = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  const cta = ctaCopy[CTA_MODE];
  return <a className={className} href={cta.href}>{children ?? cta.label}<ArrowRight aria-hidden="true" /></a>;
};

export const Seo = ({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "product";
}) => {
  const canonical = `https://xodigital.systems${path}`;
  const schema = type === "product"
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "XO for WooCommerce",
        alternateName: "XO-WP",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "WooCommerce checkout and connected commerce software",
        operatingSystem: "WordPress with WooCommerce",
        isAccessibleForFree: true,
        url: canonical,
        description,
        publisher: { "@type": "Organization", name: "XO Digital Systems", url: "https://xodigital.systems/" },
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        url: canonical,
        description,
        isPartOf: { "@type": "WebSite", name: "XO Digital Systems", url: "https://xodigital.systems/" },
      };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta property="og:type" content={type === "product" ? "product" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="mkt-header">
      <a className="mkt-skip" href="#main-content">Skip to main content</a>
      <a className="mkt-brand" href="/" aria-label="XO Digital Systems home">
        <img src={logoMark} alt="" width="38" height="38" />
        <span>XO DIGITAL <small>SYSTEMS</small></span>
      </a>

      <nav className="mkt-nav" aria-label="Primary navigation">
        <details className="mkt-products">
          <summary>Product <ChevronDown aria-hidden="true" /></summary>
          <div className="mkt-products__panel">
            <div className="mkt-products__intro">
              <small>Current product</small>
              <strong>XO for WooCommerce</strong>
              <p>Branded checkout with the commerce intelligence to choose what should happen next.</p>
            </div>
            <div className="mkt-products__links">
              {productNavigation.map((link) => (
                <a key={link.href} href={link.href} aria-current={location.pathname === link.href ? "page" : undefined}>
                  <span>{link.label}</span><small>{link.description}</small>
                </a>
              ))}
            </div>
          </div>
        </details>
        <a href="/use-cases" aria-current={location.pathname.startsWith("/use-cases") ? "page" : undefined}>Use cases</a>
        <a href="/pricing" aria-current={location.pathname === "/pricing" ? "page" : undefined}>Plans</a>
        <a href="/trust" aria-current={location.pathname === "/trust" ? "page" : undefined}>Trust</a>
      </nav>

      <CtaLink className="mkt-header__cta" />
      <button className="mkt-menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <nav id="mobile-nav" className="mkt-mobile-nav" aria-label="Mobile navigation">
          <p>XO for WooCommerce</p>
          {productNavigation.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="/use-cases">Use cases</a>
          <a href="/pricing">Plans</a>
          <a href="/trust">Trust & support</a>
          <CtaLink className="mkt-button mkt-button--power" />
        </nav>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="mkt-footer">
    <div className="mkt-footer__lead">
      <a className="mkt-brand mkt-brand--footer" href="/">
        <img src={logoMark} alt="" width="34" height="34" />
        <span>XO DIGITAL <small>SYSTEMS</small></span>
      </a>
      <p>Commerce software that adapts to the order.</p>
    </div>
    <div className="mkt-footer__links">
      <div><strong>Product</strong><a href="/xo-wp">Overview</a><a href="/xo-wp/checkout">Checkout</a><a href="/xo-wp/commerce-rules">Commerce rules</a><a href="/pricing">Plans</a></div>
      <div><strong>Explore</strong><a href="/use-cases">Use cases</a><a href="/xo-wp/quotes-and-portal">Quotes & portal</a><a href="/xo-wp/intelligence">Intelligence</a></div>
      <div><strong>Company</strong><a href="/early-access">Early access</a><a href="/trust">Trust & support</a><a href="/privacy">Privacy</a><a href="mailto:admin@xo.systems.com">Contact</a></div>
    </div>
    <div className="mkt-footer__base"><span>© {new Date().getFullYear()} XO Digital Systems</span><span>XO for WooCommerce is in controlled early access.</span></div>
  </footer>
);

export const MarketingShell = ({ children }: { children: ReactNode }) => (
  <div className="mkt-site">
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </div>
);
