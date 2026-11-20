interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  lede?: string;
}

/** Shared section header: numbered kicker, serif title, optional lede. */
export default function SectionHeading({ index, kicker, title, lede }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/40" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {kicker}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground tracking-tight">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-2xl">{lede}</p>
      )}
    </div>
  );
}
