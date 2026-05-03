import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-[hsl(265_85%_62%)] text-primary-foreground shadow-[0_8px_24px_-8px_hsl(243_76%_59%/0.6),inset_0_1px_0_hsl(0_0%_100%/0.15)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_hsl(265_85%_62%/0.7),inset_0_1px_0_hsl(0_0%_100%/0.2)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-to-r from-primary to-[hsl(265_85%_62%)] text-primary-foreground shadow-[0_10px_30px_-10px_hsl(243_76%_59%/0.7),inset_0_1px_0_hsl(0_0%_100%/0.2)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-10px_hsl(265_85%_62%/0.8),inset_0_1px_0_hsl(0_0%_100%/0.25)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none",
        "hero-outline":
          "border border-primary/40 bg-primary/5 text-foreground backdrop-blur-sm hover:border-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-glow-indigo-sm",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
