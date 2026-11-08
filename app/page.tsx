import { ArrowDown } from "lucide-react";
import { BuiltFor } from "@/components/home/BuiltFor";
import { Paths } from "@/components/home/Paths";
import { People } from "@/components/home/People";
import { Questions } from "@/components/home/Questions";
import { CtaBand } from "@/components/sections/CtaBand";
import { Network } from "@/components/sections/Network";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <PageHero
        size="home"
        eyebrow="A different kind of partnership"
        title="Independent by nature."
        highlight="Stronger together."
        lead="More than a network for accountants. A place to grow your practice, find your people and make the next move yours."
        image="/images/hero-meeting.jpg"
        imageAlt="Two accountants in conversation at a meeting table"
        actions={
          <>
            <Button href="#schemes" variant="white">
              Explore the schemes
            </Button>
            <Button href="/about" variant="ghost">
              Get to know us
            </Button>
          </>
        }
        footer={
          <div className="absolute inset-x-0 bottom-9 hidden items-center justify-between px-5 font-sans text-[10px] font-semibold tracking-[0.14em] text-white/75 uppercase sm:flex sm:px-8 lg:px-20">
            <span>01 / Cube Partner</span>
            <a href="#built-for" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              Scroll to explore
              <ArrowDown aria-hidden="true" strokeWidth={1.75} className="size-3 animate-bounce" />
            </a>
          </div>
        }
      />
      <BuiltFor />
      <Questions />
      <Paths />
      <People />
      <Network />
      <CtaBand title="Ready to build something bigger?" />
    </>
  );
}
