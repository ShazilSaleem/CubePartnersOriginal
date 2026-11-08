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
import { partnerCriteria } from "@/lib/schemes";

export const metadata: Metadata = {
  title: "Partner scheme",
  description:
    "A partnership for experienced accountants who want the freedom to build, backed by a network that believes in their potential.",
};

export default function PartnerSchemePage() {
  return (
    <>
      <PageHero
        eyebrow="The Cube Partner network"
        title="Grow your practice."
        highlight="On your terms."
        lead="A partnership for experienced accountants who want the freedom to build, backed by a network that believes in their potential."
        image="/images/hero-meeting.jpg"
        imageAlt="Two accountants in conversation at a meeting table"
        caption="Partner scheme — Cube Partner"
        actions={
          <Button href="/contact" variant="white">
            Let&apos;s talk
          </Button>
        }
      />
      <Statement
        eyebrow="For experienced accountants"
        title={
          <>
            Independence feels better <span className="text-brand">together.</span>
          </>
        }
        statement="Build the practice you’ve imagined without doing it all alone. The Partner scheme combines the flexibility of working independently with the reach, resources and encouragement of an established network."
      >
        <TextLink href="/introducer-scheme">Explore the Introducer scheme</TextLink>
      </Statement>
      <Benefits />
      <RightFit role="partner" criteria={partnerCriteria} />
      <Journey />
      <Faq />
      <CtaBand title="Make room for your ambition." />
    </>
  );
}
