import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { site } from "@/lib/site";

const details: Array<{ label: string; value: React.ReactNode; href: string; icon: LucideIcon; external?: boolean }> = [
  { label: "Email us", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Call us", value: site.phone, href: site.phoneHref, icon: Phone },
  { label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsapp, icon: MessageCircle, external: true },
  {
    label: "Find us",
    value: (
      <>
        {site.addressLines[0]}
        <br />
        {site.addressLines[1]}
      </>
    ),
    href: site.mapsUrl,
    icon: MapPin,
    external: true,
  },
];

/** "A conversation is a great place to start." Contact methods list. */
export function ContactDetails() {
  return (
    <Reveal>
      <SectionHeading
        eyebrow="Say hello"
        title="A conversation is a great place to start."
        intro="Reach out in whatever way works for you. Our team is here to help."
      />
      <ul className="mt-12 border-t border-line">
        {details.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="border-b border-line">
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-start gap-[22px] py-6"
              >
                <Icon aria-hidden="true" strokeWidth={1.5} className="mt-[13px] size-5 shrink-0 text-brand" />
                <span className="flex flex-1 flex-col gap-1.5">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    {item.label}
                  </span>
                  <span className="font-display text-[17px] leading-6 font-medium text-ink transition-colors duration-300 group-hover:text-brand">
                    {item.value}
                  </span>
                </span>
                {item.label !== "Find us" && (
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="mt-2.5 size-4 shrink-0 text-ink transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
