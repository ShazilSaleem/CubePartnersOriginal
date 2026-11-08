import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Criterion } from "@/lib/schemes";

/** "What makes a great partner/introducer?" Six criteria in a ruled grid. */
export function RightFit({ role, criteria }: { role: string; criteria: Criterion[] }) {
  return (
    <section className="py-20 lg:pt-[118px] lg:pb-[112px]">
      <Container>
        <Reveal className="flex items-end justify-between gap-8">
          <SectionHeading
            eyebrow="The right fit"
            title={`What makes a great ${role}?`}
            intro="There’s no single path to success. Here’s what matters most to us."
            titleClassName="max-w-[560px]"
          />
          <span aria-hidden="true" className="hidden font-display text-[110px] leading-none font-light text-ghost md:block">
            {String(criteria.length).padStart(2, "0")}
          </span>
        </Reveal>

        <ul className="mt-12 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={(i % 3) * 100} className="group px-8 pt-[30px] pb-9">
                <span className="text-[11px] text-muted">{String(i + 1).padStart(2, "0")} /</span>
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-2 size-[26px] text-brand transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5"
                />
                <h3 className="mt-4 font-display text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 max-w-[270px] text-[13px] leading-[19px] text-muted">{item.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
