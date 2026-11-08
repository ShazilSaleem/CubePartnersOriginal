import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

/** Eyebrow, large heading and optional intro line used to open most sections. */
export function SectionHeading({
  eyebrow,
  eyebrowTone = "brand",
  title,
  intro,
  large = false,
  className,
  titleClassName,
}: {
  eyebrow: string;
  eyebrowTone?: "brand" | "ink";
  title: React.ReactNode;
  intro?: string;
  /** 62px instead of 58px, for "One network." */
  large?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-6 text-ink",
          large
            ? "text-title-lg max-lg:text-[clamp(2.25rem,6.5vw,3.875rem)]"
            : "text-title max-lg:text-[clamp(2.25rem,6.5vw,3.625rem)]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {intro && <p className="mt-6 text-[15px] leading-6 text-muted">{intro}</p>}
    </div>
  );
}
