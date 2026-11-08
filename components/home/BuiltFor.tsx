import { Asterisk } from "@/components/ui/Asterisk";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** "Big ambitions deserve better company." Opening statement under the home hero. */
export function BuiltFor() {
  return (
    <section id="built-for" className="scroll-mt-header border-b border-line py-20 lg:pt-[130px] lg:pb-[126px]">
      <Container className="grid gap-8 lg:grid-cols-[290px_1fr_auto]">
        <Reveal>
          <Eyebrow className="lg:pt-1">Built for what’s next</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-title-lg text-ink max-lg:text-[clamp(2.25rem,6.5vw,3.875rem)]">
            Big ambitions deserve
            <br />
            <span className="text-brand">better company.</span>
          </h2>
          <p className="mt-8 max-w-[450px] text-[15px] leading-[27px] text-muted">
            You’ve got the drive. We bring the community, guidance and opportunities to help turn it into something
            remarkable.
          </p>
        </Reveal>
        <Reveal delay={200} className="hidden lg:block">
          <Asterisk strokeWidth={4} className="animate-spin-slow size-[52px] text-brand" />
        </Reveal>
      </Container>
    </section>
  );
}
