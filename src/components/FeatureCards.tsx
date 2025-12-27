import { 
  Globe, 
  Code2, 
  TrendingUp, 
  Search, 
  Users, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Build & rebuild ecommerce websites",
    description: "Modern, fast, conversion-optimised storefronts built on the best platforms.",
    glowColor: "from-indigo/20",
  },
  {
    icon: Code2,
    title: "Custom software & systems",
    description: "Bespoke integrations, automations, and tools that connect your business.",
    glowColor: "from-primary/20",
  },
  {
    icon: TrendingUp,
    title: "Marketing that drives revenue",
    description: "Google Ads, paid social, and performance campaigns built to scale.",
    glowColor: "from-green-500/20",
  },
  {
    icon: Search,
    title: "SEO built for ecommerce",
    description: "Technical SEO, content strategy, and link building that moves rankings.",
    glowColor: "from-yellow-500/20",
  },
  {
    icon: Users,
    title: "Conversion & customer behaviour",
    description: "CRO audits, A/B testing, and UX improvements based on real data.",
    glowColor: "from-pink-500/20",
  },
  {
    icon: BarChart3,
    title: "Data + AI guided decisions",
    description: "Analytics, dashboards, and AI insights that turn data into action.",
    glowColor: "from-cyan-500/20",
  },
];

const FeatureCards = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What we do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end ecommerce services that connect strategy, technology, and growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glow-card group cursor-default opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Icon */}
              <div className="mb-4 relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.glowColor} to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <feature.icon className="relative z-10 w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
