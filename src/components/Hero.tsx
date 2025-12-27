import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-6 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-foreground">Intelligent ecommerce systems.</span>
              <br />
              <span className="gradient-text">Built to perform.</span>
              <br />
              <span className="text-foreground">Designed to grow.</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in"
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

          {/* Right - Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-2xl lg:-mr-12 xl:-mr-20 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {/* Glow background */}
              <div className="absolute -inset-16 bg-primary/20 blur-3xl rounded-full" />
              
              {/* Hero image with float and glow */}
              <img
                src={heroImage}
                alt="XO Digital Systems - AI-powered ecommerce platform"
                className="relative z-10 w-full h-auto hero-float hero-glow drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
