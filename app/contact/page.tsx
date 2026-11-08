import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions, ideas or ready for a conversation? We’d love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s make"
        highlight="something happen."
        lead="Questions, ideas or ready for a conversation? We’d love to hear from you."
        image="/images/parkway-two.jpg"
        imageAlt="The Parkway Two office building in Manchester"
      />
      <section className="pt-20 pb-24 lg:pt-[118px] lg:pb-[150px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[638px_1fr] lg:gap-[100px]">
            <ContactDetails />
            <ContactForm />
          </div>
          <Reveal className="mt-20">
            <OfficeMap />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
