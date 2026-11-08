import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { networkSites, schemeLinks, site } from "@/lib/site";

const linkClass = "text-[13px] leading-5 text-muted uppercase transition-colors duration-300 hover:text-brand";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold text-ink uppercase">{title}</h2>
      <ul className="mt-7 flex flex-col gap-[9px]">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-page">
      <Container className="pt-20 pb-10 lg:pt-[88px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[360px_200px_200px_241px_1fr] lg:gap-0">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Cube Partner home" className="inline-block">
              <Image src="/images/cube-partner-purple.svg" alt="Cube Partner" width={133} height={30} className="h-[30px] w-[133px]" />
            </Link>
            <p className="mt-7 max-w-[230px] text-sm leading-[22px] text-muted">
              A place for independent accountants to connect, grow and go further together.
            </p>
          </div>

          <Column title="Explore">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Schemes">
            {schemeLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Our Network">
            {networkSites.map((item) => (
              <li key={item.name}>
                <a href={item.href} className={linkClass}>
                  {item.name}
                </a>
              </li>
            ))}
          </Column>

          <Column title="Get in touch">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </li>
            <li className="text-[13px] leading-5 text-muted uppercase">{site.footerAddress}</li>
          </Column>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-7 text-xs leading-5 sm:flex-row sm:items-start sm:justify-between lg:mt-24">
          <p className="pt-2 text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-faint sm:max-w-[380px] lg:pr-0">
            {site.legalName} is a company registered in England and Wales.
            <br />
            Company number: {site.companyNumber}
          </p>
        </div>
      </Container>
    </footer>
  );
}
