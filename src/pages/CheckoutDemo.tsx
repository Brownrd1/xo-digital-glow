import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";
import "@/styles/xo-editorial.css";

const CheckoutDemo = () => (
  <div className="xo-e xo-demo-page">
    <Helmet>
      <title>XO Checkout Gallery | Real WooCommerce Design Directions</title>
      <meta name="description" content="Explore curated captures from the genuine XO for WooCommerce checkout design system using fictional sample branding." />
      <link rel="canonical" href="https://xodigital.systems/checkout-demo" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <a className="xo-e__skip" href="#checkout-studio">Skip to checkout studio</a>
    <header className="xo-e__header">
      <a className="xo-e__brand" href="/" aria-label="XO Digital Systems home">
        <img src={logoMark} alt="" width="36" height="36" />
        <span>XO DIGITAL <small>SYSTEMS</small></span>
      </a>
      <nav className="xo-e__nav" aria-label="Demo navigation">
        <a href="/xo-wp"><ArrowLeft aria-hidden="true" /> Product overview</a>
        <a className="xo-e__nav-cta" href="/#contact">Request early access</a>
      </nav>
    </header>

    <main id="checkout-studio" tabIndex={-1}>
      <section className="xo-demo-page__intro">
        <div>
          <p className="xo-e__kicker">XO product gallery</p>
          <h1>See what a branded checkout can become.</h1>
        </div>
        <div>
          <p>Explore selected checkout, delivery and payment moments created from the real XO design system. Every name, logo, product and customer detail shown here is fictional.</p>
          <p className="xo-demo-page__privacy"><Check aria-hidden="true" /> Curated product captures only. No store, customer account or payment system is connected.</p>
        </div>
      </section>

      <section className="xo-demo-page__gallery" aria-label="XO checkout design gallery">
        <figure>
          <img src="/images/checkout-proof/clean-corporate.webp" alt="Clean Corporate guided checkout with Your Company and Your Logo sample branding" width="1440" height="1000" />
          <figcaption><span>01</span><div><strong>Clean Corporate</strong><p>A structured guided checkout with clear hierarchy and a persistent order summary.</p></div></figcaption>
        </figure>
        <figure>
          <img src="/images/checkout-proof/meridian-delivery.webp" alt="Meridian delivery checkout with Your Company and Your Logo sample branding" loading="lazy" width="1440" height="1000" />
          <figcaption><span>02</span><div><strong>Meridian</strong><p>An editorial checkout direction showing collection and delivery choices in context.</p></div></figcaption>
        </figure>
        <figure>
          <img src="/images/checkout-proof/dark-luxury-payment.webp" alt="Dark Luxury payment view with Your Company sample branding" loading="lazy" width="1440" height="1000" />
          <figcaption><span>03</span><div><strong>Focused payment</strong><p>A restrained payment moment with order totals, payment paths and trust language kept visible.</p></div></figcaption>
        </figure>
      </section>

      <section className="xo-demo-page__next">
        <div><p className="xo-e__kicker">What you are seeing</p><h2>Real product direction. Carefully limited public proof.</h2></div>
        <div><p>XO currently has seven checkout design families. This gallery intentionally shows selected customer-facing outcomes rather than publishing the underlying renderer, configuration tools or connected application.</p><a className="xo-e__button xo-e__button--primary" href="/#contact">Discuss early access <ArrowRight aria-hidden="true" /></a></div>
      </section>
    </main>
  </div>
);

export default CheckoutDemo;
