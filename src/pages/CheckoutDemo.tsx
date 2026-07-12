import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";
import "@/styles/xo-editorial.css";

const CheckoutDemo = () => (
  <div className="xo-e xo-demo-page">
    <Helmet>
      <title>XO Checkout Studio | Try Your Brand</title>
      <meta name="description" content="Preview your business name, logo and colours across the real XO for WooCommerce checkout designs." />
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
          <p className="xo-e__kicker">Interactive XO product preview</p>
          <h1>See your store inside the checkout.</h1>
        </div>
        <div>
          <p>Add your business name, logo and colours. Then compare the seven real design families across guided checkout, quick checkout and payment views.</p>
          <p className="xo-demo-page__privacy"><LockKeyhole aria-hidden="true" /> Your logo is read locally for this preview. It is not uploaded or saved by XO.</p>
        </div>
      </section>

      <div className="xo-demo-page__frame-shell">
        <iframe
          className="xo-demo-page__frame"
          src="/xo-template-demo/template-demo.html"
          title="XO checkout studio"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      <section className="xo-demo-page__next">
        <div><p className="xo-e__kicker">What you are seeing</p><h2>Real checkout renderers. Safe sample commerce data.</h2></div>
        <div><p>The studio is an isolated product preview—not a connected WooCommerce checkout. It demonstrates the design system and buyer states without accessing a store, account, payment provider or customer record.</p><a className="xo-e__button xo-e__button--primary" href="/#contact">Discuss early access <ArrowRight aria-hidden="true" /></a></div>
      </section>
    </main>
  </div>
);

export default CheckoutDemo;
