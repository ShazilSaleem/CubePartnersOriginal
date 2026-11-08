"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const interests = ["The Partner scheme", "The Introducer scheme", "Something else"];

const fieldClass =
  "w-full border border-line bg-white px-4 text-sm text-ink placeholder:text-muted/70 transition-colors duration-300 focus:border-brand focus:outline-none";

type Errors = Partial<Record<"name" | "email" | "interest" | "message", string>>;

/**
 * "Tell us what's on your mind." As the design notes, submitting opens the
 * visitor's email app with the enquiry written out, so no backend is needed.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!interest) next.interest = "Please choose an option.";
    if (!message) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = `Enquiry: ${interest} (${name})`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const error = (key: keyof Errors) =>
    errors[key] && (
      <p id={`${key}-error`} className="mt-1.5 text-xs text-red-600">
        {errors[key]}
      </p>
    );
  const describedBy = (key: keyof Errors) => (errors[key] ? `${key}-error` : undefined);

  return (
    <Reveal delay={120} className="bg-surface px-6 py-12 sm:px-[46px] sm:py-14">
      <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-brand uppercase">
        Your next step starts here
      </p>
      <h2 className="mt-6 text-[2rem] leading-tight font-medium text-ink">Tell us what’s on your mind.</h2>

      <form noValidate onSubmit={onSubmit} className="mt-9 flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block text-[13px] font-semibold text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={cn(fieldClass, "mt-2.5 h-[45px]")}
          />
          {error("name")}
        </div>

        <div>
          <label htmlFor="email" className="block text-[13px] font-semibold text-ink">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={cn(fieldClass, "mt-2.5 h-[45px]")}
          />
          {error("email")}
        </div>

        <div>
          <label htmlFor="interest" className="block text-[13px] font-semibold text-ink">
            I’m interested in
          </label>
          <div className="relative mt-2.5">
            <select
              id="interest"
              name="interest"
              defaultValue=""
              aria-invalid={!!errors.interest}
              aria-describedby={describedBy("interest")}
              className={cn(fieldClass, "h-[47px] appearance-none pr-10")}
            >
              <option value="" disabled>
                Select an option
              </option>
              {interests.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              strokeWidth={1.75}
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
            />
          </div>
          {error("interest")}
        </div>

        <div>
          <label htmlFor="message" className="block text-[13px] font-semibold text-ink">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about yourself..."
            aria-invalid={!!errors.message}
            aria-describedby={describedBy("message")}
            className={cn(fieldClass, "mt-2.5 min-h-[95px] resize-y py-3.5")}
          />
          {error("message")}
        </div>

        <div className="pt-1">
          <Button type="submit" className="w-full">
            Let&apos;s talk
          </Button>
          <p className="mt-1.5 text-[11px] text-muted">This opens your email app to send your message.</p>
        </div>
      </form>
    </Reveal>
  );
}
