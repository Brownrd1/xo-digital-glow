import { ArrowUpRight, CircleDollarSign, Handshake, UserRoundCheck } from "lucide-react";

const outcomes = [
  {
    icon: CircleDollarSign,
    eyebrow: "Protect the order",
    title: "Keep uncertainty from becoming lost margin.",
    description: "When pricing or delivery needs attention, XO helps the order follow the safer commercial path instead of forcing a bad total through checkout.",
  },
  {
    icon: Handshake,
    eyebrow: "Move the sale forward",
    title: "Turn complex enquiries into a clear next step.",
    description: "Bring review, quotation, approval, payment, and fulfilment into a journey your team and customer can both understand.",
  },
  {
    icon: UserRoundCheck,
    eyebrow: "Give customers clarity",
    title: "Replace inbox chasing with self-service.",
    description: "Give customers one branded place to review commercial activity, respond, access documents, and continue toward payment.",
  },
];

const Results = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="container relative mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why XO Commerce</p>
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
            Checkout is only the beginning of the sale.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            XO connects what happens next—so complex orders do not disappear into disconnected tools, manual work, and customer uncertainty.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {outcomes.map(({ icon: Icon, eyebrow, title, description }) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-7 transition-colors hover:border-primary/40 md:p-8">
              <div className="absolute right-0 top-0 h-36 w-36 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl transition-colors group-hover:bg-primary/20" />
              <div className="relative">
                <div className="mb-10 flex items-center justify-between">
                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
                <h3 className="text-xl font-semibold leading-snug text-foreground md:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
