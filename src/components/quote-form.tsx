'use client';

import { useMemo, useState } from 'react';

type QuoteType = 'photo' | 'gift' | 'wedding' | 'business' | 'special occasion';

type QuotePayload = {
  name: string;
  email: string;
  phone?: string;
  type: QuoteType;
  quantity: string;
  description: string;
  // Note: file data is not stored/persisted; we keep only a filename reference.
  uploadFileName?: string;
};

const initialPayload: QuotePayload = {
  name: '',
  email: '',
  phone: '',
  type: 'photo',
  quantity: '1',
  description: '',
  uploadFileName: '',
};

export function QuoteForm() {
  const [payload, setPayload] = useState<QuotePayload>(initialPayload);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim());
    const nameOk = payload.name.trim().length >= 2;
    const descOk = payload.description.trim().length >= 10;
    const qtyOk = Number(payload.quantity) > 0;
    return emailOk && nameOk && descOk && qtyOk;
  }, [payload]);

  function update<K extends keyof QuotePayload>(key: K, value: QuotePayload[K]) {
    setPayload((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm md:p-7">
      {submitted ? (
        <div className="space-y-3" role="status" aria-live="polite">
          <p className="text-lg font-semibold text-neutral-900">Thanks — your enquiry is ready.</p>
          <p className="text-sm text-neutral-600">
            We saved your details in this page (no backend connected). You can copy the information below if needed.
          </p>
          <div className="rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
            <p><span className="font-semibold">Name:</span> {payload.name}</p>
            <p><span className="font-semibold">Email:</span> {payload.email}</p>
            {payload.phone ? <p><span className="font-semibold">Phone:</span> {payload.phone}</p> : null}
            <p><span className="font-semibold">Type:</span> {payload.type}</p>
            <p><span className="font-semibold">Quantity:</span> {payload.quantity}</p>
            {payload.uploadFileName ? (
              <p><span className="font-semibold">Upload:</span> {payload.uploadFileName}</p>
            ) : null}
            <p className="mt-2 whitespace-pre-wrap"><span className="font-semibold">Description:</span> {payload.description}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setPayload(initialPayload);
              setSubmitted(false);
            }}
            className="rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-neutral-900">Your name</span>
              <input
                className="w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
                value={payload.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="e.g. Jordan Smith"
                autoComplete="name"
                required
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-neutral-900">Email</span>
              <input
                className="w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
                value={payload.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                type="email"
                required
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-neutral-900">Phone (optional)</span>
              <input
                className="w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
                value={payload.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="e.g. 04xx xxx xxx"
                autoComplete="tel"
                type="tel"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-neutral-900">Enquiry type</span>
              <select
                className="w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
                value={payload.type}
                onChange={(e) => update('type', e.target.value as QuoteType)}
              >
                <option value="photo">Photo</option>
                <option value="gift">Gift</option>
                <option value="wedding">Wedding</option>
                <option value="business">Business</option>
                <option value="special occasion">Special occasion</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-neutral-900">Quantity</span>
              <input
                className="w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
                value={payload.quantity}
                onChange={(e) => update('quantity', e.target.value)}
                inputMode="numeric"
                type="number"
                min={1}
                required
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-neutral-900">Upload (optional)</span>
              <input
                className="w-full cursor-pointer rounded-xl border border-amber-100 bg-white px-3 py-3 text-sm outline-none file:mr-4 file:rounded-full file:border-0 file:bg-neutral-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-neutral-800 focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  update('uploadFileName', file?.name ?? '');
                }}
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="block text-sm font-semibold text-neutral-900">Description</span>
            <textarea
              className="min-h-32 w-full rounded-xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200"
              value={payload.description}
              onChange={(e) => update('description', e.target.value)}
              placeholder="Tell us what you’re making (dates, sizes, style, any important details)."
              required
            />
          </label>

          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p className="text-xs text-neutral-600">
              By submitting, you’re creating an on-page draft only — no data is sent to a server.
            </p>
            <button
              type="submit"
              disabled={!isValid}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Create enquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
