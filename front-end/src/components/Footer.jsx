export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              EduFlow Enterprise
            </h3>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              EduFlow Enterprise enables organizations and professionals to
              upskill through structured, analytics-driven digital learning.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
              Platform
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <button type="button" className="hover:text-slate-900">
                  My Courses
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Course Catalog
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Achievements
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Corporate Training
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Instructor Program
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
              Support
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <button type="button" className="hover:text-slate-900">
                  Help Center
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Contact Support
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  System Status
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Learning Guidelines
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Accessibility
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <button type="button" className="hover:text-slate-900">
                  Terms of Service
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Data Protection
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-slate-900">
                  Compliance & Security
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 EduFlow Enterprise Learning. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button type="button" className="hover:text-slate-700">
              Privacy Policy
            </button>
            <button type="button" className="hover:text-slate-700">
              Terms of Service
            </button>
            <button type="button" className="hover:text-slate-700">
              Help Center
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
