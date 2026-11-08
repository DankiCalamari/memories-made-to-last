import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Our Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact / Quote' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-200 via-rose-200 to-orange-200 ring-1 ring-amber-100" aria-hidden />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-neutral-900">Memories Made to Last</p>
            <p className="text-xs text-neutral-600">Handmade keepsakes & photo works</p>
          </div>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-neutral-700 hover:bg-amber-50 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
