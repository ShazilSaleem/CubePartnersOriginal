import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { journey } from "@/lib/schemes";

/** "Your next chapter starts here." Five numbered steps on a timeline. */
export function Journey() {
  return (
    <section className="bg-surface py-20 lg:pt-[118px] lg:pb-[130px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The journey"
            title="Your next chapter starts here."
            intro="A clear, human path into the Cube Partner network."
            titleClassName="max-w-[640px]"
          />
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[22px]">
          {journey.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="group">
              <span className="font-display text-numeral text-brand">{String(i + 1).padStart(2, "0")}</span>
              <div className="relative mt-5 flex items-center">
                <span className="size-[7px] shrink-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-150" />
                <span className="h-px flex-1 bg-lilac-line" />
              </div>
              <h3 className="mt-8 font-display text-[17px] leading-6 font-medium text-ink">{step.title}</h3>
              <p className="mt-3 max-w-[170px] text-xs leading-[19px] text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
