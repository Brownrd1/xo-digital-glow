import { 
  Globe, 
  Code2, 
  TrendingUp, 
  Search, 
  Users, 
  BarChart3 
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: Globe,
    title: "Build & rebuild ecommerce websites",
    description: "Modern, fast, conversion-optimised storefronts built on the best platforms.",
  },
  {
    icon: Code2,
    title: "Custom software & systems",
    description: "Bespoke integrations, automations, and tools that connect your business.",
  },
  {
    icon: TrendingUp,
    title: "Marketing that drives revenue",
    description: "Google Ads, paid social, and performance campaigns built to scale.",
  },
  {
    icon: Search,
    title: "SEO built for ecommerce",
    description: "Technical SEO, content strategy, and link building that moves rankings.",
  },
  {
    icon: Users,
    title: "Conversion & customer behaviour",
    description: "CRO audits, A/B testing, and UX improvements based on real data.",
  },
  {
    icon: BarChart3,
    title: "Data + AI guided decisions",
    description: "Analytics, dashboards, and AI insights that turn data into action.",
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
              className="relative rounded-xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Glowing border effect */}
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              
              {/* Card content */}
              <div className="relative h-full bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50">
                {/* Icon */}
                <div className="mb-4">
                  <feature.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
