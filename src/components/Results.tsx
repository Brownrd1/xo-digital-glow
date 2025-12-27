const stats = [
  {
    value: "+47%",
    label: "Conversion rate",
    description: "Average improvement in checkout conversion across clients.",
  },
  {
    value: "-32%",
    label: "Checkout friction",
    description: "Reduction in cart abandonment through UX optimisation.",
  },
  {
    value: "3.2x",
    label: "Organic growth",
    description: "Average increase in organic revenue within 12 months.",
  },
];

const Results = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proof in the numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects. We measure everything so you know exactly what's working.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glow-card text-center py-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
