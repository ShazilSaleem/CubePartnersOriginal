"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { networkSites, schemeLinks, type NavItem } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const navLink = "font-display text-nav uppercase transition-colors duration-300 hover:text-brand";

/** Hover/click dropdown. Closes on outside click, Escape or navigation. */
function Dropdown({
  id,
  label,
  items,
  active,
  align = "left",
}: {
  id: string;
  label: string;
  items: NavItem[];
  active?: boolean;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn(navLink, "flex items-center gap-1.5 py-3", active ? "text-brand" : "text-ink/75")}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.75}
          className={cn("size-4 transition-transform duration-300 ease-out-expo", open && "rotate-180")}
        />
      </button>
      {open && (
        <ul
          id={id}
          className={cn(
            "animate-menu-in absolute top-full min-w-56 border border-line bg-page py-2 shadow-card",
            align === "right" ? "right-0" : "-left-5",
          )}
        >
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 font-display text-nav uppercase text-ink/75 transition-colors hover:bg-surface hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const schemesActive = schemeLinks.some((s) => isActive(s.href));
  const networkItems = networkSites.map((s) => ({ label: s.name, href: s.href }));

  const primary: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/95 backdrop-blur-md">
      <Container className="flex h-header items-center justify-between">
        <Link href="/" aria-label="Cube Partner home" className="shrink-0">
          <Image
            src="/images/cube-partner-purple.svg"
            alt="Cube Partner"
            width={141}
            height={32}
            priority
            className="h-8 w-[141px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={cn(navLink, isActive("/") ? "text-brand" : "text-ink/75")}
          >
            Home
          </Link>
          <Dropdown id="schemes-menu" label="Schemes" items={schemeLinks} active={schemesActive} />
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(navLink, isActive(item.href) ? "text-brand" : "text-ink/75")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Dropdown id="network-menu" label="Our Network" items={networkItems} align="right" />
          <Link
            href="/contact"
            className="group inline-flex h-[41px] items-center gap-2 bg-brand px-6 font-display text-nav text-white uppercase transition-colors duration-300 hover:bg-brand-dark"
          >
            Let&apos;s talk
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-11 items-center justify-center text-ink lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={cn("h-0.5 w-full bg-current transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-full bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("h-0.5 w-full bg-current transition-transform", open && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="animate-menu-in max-h-[calc(100dvh-77px)] overflow-y-auto border-t border-line bg-page lg:hidden">
          <Container className="flex flex-col py-4">
            {[{ label: "Home", href: "/" }, ...schemeLinks, ...primary].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("py-3 font-display text-nav uppercase", isActive(item.href) ? "text-brand" : "text-ink/75")}
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-4 pb-1 font-display text-nav text-ink/40 uppercase">Our Network</p>
            {networkItems.map((item) => (
              <Link key={item.label} href={item.href} className="py-3 font-display text-nav text-ink/75 uppercase">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex h-[41px] items-center gap-2 self-start bg-brand px-6 font-display text-nav text-white uppercase"
            >
              Let&apos;s talk
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
