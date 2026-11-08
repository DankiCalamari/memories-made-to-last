import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { PlaceholderImage } from '@/components/placeholder-image';
import { Section } from '@/components/section';

const products = [
  {
    title: 'Photo gifts',
    desc: 'Keepsakes built around your photos and the story behind them.',
    img: '/images/gallery-1.svg',
    href: '/contact',
  },
  {
    title: 'Wedding keepsakes',
    desc: 'Warm details designed to preserve the day you’ll always remember.',
    img: '/images/gallery-2.svg',
    href: '/contact',
  },
  {
    title: 'Business gifting',
    desc: 'Thoughtful presentation for clients, teams, and special milestones.',
    img: '/images/gallery-3.svg',
    href: '/contact',
  },
  {
    title: 'Special occasions',
    desc: 'Tailored designs for birthdays, anniversaries, and more.',
    img: '/images/gallery-4.svg',
    href: '/contact',
  },
  {
    title: 'Curated keepsakes',
    desc: 'Handpicked styles that make meaningful moments feel personal.',
    img: '/images/gallery-5.svg',
    href: '/contact',
  },
  {
    title: 'Custom requests',
    desc: 'Tell us what you have in mind—we’ll help shape the best outcome.',
    img: '/images/gallery-6.svg',
    href: '/contact',
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <Section kicker="Our Products" title="Photo work and keepsakes">
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl text-sm text-neutral-600">
            Browse categories below. For exact options and a custom enquiry, use the Contact / Quote form.
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="rounded-3xl border border-amber-100 bg-white p-5">
                <PlaceholderImage src={p.img} alt={p.title} className="h-44 w-full" />
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <Link href={p.href} className="mt-4 inline-flex text-sm font-semibold text-neutral-900 hover:text-neutral-700">
                  Enquire <span aria-hidden className="ml-1">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 md:p-8">
            <h3 className="text-xl font-bold text-neutral-900">Need something specific?</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Share your details and we’ll help you plan an enquiry. No checkout, just a simple on-page quote request.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" label="Start an enquiry" />
              <CTAButton href="/how-it-works" label="How it works" variant="secondary" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="A quick gallery preview">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <PlaceholderImage key={n} src={`/images/gallery-${n}.svg`} alt={`Gallery preview ${n}`} className="h-52" />
          ))}
        </div>
      </Section>
    </div>
  );
}
