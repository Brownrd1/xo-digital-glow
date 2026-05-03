import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, FileText, Truck, LayoutTemplate, Workflow, BrainCircuit } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: LayoutTemplate,
    title: "Six branded checkout templates",
    body: "From clean corporate to art deco. Multi-step or single page. Fully themable per store.",
  },
  {
    icon: Workflow,
    title: "Quote → invoice lifecycle",
    body: "Structured stages, in-place line item editing, one-click conversion, full audit trail.",
  },
  {
    icon: Truck,
    title: "Shipping intelligence engine",
    body: "Class-based rules, multi-criteria routing, graceful TBD handling. Never break a checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Smart invoice protection",
    body: "If freight cannot be confirmed, the order is automatically downgraded to a quote.",
  },
  {
    icon: FileText,
    title: "Documents that travel",
    body: "Branded PDFs auto-regenerate on edit. Token-based downloads for every customer.",
  },
  {
    icon: BrainCircuit,
    title: "AI-powered business intelligence",
    body: "Insights on quote velocity, conversion, and revenue patterns — built into the admin.",
  },
];

const lifecycle = [
  { step: "01", title: "Customer submits", body: "Branded checkout — multi-step or single page." },
  { step: "02", title: "Quote or invoice", body: "Mode chosen per store, or per order at review." },
  { step: "03", title: "Admin reviews", body: "Line edits, discounts, freight adjustments." },
  { step: "04", title: "Client accepts", body: "Tracked status: sent → viewed → accepted." },
  { step: "05", title: "Convert & invoice", body: "One click. Activity log preserved." },
  { step: "06", title: "Payment & fulfil", body: "Gateway or EFT. Confirmed and closed." },
];

const XoWp = () => {
  return (
    <>
      <Helmet>
        <title>XO-WP | B2B checkout, quoting & order management for WooCommerce</title>
        <meta
          name="description"
          content="XO-WP turns a WooCommerce store into a professional B2B quoting and order management system — branded checkout, smart shipping, full document lifecycle and AI insights."
        />
        <link rel="canonical" href="https://xodigital.systems/xo-wp" />
        <meta property="og:title" content="XO-WP | B2B checkout & quoting for WooCommerce" />
        <meta
          property="og:description"
          content="One plugin. Branded checkout, quote-to-invoice lifecycle, shipping intelligence, and AI business insights — inside your existing WooCommerce store."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[hsl(265_85%_62%)]/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-xs font-medium text-foreground/80 mb-8 opacity-0 animate-fade-in">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Pre-production · Final testing phase
                </div>

                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className="text-foreground">B2B checkout,</span>
                  <br />
                  <span className="gradient-text">reimagined for WordPress.</span>
                </h1>

                <p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.25s" }}
                >
                  XO-WP turns your WooCommerce store into a professional quote, invoice and order
                  platform — branded, intelligent, and built for the way B2B actually buys.
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Button variant="hero" size="xl" asChild>
                    <a href="#contact">
                      Request early access
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <a href="#how-it-works">See how it works</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* One-line pitch */}
          <section className="py-16 border-y border-border/50 bg-card/30">
            <div className="container mx-auto px-6">
              <p className="max-w-4xl mx-auto text-center text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
                One plugin install.{" "}
                <span className="gradient-text font-semibold">
                  WooCommerce becomes a B2B quoting and order management system.
                </span>
              </p>
            </div>
          </section>

          {/* Pillars */}
          <section id="how-it-works" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for the way B2B buys</h2>
                <p className="text-lg text-muted-foreground">
                  Every detail engineered to remove friction from quoting, ordering and fulfilment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                  >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-[hsl(265_85%_62%)]/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/10 group-hover:to-[hsl(265_85%_62%)]/10 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative">
                      <div className="relative w-fit mb-5">
                        <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl" aria-hidden />
                        <div className="relative rounded-xl bg-gradient-to-br from-primary to-[hsl(265_85%_62%)] p-2.5 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.2)]">
                          <p.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.75} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lifecycle */}
          <section className="py-24 md:py-32 bg-card/20 border-y border-border/50">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">From cart to confirmed</h2>
                <p className="text-lg text-muted-foreground">
                  A structured, observable lifecycle — for every quote and every order.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {lifecycle.map((s) => (
                  <div
                    key={s.step}
                    className="relative rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm p-6"
                  >
                    <div className="text-xs font-semibold tracking-[0.2em] text-primary mb-3">
                      {s.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Closing CTA */}
          <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              <div className="relative max-w-4xl mx-auto rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-md p-12 md:p-16 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-[hsl(265_85%_62%)]/10 pointer-events-none" />
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Ready to see XO-WP in your store?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                    Early access is opening to a small group of B2B WooCommerce stores. Tell us about
                    yours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/#contact">
                        Request early access
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </Link>
                    </Button>
                    <Button variant="hero-outline" size="xl" asChild>
                      <Link to="/">Back to XO Digital</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default XoWp;
