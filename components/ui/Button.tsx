// Custom component — not in private repo or Shadcn
import type { ComponentProps } from "react";

export function Button({
  className = "",
  type = "button",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center bg-primary px-8 py-3 text-base/[normal] font-bold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${className}`}
      {...props}
    />
  );
}
