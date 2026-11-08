export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-amber-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-neutral-900">Memories Made to Last</p>
            <p className="mt-2 text-sm text-neutral-600">
              Warm, professional craft for life’s biggest moments.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-neutral-900">Contact</p>
            <p className="text-sm text-neutral-600">Email: (add your email)</p>
            <p className="text-sm text-neutral-600">Phone: (add your phone)</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-neutral-900">Quick links</p>
            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <a className="hover:text-neutral-900" href="/products">Our Products</a>
              <a className="hover:text-neutral-900" href="/how-it-works">How It Works</a>
              <a className="hover:text-neutral-900" href="/about">About</a>
              <a className="hover:text-neutral-900" href="/contact">Contact / Quote</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-amber-50 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© Memories Made to Last. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-700" href="/privacy">Privacy</a>
            <a className="hover:text-neutral-700" href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
