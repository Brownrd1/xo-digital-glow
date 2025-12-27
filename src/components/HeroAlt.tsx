import { Button } from "@/components/ui/button";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Globe, Code2, Megaphone, Search, BarChart3 } from "lucide-react";

const timelineNodes = [
  {
    id: 1,
    icon: <Globe className="w-5 h-5" />,
    title: "Web Design",
    description: "Your platform",
    status: "completed" as const,
    energy: 100,
    relatedIds: [2, 4],
  },
  {
    id: 2,
    icon: <Code2 className="w-5 h-5" />,
    title: "Software Development",
    description: "Advanced tools for business",
    status: "in-progress" as const,
    energy: 75,
    relatedIds: [1, 5],
  },
  {
    id: 3,
    icon: <Megaphone className="w-5 h-5" />,
    title: "Marketing",
    description: "Build your brand",
    status: "in-progress" as const,
    energy: 60,
    relatedIds: [4, 5],
  },
  {
    id: 4,
    icon: <Search className="w-5 h-5" />,
    title: "SEO",
    description: "Get seen online",
    status: "pending" as const,
    energy: 40,
    relatedIds: [1, 3],
  },
  {
    id: 5,
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data Analysis",
    description: "Understand your market",
    status: "pending" as const,
    energy: 25,
    relatedIds: [2, 3],
  },
];

const HeroAlt = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content wrapper - full width */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left - Text Content (constrained width) */}
          <div className="order-2 lg:order-1 text-center lg:text-left px-6 lg:pl-12 xl:pl-24 2xl:pl-32 lg:pr-8 w-full lg:w-[40%] lg:max-w-[600px] lg:flex-shrink-0">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-foreground">Intelligent ecommerce systems.</span>
              <br />
              <span className="gradient-text">Built to perform.</span>
              <br />
              <span className="text-foreground">Designed to grow.</span>
            </h2>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              We build and optimise ecommerce platforms using software, marketing, 
              data, and applied AI.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#services">What we do</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>

          {/* Right - Radial Orbital Timeline */}
          <div className="order-1 lg:order-2 w-full lg:w-[60%] lg:flex-grow flex justify-center lg:justify-end py-8 lg:py-0">
            <div 
              className="relative w-full max-w-[500px] lg:max-w-[600px] px-4 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {/* Glow background */}
              <div className="absolute -inset-8 lg:-inset-16 bg-primary/10 blur-[80px] rounded-full" />
              
              <RadialOrbitalTimeline nodes={timelineNodes} className="relative z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroAlt;
