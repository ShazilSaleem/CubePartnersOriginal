import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

/** Floating chat action from the design: 56px purple square, bottom right, opens WhatsApp. */
export function ChatButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex size-14 items-center justify-center bg-brand text-white shadow-brand transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
    >
      <MessageCircle aria-hidden="true" strokeWidth={1.75} className="size-6" />
    </a>
  );
}
