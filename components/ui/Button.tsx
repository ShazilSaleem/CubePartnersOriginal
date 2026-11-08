import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  /** Solid purple: header "Let's talk", form submit. */
  brand: "bg-brand text-white hover:bg-brand-dark",
  /** White block on photos and on the purple CTA band. */
  white: "bg-white text-ink hover:bg-lilac",
  /** Underlined text button on dark photos ("Get to know us"). */
  ghost: "border-b border-white/70 px-0! pb-2! text-white hover:border-white",
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
};

/** Uppercase spaced button with a trailing arrow that slides on hover. */
export function Button({ href, variant = "brand", type = "button", className, children }: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-display text-button uppercase transition-colors duration-300",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      <ArrowRight
        aria-hidden="true"
        strokeWidth={2}
        className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
      />
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return external ? (
      <a href={href} className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
