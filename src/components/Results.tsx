const stats = [
  {
    value: "7",
    label: "Checkout designs",
    description: "Distinct branded experiences for different types of WooCommerce stores.",
  },
  {
    value: "3",
    label: "Product tiers",
    description: "A clear path from safe evaluation to advanced commerce operations.",
  },
  {
    value: "1",
    label: "Connected journey",
    description: "Checkout, quoting, payment and customer self-service working together.",
  },
];

const Results = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A product built with depth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serious commerce needs more than a prettier checkout. XO-WP connects the moments around it.
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
