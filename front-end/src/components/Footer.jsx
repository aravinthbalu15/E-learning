export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">LearnSphere</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              LearnSphere helps enterprises build measurable skills through
              role-based learning paths and professional certifications.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
              Platform
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><button className="hover:text-white">My Learning</button></li>
              <li><button className="hover:text-white">Skill Paths</button></li>
              <li><button className="hover:text-white">Certifications</button></li>
              <li><button className="hover:text-white">Team Analytics</button></li>
              <li><button className="hover:text-white">Enterprise Programs</button></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
              Support
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><button className="hover:text-white">Help Center</button></li>
              <li><button className="hover:text-white">Contact Support</button></li>
              <li><button className="hover:text-white">System Status</button></li>
              <li><button className="hover:text-white">Learning Guidelines</button></li>
              <li><button className="hover:text-white">Accessibility</button></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><button className="hover:text-white">Terms of Service</button></li>
              <li><button className="hover:text-white">Privacy Policy</button></li>
              <li><button className="hover:text-white">Cookie Policy</button></li>
              <li><button className="hover:text-white">Data Protection</button></li>
              <li><button className="hover:text-white">Compliance & Security</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>Copyright 2026 LearnSphere. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button className="hover:text-slate-300">Privacy Policy</button>
            <button className="hover:text-slate-300">Terms of Service</button>
            <button className="hover:text-slate-300">Help Center</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
