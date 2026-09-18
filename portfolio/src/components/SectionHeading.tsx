export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}
