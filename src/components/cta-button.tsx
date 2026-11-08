import Link from 'next/link';

export function CTAButton({
  href,
  label,
  variant = 'primary',
}: {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300';

  const classes =
    variant === 'secondary'
      ? `${base} border border-amber-200 bg-white text-neutral-900 hover:bg-amber-50`
      : `${base} bg-neutral-900 text-white hover:bg-neutral-800`;

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
