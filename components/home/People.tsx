import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading } from "@/components/sections/SectionHeading";

/** "Good work starts with great people." Photo beside a short story. */
export function People() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[647px_1fr] lg:items-center lg:gap-[115px]">
        <Reveal as="figure" className="group relative overflow-hidden">
          <Image
            src="/images/team-working.jpg"
            alt="Four accountants reviewing documents together around a meeting table"
            width={648}
            height={549}
            sizes="(min-width: 1024px) 647px, 100vw"
            className="aspect-[647/549] w-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]"
          />
          <figcaption className="absolute bottom-6 left-[26px] font-sans text-[10px] font-semibold tracking-[0.14em] text-white uppercase">
            Better, together.
          </figcaption>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="People first, always"
            title={
              <>
                Good work starts with <span className="text-brand">great people.</span>
              </>
            }
            titleClassName="max-w-[500px]"
          />
          <p className="mt-8 max-w-[440px] text-[15px] leading-7 text-muted">
            We’re creating a space where independent thinking meets collective strength. Where relationships matter,
            ideas are shared, and everyone has room to do their best work.
          </p>
          <TextLink href="/about" className="mt-10">
            Discover our story
          </TextLink>
        </Reveal>
      </Container>
    </section>
  );
}
