import { ClipboardCheck, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Audit & strategy",
    description: "We dig into your current setup, identify gaps, and build a roadmap tailored to your goals.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Build & integrate",
    description: "From websites to custom systems, we design and develop solutions that work together seamlessly.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Optimise & scale",
    description: "Continuous improvement through data, testing, and AI-guided decisions to fuel growth.",
  },
];

const Process = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How we work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that takes you from where you are to where you want to be.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6 relative group">
                <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Step number */}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step.slice(-1)}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
