import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { ChatButton } from "@/components/layout/ChatButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

// Display face: headings, nav, buttons and labels.
const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-outfit",
  display: "swap",
});

// Body face: paragraphs, lists and form fields.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cube Partner | Independent by nature. Stronger together.",
    template: "%s | Cube Partner",
  },
  description:
    "More than a network for accountants. A place to grow your practice, find your people and make the next move yours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        {/* Keep animated content visible when JavaScript is unavailable. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
