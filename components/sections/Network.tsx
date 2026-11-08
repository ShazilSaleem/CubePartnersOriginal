import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { networkSites } from "@/lib/site";

/** "Beyond partnership" band linking to the sister brands. Home and About. */
export function Network() {
  return (
    <section className="bg-white py-20 lg:py-[112px]">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-0">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond partnership"
            eyebrowTone="ink"
            large
            title={
              <>
                One network.
                <br />
                <span className="text-brand">More possibilities.</span>
              </>
            }
          />
          <p className="mt-6 max-w-[370px] text-sm leading-[25px] text-muted">
            Cube Partner is part of a wider ecosystem built to help professionals and businesses grow with
            confidence.
          </p>
        </Reveal>

        <ul className="flex flex-col gap-4 lg:pl-[45px]">
          {networkSites.map((item, i) => (
            <Reveal as="li" key={item.name} delay={120 + i * 100}>
              <a href={item.href} className="group flex items-center gap-[25px] py-3">
                <span className="flex h-[52px] w-[130px] shrink-0 items-center justify-center bg-page transition-shadow duration-300 group-hover:shadow-card">
                  <Image src={item.logo} alt="" width={97} height={22} className="h-[22px] w-[97px]" />
                </span>
                <span className="flex flex-1 flex-col gap-1">
                  <span className="font-display text-lg leading-[27px] font-medium text-ink transition-colors group-hover:text-brand">
                    {item.name}
                  </span>
                  <span className="text-xs leading-[21px] text-muted">{item.text}</span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-[22px] shrink-0 text-brand transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
