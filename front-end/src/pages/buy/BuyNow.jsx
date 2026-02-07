import Nav from "../../components/nav/Navbar";

export default function BuyNow() {
  const currencySymbol = "\u20B9";

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="mb-8">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-[0.25em]">
              Checkout
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 mt-2">
              Enterprise Sales Strategy
            </h1>
            <p className="text-slate-500 mt-2 max-w-2xl">
              Deep dive into enterprise-level sales funnels, negotiation tactics,
              and CRM workflows designed for modern revenue teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <section className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  Course Highlights
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    Build enterprise sales playbooks and pipeline strategy.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    Learn negotiation frameworks used by top-performing teams.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    Templates, CRM checklists, and forecasting dashboards.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  What You Get
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">12 Modules</p>
                    <p className="mt-1">Real-world enterprise sales scenarios.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">5 Templates</p>
                    <p className="mt-1">Playbooks and pipeline worksheets.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">Lifetime Access</p>
                    <p className="mt-1">Revisit updates and bonus sessions.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">Certificate</p>
                    <p className="mt-1">Shareable completion credential.</p>
                  </div>
                </div>
              </div>
            </section>

            <aside className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm sticky top-24">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Course Price</p>
                    <p className="text-3xl font-semibold text-slate-900">
                      {currencySymbol}500
                    </p>
                  </div>
                  <span className="text-sm text-slate-400 line-through">
                    {currencySymbol}1200
                  </span>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Base price</span>
                    <span>{currencySymbol}1200</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Limited offer</span>
                    <span>-{currencySymbol}700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform fee</span>
                    <span>{currencySymbol}0</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between font-semibold text-slate-900">
                    <span>Total due</span>
                    <span>{currencySymbol}500</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700">
                  Proceed to Payment
                </button>

                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
                  <p className="font-semibold text-slate-700">Secure Checkout</p>
                  <p className="mt-1">
                    Payment-ready flow with PCI-compliant processing and instant
                    course access on purchase.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 rounded-full bg-white border border-slate-200">
                      Visa
                    </span>
                    <span className="px-2 py-1 rounded-full bg-white border border-slate-200">
                      Mastercard
                    </span>
                    <span className="px-2 py-1 rounded-full bg-white border border-slate-200">
                      UPI
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
