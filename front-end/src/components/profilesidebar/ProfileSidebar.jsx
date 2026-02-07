export default function ProfileSidebar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6 max-h-[calc(100vh-160px)] overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-900">My Profile</h2>
        <button className="w-8 h-8 rounded-full border border-slate-200 grid place-items-center text-slate-400">
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#4f46e5"
              strokeWidth="8"
              fill="none"
              strokeDasharray="351"
              strokeDashoffset="210"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-slate-900">20</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">
              TOTAL POINTS
            </span>
          </div>
        </div>

        <span className="mt-4 px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-semibold">
          NEWBIE
        </span>
      </div>

      <p className="text-sm text-slate-500 text-center">
        You are doing great! Earn{" "}
        <span className="font-semibold text-indigo-600">20 more points</span> to
        unlock Explorer badge.
      </p>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-slate-400 tracking-[0.2em]">
            ACHIEVEMENT LADDER
          </h3>
          <button className="text-xs font-semibold text-indigo-600">
            View All
          </button>
        </div>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white grid place-items-center">
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
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="M7 4h10l-1 7H8L7 4z" />
                  <path d="M5 4H4a2 2 0 00-2 2v1a4 4 0 004 4" />
                  <path d="M19 4h1a2 2 0 012 2v1a4 4 0 01-4 4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Newbie</p>
                <p className="text-xs text-slate-400">Current Level</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              20 Pts
            </span>
          </li>

          <li className="flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 grid place-items-center">
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
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Explorer</p>
                <p className="text-xs">Next Milestone</p>
              </div>
            </div>
            <span className="text-xs font-semibold">40 Pts</span>
          </li>

          <li className="flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 grid place-items-center">
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Achiever</p>
                <p className="text-xs">Keep Growing</p>
              </div>
            </div>
            <span className="text-xs font-semibold">60 Pts</span>
          </li>

          <li className="flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 grid place-items-center">
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
                  <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Specialist</p>
                <p className="text-xs">Top Tier</p>
              </div>
            </div>
            <span className="text-xs font-semibold">80 Pts</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="rounded-xl bg-slate-50 p-4 text-center">
          <p className="text-2xl font-semibold text-slate-900">12</p>
          <p className="text-xs text-slate-500 uppercase tracking-[0.15em]">
            Courses Finished
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-center">
          <p className="text-2xl font-semibold text-slate-900">48h</p>
          <p className="text-xs text-slate-500 uppercase tracking-[0.15em]">
            Study Hours
          </p>
        </div>
      </div>
    </div>
  );
}
