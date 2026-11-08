import {
  CalendarClock,
  Compass,
  Heart,
  MapPin,
  Network,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Question = {
  tab: string;
  label: string;
  title: string;
  text: string;
  link: { label: string; href: string };
  icon: LucideIcon;
  points: string[];
};

// Home "The questions that move us forward." The design shows the "What" tab;
// copy for the other five tabs follows the same pattern and should be confirmed.
export const questions: Question[] = [
  {
    tab: "What",
    label: "What we do",
    title: "A better way to build your practice.",
    text: "We bring independent accountants together with the support, resources and opportunities they need to build a practice that feels entirely their own.",
    link: { label: "More about us", href: "/about" },
    icon: Network,
    points: ["Practical business support", "Shared expertise and resources", "Space to grow on your terms"],
  },
  {
    tab: "When",
    label: "When to join",
    title: "Whenever you’re ready for more.",
    text: "Whether you’re newly qualified, years into running your own clients or simply curious about the profession, there’s a right moment to start the conversation.",
    link: { label: "See the journey", href: "/partner-scheme" },
    icon: CalendarClock,
    points: ["Newly qualified professionals", "Established independent practices", "Future connectors"],
  },
  {
    tab: "Where",
    label: "Where we are",
    title: "Rooted in Manchester. Open everywhere.",
    text: "Our home is Parkway Two in Manchester, but the network reaches wherever our partners and introducers work, in person and online.",
    link: { label: "Come and meet us", href: "/contact" },
    icon: MapPin,
    points: ["A Manchester base", "Remote-friendly by design", "Partners across the UK"],
  },
  {
    tab: "Why",
    label: "Why it matters",
    title: "Independence shouldn’t mean isolation.",
    text: "Running your own practice is rewarding, but it can be lonely. We exist so talented accountants can grow without carrying everything on their own.",
    link: { label: "Our story", href: "/about" },
    icon: Heart,
    points: ["Confidence to take the next step", "People to share the load", "Momentum that lasts"],
  },
  {
    tab: "Who",
    label: "Who it’s for",
    title: "Accountants and natural connectors.",
    text: "Two paths, one shared ambition. Experienced accountants join as partners; ambitious people who love bringing others together join as introducers.",
    link: { label: "Explore the schemes", href: "/partner-scheme" },
    icon: Users,
    points: ["Chartered and certified accountants", "Finance professionals", "Ambitious introducers"],
  },
  {
    tab: "How",
    label: "How it works",
    title: "A clear, human path in.",
    text: "Start with a conversation. We’ll explore whether the programme is right for you, introduce you to the partners and agree a plan that fits your goals.",
    link: { label: "Start a conversation", href: "/contact" },
    icon: Compass,
    points: ["An informal first conversation", "An initial assessment", "A partner meeting and agreement"],
  },
];
