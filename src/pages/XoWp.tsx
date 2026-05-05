import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, FileText, Truck, LayoutTemplate, Workflow, BrainCircuit, MousePointerClick, MessageSquare, Activity, PackageCheck, ShoppingCart, FileCheck2, UserCog, CheckCircle2, Repeat, CreditCard, ChevronLeft, ChevronRight, Pause, Play, Check, Minus, Rocket, Crown, Zap } from "lucide-react";
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
  {
    step: "01",
    title: "Customer submits",
    body: "Branded checkout experience.",
    icon: ShoppingCart,
    detail:
      "The buyer completes a fully branded, multi-step checkout that feels like part of your store. Their details, line items, and shipping context are captured in one structured submission.",
    highlights: [
      "Branded, on-domain checkout",
      "Validated customer & shipping data",
      "Captured straight into the pipeline",
    ],
  },
  {
    step: "02",
    title: "Quote or invoice",
    body: "Controlled per store or per order.",
    icon: FileCheck2,
    detail:
      "Decide globally or per order whether the submission becomes a quote awaiting approval or a direct invoice. The system routes the order down the right path automatically.",
    highlights: [
      "Per-store default behaviour",
      "Per-order overrides",
      "Smart fallback to quote when needed",
    ],
  },
  {
    step: "03",
    title: "Admin reviews",
    body: "Adjust pricing, freight, and line items.",
    icon: UserCog,
    detail:
      "Your team opens the order, refines pricing, adjusts freight, edits line items, and adds notes — all in one screen with a complete activity log of every change.",
    highlights: [
      "Edit pricing & freight inline",
      "Add, remove, or split line items",
      "Full audit trail of every edit",
    ],
  },
  {
    step: "04",
    title: "Client accepts",
    body: "Tracked: sent → viewed → approved.",
    icon: CheckCircle2,
    detail:
      "The client receives a secure, token-protected link to a branded quote. You see exactly when it was sent, opened, and approved — no chasing, no guessing.",
    highlights: [
      "Secure token-based client portal",
      "Sent → viewed → approved tracking",
      "One-click approve or request changes",
    ],
  },
  {
    step: "05",
    title: "Convert & invoice",
    body: "One click. Full history preserved.",
    icon: Repeat,
    detail:
      "Approved quotes convert to invoices in a single click. The original quote, edits, and timeline are preserved as a permanent, linked history on the order.",
    highlights: [
      "One-click quote → invoice",
      "Linked, immutable history",
      "Branded invoice PDF generated instantly",
    ],
  },
  {
    step: "06",
    title: "Payment & fulfilment",
    body: "Gateway or EFT. Completed and closed.",
    icon: CreditCard,
    detail:
      "Collect payment via gateway or EFT, mark fulfilment, and close the loop. Status, documents, and communication stay attached to the order forever.",
    highlights: [
      "Gateway or manual EFT flows",
      "Fulfilment tracking & dispatch",
      "Order closed with full record retained",
    ],
  },
];

const SLIDE_DURATION = 6000;

// Vibrant rainbow gradient — used ONLY on the moving stepper rail line
const railHues = [
  "300 90% 65%",
  "278 85% 62%",
  "255 80% 62%",
  "230 80% 62%",
  "205 85% 60%",
  "188 88% 55%",
];

const LifecycleShowcase = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(performance.now());
  const rafRef = useRef<number>();

  const total = lifecycle.length;

  useEffect(() => {
    if (!playing) return;
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        setActive((a) => (a + 1) % total);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, active, total]);

  const goTo = (i: number) => {
    setActive(((i % total) + total) % total);
    setProgress(0);
    startRef.current = performance.now();
  };

  const current = lifecycle[active];
  const Icon = current.icon;

  const railFullGradient =
    "linear-gradient(to right, " +
    railHues.map((h, i) => `hsl(${h}) ${(i / (total - 1)) * 100}%`).join(", ") +
    ")";
  const filledPct = ((active + progress) / (total - 1)) * 100;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Stepper rail */}
      <div className="relative mb-10">
        <ol className="relative flex items-start justify-between">
          {/* Background track + filled gradient — positioned at dot vertical center, between first/last dot horizontally */}
          <div
            className="absolute top-5 md:top-6 h-px bg-border/60 pointer-events-none"
            style={{ left: "calc((100% / 6) / 2)", right: "calc((100% / 6) / 2)" }}
            aria-hidden
          />
          <div
            className="absolute top-5 md:top-6 h-[2px] -translate-y-px pointer-events-none transition-[width] duration-150 ease-linear rounded-full"
            style={{
              left: "calc((100% / 6) / 2)",
              width: `calc((100% - (100% / 6)) * ${filledPct / 100})`,
              backgroundImage: railFullGradient,
              backgroundSize: `${(100 / Math.max(filledPct, 0.0001)) * 100}% 100%`,
              backgroundRepeat: "no-repeat",
              boxShadow: filledPct > 0 ? "0 0 12px hsl(243 76% 59% / 0.6)" : "none",
            }}
            aria-hidden
          />

          {lifecycle.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={s.step} className="flex flex-col items-center gap-2 flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${s.step}: ${s.title}`}
                  aria-current={isActive ? "step" : undefined}
                  className="group relative flex flex-col items-center gap-2"
                >
                  <span
                    className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-primary to-[hsl(265_85%_62%)] border-primary text-primary-foreground shadow-[0_0_24px_hsl(243_76%_59%/0.6)] scale-110"
                        : isDone
                        ? "bg-primary/15 border-primary/40 text-primary"
                        : "bg-card border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"
                    }`}
                  >
                    {s.step}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl -z-10" aria-hidden />
                    )}
                  </span>
                  <span
                    className={`hidden md:block text-xs font-medium text-center transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Active slide */}
      <div className="relative rounded-3xl border border-border/60 bg-card/40 backdrop-blur-md p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[hsl(265_85%_62%)]/20 blur-3xl rounded-full pointer-events-none" />

        <div key={active} className="relative grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-start animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/30 blur-2xl" aria-hidden />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-primary to-[hsl(265_85%_62%)] flex items-center justify-center shadow-[inset_0_1px_0_hsl(0_0%_100%/0.2)]">
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" strokeWidth={1.6} />
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-primary mb-3">
              STAGE {current.step} OF {String(total).padStart(2, "0")}
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{current.title}</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {current.detail}
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {current.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" strokeWidth={2} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-8 h-1 rounded-full bg-border/50 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-[hsl(265_85%_62%)] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="relative flex items-center justify-between mt-6">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous stage"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-background/60 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-foreground transition-colors"
            aria-label={playing ? "Pause auto-play" : "Resume auto-play"}
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next stage"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};


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

              <LifecycleShowcase />

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
