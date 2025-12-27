import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineNode {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface RadialOrbitalTimelineProps {
  nodes: TimelineNode[];
  className?: string;
}

const RadialOrbitalTimeline = ({ nodes, className }: RadialOrbitalTimelineProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const angleStep = 360 / nodes.length;

  return (
    <div className={cn("relative w-full aspect-square max-w-[500px] mx-auto", className)}>
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-primary/20 blur-xl" />
      </div>

      {/* Central hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow-indigo">
          <div className="w-8 h-8 rounded-full bg-background/20" />
        </div>
      </div>

      {/* Orbit rings */}
      <div className="absolute inset-[15%] rounded-full border border-primary/10" />
      <div className="absolute inset-[5%] rounded-full border border-primary/5" />

      {/* Orbiting nodes container */}
      <div 
        className={cn(
          "absolute inset-0 animate-orbit",
          mounted ? "opacity-100" : "opacity-0"
        )}
        style={{ 
          transition: "opacity 0.5s ease-out",
        }}
      >
        {nodes.map((node, index) => {
          const angle = (angleStep * index - 90) * (Math.PI / 180);
          const radius = 42; // percentage from center
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute animate-counter-orbit"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Node card */}
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-3 min-w-[120px] hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {node.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{node.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{node.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RadialOrbitalTimeline;
