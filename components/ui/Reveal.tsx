"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  as?: "div" | "li" | "article" | "figure";
  /** Extra transition delay in ms, used to stagger siblings. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Fades and lifts its content into place the first time it scrolls into view.
 * The .reveal styles live in globals.css; a <noscript> rule in the root layout
 * keeps content visible when JavaScript is unavailable.
 */
export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", visible && "is-visible", className),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
