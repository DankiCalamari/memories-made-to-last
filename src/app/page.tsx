import Image from 'next/image';
import Link from 'next/link';
import { CTAButton } from '@/components/cta-button';
import { PlaceholderImage } from '@/components/placeholder-image';
import { Section } from '@/components/section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-white px-4 py-2 text-sm font-semibold text-amber-800">
              <span aria-hidden className="h-2 w-2 rounded-full bg-amber-500" />
              Handmade keepsakes & photo work
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Turn moments into memories you’ll keep forever.
            </h1>
            <p className="mt-4 text-base text-neutral-600 md:text-lg">
              Memories Made to Last helps you create warm, professional keepsakes—designed for everyday love and special occasions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/contact" label="Request a quote" />
              <CTAButton href="/products" label="Explore our products" variant="secondary" />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: 'Quality-first', v: 'Careful details' },
                { k: 'Personal touches', v: 'Made around you' },
                { k: 'Made to last', v: 'Built for keeps' },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-amber-100 bg-white p-4">
                  <p className="text-sm font-semibold text-neutral-900">{x.k}</p>
                  <p className="mt-1 text-sm text-neutral-600">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-r from-amber-200/50 via-rose-200/40 to-orange-200/50 blur-2xl" />
            <PlaceholderImage src="/images/hero.svg" alt="Warm keepsake photo placeholder" className="h-[420px] w-full" />
            <p className="mt-3 text-xs text-neutral-500">
              Replace the image in <span className="font-medium">/public/images/hero.svg</span> with your own photo.
            </p>
          </div>
        </div>
      </section>

      <Section kicker="Featured" title="A thoughtful selection for life’s moments">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-3xl border border-amber-100 bg-white p-5">
              <PlaceholderImage src={`/images/gallery-${n}.svg`} alt={`Product gallery image ${n}`} className="h-44 w-full" />
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                Curated keepsake #{n}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Add your product details here—what it is, who it’s for, and what makes it special.
              </p>
              <Link href="/products" className="mt-4 inline-flex text-sm font-semibold text-neutral-900 hover:text-neutral-700">
                View products <span aria-hidden className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Testimonials" title="Showcase client moments">
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="rounded-3xl border border-amber-100 bg-white p-6">
              <div className="flex items-center gap-2">
                <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                <p className="text-sm font-semibold text-neutral-900">Add your testimonial here</p>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Use this space to share a short note about your experience.
              </p>
              <p className="mt-4 text-xs text-neutral-500">— Client name (optional)</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
