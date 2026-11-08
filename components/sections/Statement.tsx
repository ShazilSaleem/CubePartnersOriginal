import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

/** Two-column opener under inner-page heroes: heading on the left, statement on the right. */
export function Statement({
  eyebrow,
  title,
  statement,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  statement: string;
  /** Supporting paragraph or link under the statement. */
  children?: React.ReactNode;
}) {
  return (
    <section className="py-20 lg:pt-[118px] lg:pb-[112px]">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-0">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} titleClassName="mt-5 max-w-[560px]" />
        </Reveal>
        <Reveal delay={120} className="flex flex-col items-start gap-8 lg:pt-[7px] lg:pl-[55px]">
          <p className="font-display text-statement text-ink max-lg:text-xl">{statement}</p>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
