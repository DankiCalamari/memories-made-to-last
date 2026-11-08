import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { Section } from '@/components/section';

const steps = [
  {
    n: '01',
    title: 'Tell us what you’re making',
    desc: 'Use the Contact / Quote form to share your details, dates, and the style you’re after.',
  },
  {
    n: '02',
    title: 'We’ll shape the enquiry',
    desc: 'We’ll review your request and suggest the best next steps for your project.',
  },
  {
    n: '03',
    title: 'Receive a clear plan',
    desc: 'You’ll get a summary of your on-page enquiry draft (no backend).',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <Section kicker="How It Works" title="A simple, friendly process">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-amber-100 bg-white p-6">
              <p className="text-sm font-bold tracking-widest text-amber-800">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-rose-50 p-6 md:p-8">
          <h3 className="text-xl font-bold text-neutral-900">Ready to begin?</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Submit your enquiry in a few minutes and keep everything on this page.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="/contact" label="Create an enquiry" />
            <Link
              href="/products"
              className="inline-flex rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Browse products
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
