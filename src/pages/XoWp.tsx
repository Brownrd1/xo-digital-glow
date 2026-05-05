import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, FileText, Truck, LayoutTemplate, Workflow, BrainCircuit, MousePointerClick, MessageSquare, Activity, PackageCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/xowp-hero-visual.jpg";
import orbitVisual from "@/assets/xowp-orbit.jpg";
import networkVisual from "@/assets/xowp-network.jpg";
import checkoutFlow from "@/assets/xowp-checkout-flow.png";
import checkoutHero from "@/assets/xowp-checkout-hero.png";

const pillars = [
  {
    icon: LayoutTemplate,
    title: "Six branded checkout experiences",
    body: "Corporate, modern, or bold — multi-step or single page. Fully themed to your business.",
  },
  {
    icon: Workflow,
    title: "Quote → invoice lifecycle",
    body: "Structured stages, editable line items, instant conversion, and a complete audit trail.",
  },
  {
    icon: Truck,
    title: "Shipping intelligence engine",
    body: "Advanced rules, multi-condition logic, and safe fallbacks. Checkout never breaks.",
  },
  {
    icon: ShieldCheck,
    title: "Smart invoice protection",
    body: "If shipping isn't confirmed, the system protects you — automatically converting to a quote.",
  },
  {
    icon: FileText,
    title: "Documents that move with the order",
    body: "Branded PDFs that update instantly. Secure, token-based access for every client.",
  },
  {
    icon: BrainCircuit,
    title: "Built-in business intelligence",
    body: "Track quote velocity, conversions, and revenue trends — directly inside your dashboard.",
  },
];

const lifecycle = [
  { step: "01", title: "Customer submits", body: "Branded checkout experience." },
  { step: "02", title: "Quote or invoice", body: "Controlled per store or per order." },
  { step: "03", title: "Admin reviews", body: "Adjust pricing, freight, and line items." },
  { step: "04", title: "Client accepts", body: "Tracked: sent → viewed → approved." },
  { step: "05", title: "Convert & invoice", body: "One click. Full history preserved." },
  { step: "06", title: "Payment & fulfilment", body: "Gateway or EFT. Completed and closed." },
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
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[hsl(265_85%_62%)]/15 blur-[140px] rounded-full pointer-events-none" />

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
                  <span className="gradient-text">rebuilt for WooCommerce.</span>
                </h1>

                <p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.25s" }}
                >
                  XO-WP transforms your store into a complete quoting, invoicing, and order
                  management system — built for how real businesses buy.
                </p>
                <p
                  className="text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  One plugin. Total control. From quote to payment.
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

              {/* Hero visual */}
              <div
                className="relative mt-20 max-w-6xl mx-auto opacity-0 animate-fade-in"
                style={{ animationDelay: "0.55s" }}
              >
                <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 via-transparent to-[hsl(265_85%_62%)]/20 blur-3xl rounded-full pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-[0_40px_100px_-20px_hsl(243_76%_59%/0.4)]">
                  <img
                    src={checkoutHero}
                    alt="XO-WP futuristic checkout experience — six-step visual flow"
                    width={1536}
                    height={1024}
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </section>


          {/* Pillars */}
          <section id="how-it-works" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for the way B2B buys</h2>
                <p className="text-lg text-muted-foreground">
                  Built for real purchasing workflows — not retail checkouts. Every step is designed
                  to remove friction between enquiry, pricing, approval, and payment.
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

          {/* Custom branded checkouts */}
          <section className="py-24 md:py-32 relative overflow-hidden border-y border-border/50 bg-card/20">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[hsl(265_85%_62%)]/15 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-8 bg-[hsl(265_85%_62%)]/20 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-[0_40px_100px_-20px_hsl(243_76%_59%/0.4)]">
                    <img
                      src={checkoutFlow}
                      alt="Futuristic XO-WP branded checkout flow — review, payment, processing, confirmation"
                      loading="lazy"
                      width={1536}
                      height={1024}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-5">
                    <LayoutTemplate className="w-3.5 h-3.5" />
                    Custom branded checkouts
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Your checkout. Your brand.{" "}
                    <span className="gradient-text">Fully controlled.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Your customers never feel like they've left your business — because they haven't.
                    Every pixel matches your brand, while we run the secure infrastructure underneath.
                  </p>
                  <ul className="space-y-3 text-foreground/80">
                    {[
                      "Your colours, fonts, and logo on every screen",
                      "Six flexible checkout layouts",
                      "Secure, PCI-grade infrastructure handled for you",
                      "Trust messaging aligned to your tone of voice",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-[hsl(265_85%_62%)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping engine spotlight */}
          <section className="relative py-24 md:py-32 overflow-hidden border-y border-border/50">
            <img
              src={networkVisual}
              alt=""
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />
            <div className="container mx-auto px-6 relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-5">
                    <Truck className="w-3.5 h-3.5" />
                    Shipping intelligence
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Shipping that works{" "}
                    <span className="gradient-text">the way your business works</span>.
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    No more broken checkouts. No more guesswork.
                  </p>
                  <ul className="space-y-3 text-foreground/80">
                    {[
                      "Restrict and filter by region or location",
                      "Rules by product, category, or shipping class",
                      "Intelligent fallback when data is incomplete",
                      "Every order protected, every time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-[hsl(265_85%_62%)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
                  <img
                    src={orbitVisual}
                    alt="Orbital shipping intelligence visualisation"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="relative w-full h-auto rounded-3xl border border-border/60"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Order system replaces WooCommerce */}
          <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(265_85%_62%)]/15 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-5">
                  <MousePointerClick className="w-3.5 h-3.5" />
                  Order management
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  Not just orders.{" "}
                  <span className="gradient-text">A complete workflow system.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  XO-WP replaces fragmented WooCommerce processes with one structured pipeline.
                  Everything happens in one place.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: MousePointerClick,
                    title: "Convert, approve, invoice, dispatch — in a click",
                    body: "Orders land ready to action. Every transition is one click away, with the system handling the heavy lifting underneath.",
                  },
                  {
                    icon: PackageCheck,
                    title: "Full quote-to-order lifecycle tracking",
                    body: "From first enquiry to shipped and closed. Every stage tracked, every transition logged, every document generated.",
                  },
                  {
                    icon: Activity,
                    title: "Real-time activity timeline on every order",
                    body: "See exactly what happened, when, and by whom. Status changes, edits, customer views — a complete observable history.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Built-in client communication — no email chaos",
                    body: "Talk to clients where the order lives. Branded portal, threaded messages, document downloads — all in context.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                  >
                    <div className="relative w-fit mb-5">
                      <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl" aria-hidden />
                      <div className="relative rounded-xl bg-gradient-to-br from-primary to-[hsl(265_85%_62%)] p-2.5 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.2)]">
                        <c.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.75} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Lifecycle */}
          <section className="py-24 md:py-32 bg-card/20">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  From enquiry to payment — <span className="gradient-text">fully structured</span>.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Six clear stages. Every quote, every order, every time.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {lifecycle.map((s) => (
                  <div
                    key={s.step}
                    className="relative rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors"
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
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[hsl(265_85%_62%)]/30 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Ready to run B2B properly{" "}
                    <span className="gradient-text">on WooCommerce?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                    XO-WP early access is opening to a limited number of stores.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
                  <p className="text-sm uppercase tracking-[0.25em] text-foreground/70 font-semibold">
                    Control your checkout. <span className="gradient-text">Control your business.</span>
                  </p>
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
