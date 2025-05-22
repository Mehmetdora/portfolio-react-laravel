import { cn } from "@/lib/utils";

export function GreenGradient({ className, ...props }) {
  return (
    <div
      className={cn("bg-gradient-to-r from-primary to-emerald-500", className)}
      {...props}
    />
  );
}

export function GreenGradientText({ className, children, ...props }) {
  return (
    <span
      className={cn("bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500", className)}
      {...props}
    >
      {children}
    </span>
  );
}
