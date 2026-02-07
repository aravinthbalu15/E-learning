export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              LearnSphere
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
              LearnSphere is an enterprise learning platform designed to help
              professionals build real-world skills through structured,
              outcome-driven courses.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Platform
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/my-courses" className="text-slate-300 hover:text-white">
                  My Courses
                </a>
              </li>
              <li>
                <a href="/courses" className="text-slate-300 hover:text-white">
                  Course Catalog
                </a>
              </li>
              <li>
                <a href="/achievements" className="text-slate-300 hover:text-white">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/notifications" className="text-slate-300 hover:text-white">
                  Notifications
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Support
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/help" className="text-slate-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 LearnSphere. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built for real-world learning 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
