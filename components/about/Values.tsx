import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const values = [
  { letter: "C", title: "Communication", text: "Plain English, prompt replies, and no surprises." },
  { letter: "U", title: "Understand", text: "We take time to learn your business and your goals before we advise." },
  { letter: "B", title: "Build", text: "We help you grow on solid foundations, with accurate numbers and sound planning." },
  { letter: "E", title: "Engage", text: "We stay involved all year round, not just at deadline time." },
];

/** "The principles behind C-U-B-E." Four value cards. */
export function Values() {
  return (
    <section className="bg-surface py-20 lg:pt-[118px] lg:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our values"
            title={
              <>
                The principles behind <span className="text-brand">C-U-B-E.</span>
              </>
            }
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <Reveal as="li" key={item.letter} delay={i * 100}>
              <article className="group h-full min-h-[236px] border border-line bg-page px-6 pt-6 pb-8 transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card">
                <span className="flex size-12 items-center justify-center rounded-[4px] bg-brand font-display text-lg font-semibold text-white transition-transform duration-500 ease-out-expo group-hover:rotate-[-6deg]">
                  {item.letter}
                </span>
                <h3 className="mt-8 font-display text-[22px] font-medium text-ink">{item.title}</h3>
                <p className="mt-4 max-w-[230px] text-[13px] leading-[22px] text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
