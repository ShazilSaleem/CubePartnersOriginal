/** Eight-spoke asterisk used as a decorative mark (home intro, scheme cards). */
export function Asterisk({ className, strokeWidth = 4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <path d="M50 2v96M2 50h96M16 16l68 68M84 16 16 84" />
    </svg>
  );
}
