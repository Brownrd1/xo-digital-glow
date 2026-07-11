import { ArrowRight, Check, FileText, ShoppingCart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroAlt = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,hsl(var(--primary)/0.16),transparent_36%),linear-gradient(145deg,hsl(var(--background)),hsl(var(--background)),hsl(var(--secondary)/0.16))]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      <div className="container relative z-10 mx-auto w-full max-w-full px-6 py-16 md:py-24 lg:py-20">
        <div className="grid w-full min-w-0 max-w-full items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(500px,1.08fr)] lg:gap-16">
          <div className="w-full min-w-0 max-w-full lg:max-w-3xl">
            <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:text-xs sm:tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
              Introducing XO Commerce
            </div>

            <h1 className="w-full max-w-full break-words text-[clamp(2.6rem,7vw,5.75rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-foreground sm:text-balance">
              Commerce systems for businesses that have
              <span className="block bg-gradient-to-r from-primary via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                outgrown basic checkout.
              </span>
            </h1>

            <p className="mt-7 w-full max-w-2xl break-words text-lg leading-relaxed text-muted-foreground sm:text-pretty md:text-xl">
              XO Digital Systems is building XO Commerce: connected software for complex buying journeys. Our first product brings the platform to WooCommerce.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="/xo-wp">
                  Explore XO for WooCommerce
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#contact">Talk to us</a>
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["WooCommerce first", "Seven checkout designs", "Free, Pro & Enterprise"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[calc(100vw-3rem)] sm:max-w-[680px] lg:max-w-none">
            <div className="absolute inset-10 rounded-full bg-primary/20 blur-[110px]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/85 p-3 shadow-[0_36px_100px_-30px_hsl(var(--primary)/0.35)] backdrop-blur-xl sm:p-5">
              <div className="rounded-[1.25rem] border border-border bg-background/90 p-4 sm:p-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">XO Commerce</p>
                    <p className="mt-1 font-semibold text-foreground">Connected commerce journey</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Built for real business</span>
                </div>

                <div className="grid gap-3 py-4 sm:grid-cols-3">
                  {[
                    { icon: ShoppingCart, label: "Modern checkout", detail: "Branded buying experience" },
                    { icon: FileText, label: "Quote to payment", detail: "A connected B2B journey" },
                    { icon: Truck, label: "Smarter delivery", detail: "Built for complex orders" },
                  ].map(({ icon: Icon, label, detail }) => (
                    <div key={label} className="rounded-xl border border-border bg-card p-4">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                      <p className="mt-5 text-sm font-semibold text-foreground">{label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border bg-gradient-to-r from-primary/10 to-transparent p-4 sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">One journey. Fewer disconnected tools.</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">From the first checkout step to the final customer action.</p>
                    </div>
                    <div className="flex items-center gap-1.5" aria-label="Connected workflow">
                      {[0, 1, 2, 3].map((step) => (
                        <span key={step} className={`h-2 rounded-full ${step === 3 ? "w-8 bg-primary" : "w-2 bg-primary/35"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;
