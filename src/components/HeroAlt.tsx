import { Button } from "@/components/ui/button";

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

      {/* Content wrapper - centered */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center justify-center px-6 lg:px-12 xl:px-24 2xl:px-32">
          {/* Text Content - centered */}
          <div className="text-center max-w-4xl">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-foreground">Your headline here.</span>
              <br />
              <span className="gradient-text">Highlighted text.</span>
              <br />
              <span className="text-foreground">More text here.</span>
            </h2>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Add your description text here. This section is ready for your custom content.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#services">Primary Action</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#contact">Secondary Action</a>
              </Button>
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
