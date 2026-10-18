import Link from "next/link";
import type { ComponentProps } from "react";

// Solid offset shadow gives the 3D look; pressing moves the button down
// into its shadow.
const buttonClasses =
  "inline-block rounded-full bg-green-600 px-5 py-2 text-white shadow-[0_4px_0_var(--color-green-800)] transition-all duration-100 active:translate-y-1 active:shadow-none";

type ButtonProps =
  | (ComponentProps<"button"> & { href?: undefined })
  | ComponentProps<typeof Link>;

export default function Button({ className = "", ...props }: ButtonProps) {
  const classes = `${buttonClasses} ${className}`;

  if (props.href !== undefined) {
    return <Link {...(props as ComponentProps<typeof Link>)} className={classes} />;
  }

  return <button {...(props as ComponentProps<"button">)} className={classes} />;
}
