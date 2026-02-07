export default function CourseReviewsTab() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-3xl font-semibold text-slate-900">4.9</p>
            <p className="text-sm text-slate-500">Instructor Rating</p>
          </div>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l2.9 5.88 6.5.94-4.7 4.58 1.1 6.44L12 17.77 6.2 19.84l1.1-6.44-4.7-4.58 6.5-.94L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700">
          Add Review
        </button>
      </div>

      <div className="flex gap-3 items-start">
        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center font-semibold">
          DM
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">Dineesh M</p>
          <textarea
            placeholder="Share your experience with this course..."
            className="w-full border border-slate-200 rounded-xl p-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 grid place-items-center font-semibold">
            MR
          </div>
          <div className="flex-1 border border-slate-200 rounded-xl p-4">
            <p className="font-semibold text-slate-900">Meera Rao</p>
            <p className="text-slate-600 mt-1 text-sm">
              Clear walkthrough of Odoo CRM setup with practical pipeline
              examples. The lesson pacing and supporting files were perfect for
              a real implementation.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 grid place-items-center font-semibold">
            KN
          </div>
          <div className="flex-1 border border-slate-200 rounded-xl p-4">
            <p className="font-semibold text-slate-900">Kunal Nair</p>
            <p className="text-slate-600 mt-1 text-sm">
              Strong focus on CRM automation and sales workflows. The tips on
              reporting and lead scoring are immediately usable for enterprise
              teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
