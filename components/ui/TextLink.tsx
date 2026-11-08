import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

/** Underlined inline link with an arrow ("More about us ->"). */
export function TextLink({
  href,
  tone = "brand",
  icon = "right",
  className,
  children,
}: {
  href: string;
  tone?: "brand" | "light" | "ink";
  icon?: "right" | "up-right";
  className?: string;
  children: React.ReactNode;
}) {
  const Icon = icon === "right" ? ArrowRight : ArrowUpRight;
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 border-b pb-2 font-sans text-sm font-semibold transition-colors duration-300",
        tone === "brand" && "border-brand text-brand hover:text-brand-dark",
        tone === "light" && "border-white text-white",
        tone === "ink" && "border-transparent text-ink",
        className,
      )}
    >
      {children}
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className={cn(
          "size-4 transition-transform duration-300 ease-out-expo",
          icon === "right" ? "group-hover:translate-x-1" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        )}
      />
    </Link>
  );
}
