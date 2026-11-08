import { Section } from '@/components/section';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Section kicker="About" title="Warm craft, built for keeps">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Our approach</h3>
            <p className="mt-3 text-sm text-neutral-600">
              We create thoughtful keepsakes and photo work with a focus on quality, clarity, and personal details.
              Whether it’s a gift, wedding moment, or business milestone, we aim for a result that feels special from day one.
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              This website is designed to be simple: explore products, learn how it works, and submit an enquiry draft.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { t: 'Personal', d: 'Made around your story' },
                { t: 'Professional', d: 'Clear, responsive guidance' },
                { t: 'Thoughtful', d: 'Warm presentation & details' },
                { t: 'Reliable', d: 'Built to last in your home' },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-amber-100 bg-white p-4">
                  <p className="text-sm font-semibold text-neutral-900">{x.t}</p>
                  <p className="mt-1 text-sm text-neutral-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-amber-100 bg-white p-5">
              <h3 className="text-lg font-semibold text-neutral-900">What to include in your enquiry</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                {[
                  'The occasion (or event) and dates',
                  'The style you’re drawn to',
                  'Any sizes, quantities, or layout notes',
                  'Examples or links if you have them',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-500">
                Tip: you can use the upload field to select a file name (no backend storage).
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
