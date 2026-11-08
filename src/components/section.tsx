import { ReactNode } from 'react';

export function Section({
  kicker,
  title,
  children,
  id,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-3xl">
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            {kicker}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
