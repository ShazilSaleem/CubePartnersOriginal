import { cn } from "@/lib/cn";

const tones = {
  brand: { line: "bg-brand", text: "text-brand" },
  ink: { line: "bg-ink", text: "text-ink" },
  light: { line: "bg-white/80", text: "text-white" },
};

/** Section label: a 27px rule followed by small spaced capitals. */
export function Eyebrow({
  tone = "brand",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("flex items-center gap-3 font-sans text-eyebrow uppercase", tones[tone].text, className)}>
      <span aria-hidden="true" className={cn("h-px w-[27px] shrink-0", tones[tone].line)} />
      {children}
    </p>
  );
}
