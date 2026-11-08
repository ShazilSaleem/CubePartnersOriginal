"use client";

import { Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/cn";
import { faqs } from "@/lib/schemes";

/** "A few things you might be wondering." Accordion with the first answer open. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-[112px]">
      <Container className="grid gap-12 lg:grid-cols-[596px_1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="A few things you might be wondering."
            intro="Still have a question? We’re always happy to talk."
            titleClassName="max-w-[440px]"
          />
          <TextLink href="/contact" className="mt-9">
            Get in touch
          </TextLink>
        </Reveal>

        <Reveal delay={150} className="border-t border-line">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const Icon = open ? X : Sparkles;
            return (
              <div key={item.question} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 py-[19px] text-left"
                  >
                    <span className="font-display text-lg leading-6 font-medium text-ink transition-colors duration-300 group-hover:text-brand">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex size-[33px] shrink-0 items-center justify-center border border-line transition-colors duration-300",
                        "group-hover:border-brand group-hover:text-brand",
                      )}
                    >
                      <Icon aria-hidden="true" strokeWidth={1.5} className="size-4" />
                    </span>
                  </button>
                </h3>
                {/* 0fr -> 1fr grid rows animate the panel height without measuring it */}
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!open}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[510px] pb-7 text-sm leading-6 text-muted">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
