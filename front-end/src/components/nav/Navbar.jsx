import { Link } from "react-router-dom";

export default function Navbar({
  showBackLink = false,
  backTo = "/home",
  backLabel = "Back to My Courses",
  showNavLinks = true,
  searchPlaceholder = "Search for courses, skills..."
}) {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white grid place-items-center shadow-sm">
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
                <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" />
                <path d="M21 7.5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" />
                <path d="M7.5 10.5v5" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-slate-900">EduCorp</span>
          </div>

          {showBackLink && (
            <Link
              to={backTo}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              <span className="text-lg">←</span>
              {backLabel}
            </Link>
          )}

          {showNavLinks && (
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <button className="relative font-semibold text-indigo-600">
                My Courses
                <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-indigo-600 rounded-full" />
              </button>
              <button className="text-slate-500 hover:text-slate-700">
                Course Catalog
              </button>
              <button className="text-slate-500 hover:text-slate-700">
                Achievements
              </button>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                placeholder={searchPlaceholder}
                className="w-72 rounded-full border border-slate-200 bg-slate-50 px-10 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          <button className="relative w-10 h-10 rounded-full border border-slate-200 bg-white grid place-items-center text-slate-600 hover:bg-slate-50">
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
              <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <span className="hidden md:block w-px h-8 bg-slate-200" />

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-amber-200 grid place-items-center text-amber-700 font-semibold">
                D
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">Dineesh M</p>
              <p className="text-xs text-slate-400">Premium Learner</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
