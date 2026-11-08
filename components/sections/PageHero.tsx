import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Second line, set in light purple. */
  highlight: string;
  lead: string;
  image: string;
  imageAlt: string;
  /** Buttons or links under the lead. */
  actions?: React.ReactNode;
  /** Small caption bottom right, e.g. "Partner scheme - Cube Partner". */
  caption?: string;
  /** Home page only: the "01 / Cube Partner" and "Scroll to explore" strip. */
  footer?: React.ReactNode;
  size?: "home" | "page";
};

/** Full-bleed photo hero with a navy wash that fades from left to right. */
export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  image,
  imageAlt,
  actions,
  caption,
  footer,
  size = "page",
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[570px] overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom -z-20 object-cover object-[65%_center]"
      />
      {/* Overlay measured from the design: ~85% navy at the left edge, ~12% at the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(17_19_31/0.86)_0%,rgb(17_19_31/0.78)_22%,rgb(17_19_31/0.6)_48%,rgb(17_19_31/0.3)_70%,rgb(17_19_31/0.12)_100%)] max-md:bg-[linear-gradient(90deg,rgb(17_19_31/0.85),rgb(17_19_31/0.65))]"
      />

      <Container className="relative flex flex-col justify-center py-24">
        <div className="hero-stagger flex max-w-[960px] flex-col">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-7",
              size === "home"
                ? "text-hero max-lg:text-[clamp(2.75rem,8.5vw,5.5rem)]"
                : "text-hero-sm max-lg:text-[clamp(2.625rem,8vw,5rem)]",
            )}
          >
            {title}
            <br />
            <span className="text-brand-light">{highlight}</span>
          </h1>
          <div>
            <p className="mt-6 max-w-[490px] text-intro text-white/85">{lead}</p>
            {actions && <div className="mt-9 flex flex-wrap items-center gap-8">{actions}</div>}
          </div>
        </div>
        {footer}
      </Container>

      {caption && (
        <p className="absolute right-5 bottom-10 font-sans text-[10px] font-medium tracking-[0.12em] text-white/75 uppercase sm:right-10">
          {caption}
        </p>
      )}
    </section>
  );
}
