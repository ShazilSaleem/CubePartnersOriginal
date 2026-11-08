import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { benefits } from "@/lib/schemes";

/** "More than a network." Three numbered benefit cards. */
export function Benefits() {
  return (
    <section className="bg-surface py-20 lg:py-[118px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What you gain"
            title="More than a network."
            intro="The right people, tools and perspective to help you do your best work."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 100}>
                <article className="group flex h-full min-h-[294px] flex-col border border-line bg-page px-7 pt-8 pb-8 transition-[border-color,box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/30 hover:shadow-card">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-6 text-brand transition-transform duration-500 ease-out-expo group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-auto pt-16 text-card text-ink">{item.title}</h3>
                  <div className="mt-3 flex items-end justify-between gap-6">
                    <p className="max-w-[270px] text-[13px] leading-[22px] text-muted">{item.text}</p>
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="mb-1 size-4 shrink-0 text-brand transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
