import {
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Benefit = { title: string; text: string; icon: LucideIcon };
export type Criterion = { title: string; text: string; icon: LucideIcon };
export type Step = { title: string; text: string };
export type FaqItem = { question: string; answer: string };

// "More than a network." cards. The design shows the same three on both schemes.
export const benefits: Benefit[] = [
  {
    title: "A scalable practice",
    text: "Stay ahead with regular training and the resources to keep your practice moving forward.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Your own clientele",
    text: "Enjoy a consistent flow of qualified leads, so you can focus on delivering value.",
    icon: Users,
  },
  {
    title: "Support that stays",
    text: "Expert guidance and responsive help whenever you need it.",
    icon: Handshake,
  },
];

export const partnerCriteria: Criterion[] = [
  {
    title: "Qualifications",
    text: "A recognised accounting qualification such as ACA, ACCA, CIMA or equivalent.",
    icon: GraduationCap,
  },
  { title: "Experience", text: "Professional accounting or financial consultancy experience.", icon: BriefcaseBusiness },
  {
    title: "Professional standards",
    text: "A commitment to ethical and regulatory standards in accounting practice.",
    icon: ShieldCheck,
  },
  { title: "Client base", text: "An existing portfolio of clients is an advantage, but not essential.", icon: Users },
  {
    title: "Commitment",
    text: "A willingness to collaborate and contribute to the network’s success.",
    icon: Handshake,
  },
  { title: "Progress", text: "A drive to grow, supported by coaching and ongoing development.", icon: Target },
];

export const introducerCriteria: Criterion[] = [
  {
    title: "Interest in accounting",
    text: "A genuine enthusiasm for building a career in accounting or financial services.",
    icon: Lightbulb,
  },
  {
    title: "Education",
    text: "A basic educational background in finance or accounting is helpful, but not essential.",
    icon: GraduationCap,
  },
  {
    title: "Networking skills",
    text: "The ability to identify and introduce potential clients or opportunities.",
    icon: Network,
  },
  { title: "Commitment to learning", text: "Openness to training and development opportunities.", icon: BookOpen },
  {
    title: "Professionalism",
    text: "Strong interpersonal skills and a commitment to the firm’s reputation.",
    icon: ShieldCheck,
  },
  {
    title: "Progress",
    text: "A drive to develop your skills through coaching and practical experience.",
    icon: Target,
  },
];

// "Your next chapter starts here." The design uses the same five steps on both schemes.
export const journey: Step[] = [
  { title: "Complete chartered exams", text: "Build the professional foundation for what comes next." },
  { title: "Gain experience", text: "Complete two years of post-qualification experience." },
  { title: "Apply to join", text: "Take the first step towards joining the team." },
  { title: "Initial assessment", text: "We’ll explore whether the programme is right for you." },
  { title: "Partner meeting", text: "Meet the partners and finalise your agreement." },
];

// Only the first answer is written in the design. The other three are drafts to confirm.
export const faqs: FaqItem[] = [
  {
    question: "What is the difference between the two schemes?",
    answer:
      "The Partner scheme is designed for experienced accounting professionals ready to grow their practice. The Introducer scheme offers a starting point for people interested in building connections and developing in the profession.",
  },
  {
    question: "Do I need an existing client base?",
    answer:
      "No. An existing portfolio is an advantage, but it isn’t essential. Partners receive a steady flow of qualified leads, and introducers build their network with our support.",
  },
  {
    question: "What support will I receive?",
    answer:
      "Regular training, shared resources and expertise, practical business support and a team that’s on hand whenever you need guidance.",
  },
  {
    question: "How do I get started?",
    answer:
      "Get in touch for an informal conversation. We’ll talk through your goals, explain how each scheme works and help you decide on the right next step.",
  },
];
