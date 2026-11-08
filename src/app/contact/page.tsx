import { Section } from '@/components/section';
import { QuoteForm } from '@/components/quote-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Section kicker="Contact / Quote" title="Create an enquiry draft">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Let’s plan your keepsake</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Fill in the form and you’ll see a client-side success message. This demo stores your payload in local state only—no backend connected.
            </p>

            <div className="mt-6 rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6">
              <h4 className="text-sm font-semibold text-neutral-900">What happens next?</h4>
              <ol className="mt-3 space-y-3 text-sm text-neutral-600">
                {[
                  'Submit the form to generate your enquiry summary.',
                  'Copy the details you need.',
                  'Replace placeholders with your own contact workflow later.',
                ].map((x, idx) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    {x}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {Array.from({ length: 2 }).map((_, idx) => (
                <div key={idx} className="rounded-3xl border border-amber-100 bg-white p-5">
                  <p className="text-sm font-semibold text-neutral-900">Add your testimonial here</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Placeholder card for future feedback.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
