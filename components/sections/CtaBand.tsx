import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** Purple "Let's connect" band above the footer. */
export function CtaBand({ title }: { title: string }) {
  return (
    <section className="bg-brand py-20 text-white">
      <Container>
        <Reveal className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Eyebrow tone="light">Let&apos;s connect</Eyebrow>
            <h2 className="mt-6 text-[3.5rem] leading-[1.1] font-medium max-lg:text-[clamp(2rem,6vw,3.5rem)]">
              {title}
            </h2>
            <p className="mt-1 text-base text-white/80">Let&apos;s talk about where you want to go next.</p>
          </div>
          <Button href="/contact" variant="white" className="shrink-0 self-start lg:self-center">
            Start a conversation
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
