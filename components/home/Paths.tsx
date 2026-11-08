import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Asterisk } from "@/components/ui/Asterisk";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";

const paths = [
  {
    label: "01 / For experienced accountants",
    title: ["Partner", "scheme."],
    text: "Build a practice that’s yours, with the backing of a network that’s with you every step.",
    href: "/partner-scheme",
    dark: true,
  },
  {
    label: "02 / For natural connectors",
    title: ["Introducer", "scheme."],
    text: "Turn your connections and curiosity into a meaningful new opportunity.",
    href: "/introducer-scheme",
    dark: false,
  },
];

/** "Two paths. One shared ambition." The two scheme cards. */
export function Paths() {
  return (
    <section id="schemes" className="scroll-mt-header py-20 lg:pt-[118px] lg:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Find your place"
            title="Two paths. One shared ambition."
            intro="However you want to move forward, there’s a way in."
            titleClassName="max-w-[640px]"
          />
        </Reveal>

        <div className="mt-14 grid gap-[18px] md:grid-cols-2">
          {paths.map((path, i) => (
            <Reveal key={path.href} delay={i * 120}>
              <Link
                href={path.href}
                className={cn(
                  "group relative isolate flex min-h-[410px] flex-col overflow-hidden px-8 pt-10 pb-10 sm:px-10",
                  path.dark ? "bg-brand text-white" : "bg-lilac text-ink",
                )}
              >
                <Asterisk
                  strokeWidth={6}
                  className={cn(
                    "absolute -top-5 right-14 -z-10 size-[240px] rotate-[20deg] transition-transform duration-1000 ease-out-expo group-hover:rotate-[65deg]",
                    path.dark ? "text-white/12" : "text-ink/6",
                  )}
                />
                <span className="font-sans text-[10px] font-semibold tracking-[0.14em] uppercase">{path.label}</span>
                <h3 className="mt-auto pt-24 text-[3.5rem] leading-[1.06] font-medium max-sm:text-[2.75rem]">
                  {path.title[0]}
                  <br />
                  {path.title[1]}
                </h3>
                <p className={cn("mt-6 max-w-[330px] text-sm leading-[23px]", path.dark ? "text-white/80" : "text-ink/75")}>
                  {path.text}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-3 text-xs font-semibold">
                    Explore the scheme
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
