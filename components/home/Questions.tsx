"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import { questions } from "@/lib/questions";

const pad = (n: number) => String(n).padStart(2, "0");

/** "The questions that move us forward." Six tabs: What, When, Where, Why, Who, How. */
export function Questions() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const total = questions.length;
  const current = questions[active];
  const Icon = current.icon;

  const select = (index: number, focus = false) => {
    const next = (index + total) % total;
    setActive(next);
    if (focus) tabsRef.current[next]?.focus();
  };

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") select(active + 1, true);
    else if (e.key === "ArrowLeft") select(active - 1, true);
    else if (e.key === "Home") select(0, true);
    else if (e.key === "End") select(total - 1, true);
    else return;
    e.preventDefault();
  };

  return (
    <section className="bg-surface py-20 lg:pt-[118px] lg:pb-28">
      <Container>
        <Reveal className="flex items-end justify-between gap-8">
          <SectionHeading
            eyebrow="The Cube Partner way"
            title="The questions that move us forward."
            intro="A closer look at how we help independent professionals thrive."
            titleClassName="max-w-[640px]"
          />
          <span className="hidden pb-1 text-[13px] text-muted sm:block">01 — {pad(total)}</span>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div
            role="tablist"
            aria-label="The Cube Partner way"
            onKeyDown={onKeyDown}
            className="grid grid-cols-3 border-b border-line md:grid-cols-6"
          >
            {questions.map((q, i) => {
              const selected = i === active;
              return (
                <button
                  key={q.tab}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  id={`question-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="question-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(i)}
                  className={cn(
                    "relative flex h-[74px] items-center justify-center border-r border-line transition-colors duration-300 last:border-r-0",
                    selected ? "bg-page text-brand" : "text-ink/60 hover:bg-page/60 hover:text-ink",
                  )}
                >
                  <span className="absolute top-5 left-[22px] text-[10px] text-current/70">{pad(i + 1)}</span>
                  <span className="font-display text-[22px] font-medium">{q.tab}</span>
                  {selected && (
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="absolute top-1/2 right-[22px] size-3.5 -translate-y-1/2" />
                  )}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-[3px] origin-left bg-brand transition-transform duration-500 ease-out-expo",
                      selected ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div
            id="question-panel"
            role="tabpanel"
            aria-labelledby={`question-tab-${active}`}
            className="grid lg:grid-cols-[864px_1fr]"
          >
            <div key={`body-${active}`} className="animate-panel-in bg-page px-6 py-12 sm:px-[72px] sm:py-16">
              <Eyebrow>
                {pad(active + 1)} / {current.label}
              </Eyebrow>
              <h3 className="mt-6 max-w-[520px] text-[3.5rem] leading-[1.1] font-medium text-ink max-lg:text-[clamp(2rem,6vw,3.5rem)]">
                {current.title}
              </h3>
              <p className="mt-6 max-w-[510px] text-[15px] leading-[26px] text-muted">{current.text}</p>
              <TextLink href={current.link.href} className="mt-12">
                {current.link.label}
              </TextLink>
            </div>

            <div className="flex flex-col bg-lilac px-6 py-10 sm:px-9">
              <Icon key={`icon-${active}`} aria-hidden="true" strokeWidth={1.5} className="animate-panel-in size-9 text-brand" />
              <p className="mt-auto pt-14 font-sans text-[10px] font-bold tracking-[0.12em] text-brand uppercase">
                The big picture
              </p>
              <ul key={`points-${active}`} className="animate-panel-in mt-5">
                {current.points.map((point) => (
                  <li key={point} className="flex items-center gap-4 border-b border-brand/15 py-[11px]">
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-3.5 shrink-0 text-brand" />
                    <span className="font-display text-[15px] text-ink">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center justify-between border-t border-brand/15 pt-4">
                <button
                  type="button"
                  aria-label="Previous question"
                  onClick={() => select(active - 1)}
                  className="flex size-9 items-center justify-center rounded-full border border-brand/30 text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
                >
                  <ChevronLeft aria-hidden="true" strokeWidth={1.75} className="size-4" />
                </button>
                <span className="text-xs text-brand" aria-live="polite">
                  {pad(active + 1)} / {pad(total)}
                </span>
                <button
                  type="button"
                  aria-label="Next question"
                  onClick={() => select(active + 1)}
                  className="flex size-9 items-center justify-center rounded-full border border-brand/30 text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
                >
                  <ChevronRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
