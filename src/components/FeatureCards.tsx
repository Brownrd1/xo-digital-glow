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
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className="min-h-[14rem] list-none opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Outer wrapper with p-2 padding to create space for glow */}
              <div className="relative h-full rounded-2xl border border-border p-2">
                {/* Glowing border effect - positioned in the padding gap */}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  debug={true}
                />
                
                {/* Inner card with solid background - sits on top of glow */}
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border border-border/50 bg-background p-6">
                  {/* Icon container */}
                  <div className="w-fit rounded-lg border border-border bg-muted p-2">
                    <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureCards;
