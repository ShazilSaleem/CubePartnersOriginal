import { cn } from "@/lib/cn";

/** Page frame: 1440px max, 80px gutters on desktop (content 80-1360 as in the design). */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8 lg:px-20", className)}>{children}</div>
  );
}
