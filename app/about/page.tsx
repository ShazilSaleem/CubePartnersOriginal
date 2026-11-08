import type { Metadata } from "next";
import { Values } from "@/components/about/Values";
import { CtaBand } from "@/components/sections/CtaBand";
import { Network } from "@/components/sections/Network";
import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "About",
  description: "A different kind of network, built around the people who make it matter.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="People first."
        highlight="Possibilities always."
        lead="A different kind of network, built around the people who make it matter."
        image="/images/hero-meeting.jpg"
        imageAlt="Two accountants in conversation at a meeting table"
        actions={
          <TextLink href="/contact" tone="light" icon="up-right">
            Come meet us
          </TextLink>
        }
      />
      <Statement
        eyebrow="What drives us"
        title="We believe in what people can build together."
        statement="Cube Partner was created around a simple idea: talented accountants should be able to grow independently without feeling like they’re on their own."
      >
        <p className="max-w-[585px] text-[15px] leading-7 text-muted">
          We connect ambitious people to a network of knowledge, practical support and genuine relationships. Because
          the most meaningful growth happens when we share what we know and look out for one another.
        </p>
      </Statement>
      <Values />
      <Network />
      <CtaBand title="Ready to build something bigger?" />
    </>
  );
}
