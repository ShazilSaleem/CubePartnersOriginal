# Cube Partner website

Next.js 15 (App Router) build of the "Updated Cube Partners" Figma design for Cube Partner, the network for
independent accountants. Sister site to Cube Accountants.

## Requirements

- Node 20 or newer (Tailwind v4's native engine needs it). An `.nvmrc` is included.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Stack

- Next.js 15.5, React 19, TypeScript
- Tailwind CSS v4, configured in CSS. All design tokens live in `app/globals.css` under `@theme`
  (colours, Outfit and DM Sans, the type scale, motion). There is no `tailwind.config.js`.
- Fonts load through `next/font/google` in `app/layout.tsx`.
- Icons from `lucide-react`. The contact map uses Leaflet with OpenStreetMap tiles (no API key).

## Structure

```
app/                   routes: / (Home), /partner-scheme, /introducer-scheme, /about, /contact
components/layout/     Header (Schemes and Our Network dropdowns, mobile menu), Footer, ChatButton
components/ui/         Container, Button, TextLink, Eyebrow, Asterisk, Reveal
components/sections/   blocks shared across pages: PageHero, Statement, SectionHeading, Network, CtaBand
components/home/       BuiltFor, Questions (six tabs), Paths (scheme cards), People
components/schemes/    Benefits, RightFit, Journey, Faq (shared by both scheme pages)
components/about/      Values (C-U-B-E)
components/contact/    ContactDetails, ContactForm, OfficeMap
lib/                   site details, scheme content, home tab content, cn() helper
public/images/         photos and logos
```

## Motion

- Hero: staggered entrance of eyebrow, heading and lead, and a slow settle-in zoom on the photo.
- Scroll reveals via `components/ui/Reveal.tsx`, staggered across grids.
- Home tabs animate the underline and cross-fade the panel; arrow keys move between tabs.
- Cards lift on hover, the scheme card asterisks turn, the intro asterisk rotates slowly.
- `prefers-reduced-motion` turns all of it off, and a `<noscript>` rule keeps content visible without JavaScript.

## Design source

Figma file `c84CbYhomcsmAYSHWY6yNj`, node `1093:11401` ("Updated Cube Partners"). Built from the PNG export
of that node (kept locally in `figma-asset/`, not committed). Colours were sampled from the export. The design
is desktop-only (1440px); the responsive behaviour below that is an interpretation.

## Content to confirm

- `lib/questions.ts`: the design only shows the "What" tab. Copy for When, Where, Why, Who and How is drafted.
- `lib/schemes.ts`: only the first FAQ answer is in the design. The other three answers are drafted.
- `lib/site.ts`: the Cube Academy link is `#`, and the Cube Accountants link points to cubeaccountants.com.
  Swap in the live URLs. The office map coordinates are approximate for Parkway Two.
- The contact form opens the visitor's email app (as the design states). Wire it to an email service if a
  server-side form is preferred.
