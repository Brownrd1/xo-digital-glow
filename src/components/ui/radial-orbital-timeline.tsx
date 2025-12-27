import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import xoLogo from "@/assets/xo-logo-center.svg";

interface TimelineNode {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  energy: number;
  relatedIds?: number[];
}

interface RadialOrbitalTimelineProps {
  nodes: TimelineNode[];
  className?: string;
}

const statusColors = {
  completed: "bg-green-500",
  "in-progress": "bg-amber-500",
  pending: "bg-muted-foreground/50",
};

const statusLabels = {
  completed: "Complete",
  "in-progress": "Active",
  pending: "Pending",
};

const RadialOrbitalTimeline = ({ nodes, className }: RadialOrbitalTimelineProps) => {
  const [mounted, setMounted] = useState(false);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const angleStep = 360 / nodes.length;
  const radius = 42;

  // Calculate node positions for connection lines
  const getNodePosition = (index: number) => {
    const angle = (angleStep * index - 90) * (Math.PI / 180);
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  };

  // Get related connections
  const connections: { from: number; to: number }[] = [];
  nodes.forEach((node) => {
    if (node.relatedIds) {
      node.relatedIds.forEach((relatedId) => {
        const fromIndex = nodes.findIndex((n) => n.id === node.id);
        const toIndex = nodes.findIndex((n) => n.id === relatedId);
        if (fromIndex !== -1 && toIndex !== -1) {
          // Avoid duplicate connections
          const exists = connections.some(
            (c) =>
              (c.from === fromIndex && c.to === toIndex) ||
              (c.from === toIndex && c.to === fromIndex)
          );
          if (!exists) {
            connections.push({ from: fromIndex, to: toIndex });
          }
        }
      });
    }
  });

  const activeNode = hoveredNode ?? selectedNode;

  return (
    <div className={cn("relative w-full aspect-square max-w-[600px] mx-auto", className)}>
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {connections.map(({ from, to }, index) => {
          const fromPos = getNodePosition(from);
          const toPos = getNodePosition(to);
          const isActive =
            activeNode !== null &&
            (nodes[from].id === activeNode || nodes[to].id === activeNode);

          return (
            <line
              key={index}
              x1={`${fromPos.x}%`}
              y1={`${fromPos.y}%`}
              x2={`${toPos.x}%`}
              y2={`${toPos.y}%`}
              stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.2)"}
              strokeWidth={isActive ? 2 : 1}
              strokeDasharray={isActive ? "none" : "4 4"}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Multi-layer central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-primary/10 blur-[100px] center-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-56 h-56 rounded-full bg-background/60 blur-3xl" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-44 h-44 rounded-full bg-primary/15 blur-2xl center-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Central logo with radial gradient fade */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div 
          className="w-52 h-52 flex items-center justify-center rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--background)) 35%, hsl(var(--background) / 0.6) 55%, transparent 75%)'
          }}
        >
          <img 
            src={xoLogo} 
            alt="XO Logo" 
            className="w-40 h-40"
          />
        </div>
      </div>

      {/* Orbit rings */}
      <div className="absolute inset-[12%] rounded-full border border-primary/10" />
      <div className="absolute inset-[3%] rounded-full border border-primary/5" />

      {/* Orbiting nodes container */}
      <div
        className={cn(
          "absolute inset-0 animate-orbit z-20",
          mounted ? "opacity-100" : "opacity-0"
        )}
        style={{
          transition: "opacity 0.5s ease-out",
        }}
      >
        {nodes.map((node, index) => {
          const pos = getNodePosition(index);
          const isActive = activeNode === node.id;
          const isRelated =
            activeNode !== null &&
            nodes.find((n) => n.id === activeNode)?.relatedIds?.includes(node.id);

          return (
            <div
              key={node.id}
              className="absolute animate-counter-orbit"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Node card */}
              <div
                className={cn(
                  "group relative cursor-pointer transition-all duration-300",
                  isActive && "scale-110 z-30",
                  isRelated && "scale-105"
                )}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Glow effect */}
                <div
                  className={cn(
                    "absolute -inset-3 rounded-2xl blur-xl transition-opacity duration-300",
                    isActive ? "opacity-100 bg-primary/30" : "opacity-0 bg-primary/20 group-hover:opacity-60"
                  )}
                />

                {/* Card */}
                <div
                  className={cn(
                    "relative bg-card/90 backdrop-blur-md border rounded-2xl p-4 min-w-[150px] max-w-[160px] transition-all duration-300",
                    isActive
                      ? "border-primary shadow-glow-indigo"
                      : isRelated
                      ? "border-primary/40"
                      : "border-primary/20 hover:border-primary/40"
                  )}
                >
                  {/* Header with icon and status */}
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center text-primary transition-colors",
                        isActive ? "bg-primary/20" : "bg-primary/10"
                      )}
                    >
                      {node.icon}
                    </div>
                    {/* Status badge */}
                    <div className="flex items-center gap-1.5">
                      <div className={cn("w-2 h-2 rounded-full", statusColors[node.status])} />
                      <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
                        {statusLabels[node.status]}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-foreground mb-1">{node.title}</h4>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {node.description}
                  </p>

                  {/* Energy bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground font-medium">Progress</span>
                      <span className="text-[10px] text-primary font-semibold">{node.energy}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                        style={{ width: `${node.energy}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RadialOrbitalTimeline;
