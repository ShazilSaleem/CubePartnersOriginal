import type { Metadata } from "next";
import { Benefits } from "@/components/schemes/Benefits";
import { Faq } from "@/components/schemes/Faq";
import { Journey } from "@/components/schemes/Journey";
import { RightFit } from "@/components/schemes/RightFit";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { introducerCriteria } from "@/lib/schemes";

export const metadata: Metadata = {
  title: "Introducer scheme",
  description:
    "A starting point for ambitious people who love connecting others and want to grow in the world of accounting.",
};

export default function IntroducerSchemePage() {
  return (
    <>
      <PageHero
        eyebrow="The Cube Partner network"
        title="Great connections."
        highlight="New possibilities."
        lead="A starting point for ambitious people who love connecting others and want to grow in the world of accounting."
        image="/images/hero-meeting.jpg"
        imageAlt="Two accountants in conversation at a meeting table"
        caption="Introducer scheme — Cube Partner"
        actions={
          <Button href="/contact" variant="white">
            Let&apos;s talk
          </Button>
        }
      />
      <Statement
        eyebrow="For future connectors"
        title={
          <>
            Every journey starts <span className="text-brand">somewhere.</span>
          </>
        }
        statement="You don’t need to have all the answers to make a meaningful start. The Introducer scheme gives you a way to build relationships, learn from experienced professionals and explore new opportunities."
      >
        <TextLink href="/partner-scheme">Explore the Partner scheme</TextLink>
      </Statement>
      <Benefits />
      <RightFit role="introducer" criteria={introducerCriteria} />
      <Journey />
      <Faq />
      <CtaBand title="Your connections can take you further." />
    </>
  );
}
