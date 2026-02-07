import { Link } from "react-router-dom";

export default function CourseOverviewTab() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg font-semibold text-slate-900">4 Lessons</h2>
        <Link
          to="/lesson-player?lesson=2"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
        >
          Continue Learning
        </Link>
      </div>

      <div className="space-y-4">
        <Link to="/lesson-player?lesson=1" className="block">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition hover:shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white grid place-items-center">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Introduction to Odoo Ecosystem
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600 mt-1">
                    <span>Reading + Slides</span>
                    <span>20 mins</span>
                    <span>12 Pages PDF</span>
                    <span>1 Architecture Diagram</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>
          </div>
        </Link>

        <Link to="/lesson-player?lesson=2" className="block">
          <div className="rounded-2xl border border-indigo-300 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white grid place-items-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    CRM Module Installation & Setup
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500 mt-1">
                    <span>Video + Guide</span>
                    <span>15:30 duration</span>
                    <span>Installation checklist</span>
                    <span>Setup reference doc</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                IN PROGRESS
              </span>
            </div>
          </div>
        </Link>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-300 text-slate-400 grid place-items-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-700">
                  Sales Pipeline Automation
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-1">
                  <span>Video + Quiz</span>
                  <span>25 mins</span>
                  <span>10-question MCQ</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Next Lesson
            </span>
          </div>
          <div className="mt-3 text-xs text-slate-400">Final Quiz</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-300 text-slate-400 grid place-items-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-700">
                  Advanced Sales & CRM Automation
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-1">
                  <span>Project</span>
                  <span>40 mins</span>
                  <span>Mini CRM automation</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-500">Locked</span>
          </div>
          <div className="mt-3 text-xs text-slate-400">Final Project</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          About the Instructor
        </h3>

        <div className="mt-5 flex flex-col lg:flex-row gap-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 grid place-items-center text-xl font-semibold">
            HW
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <p className="text-lg font-semibold text-slate-900">Bhuvanasri </p>
              <p className="text-sm text-slate-500">
                Senior Odoo Architect & Trainer
              </p>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <p>12+ years in ERP implementation</p>
              <p>Helped 500+ companies migrate to Odoo</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                CRM Automation
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                Sales Pipeline Optimization
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                ERP Customization
              </span>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-4">
            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <p className="text-xl font-semibold text-slate-900">12k+</p>
              <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                Learners
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-center">
              <p className="text-xl font-semibold text-slate-900">4.9</p>
              <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
