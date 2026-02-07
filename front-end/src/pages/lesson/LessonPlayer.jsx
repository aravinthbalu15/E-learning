import { Link, useSearchParams } from "react-router-dom";

const lessons = [
  {
    id: 1,
    title: "Introduction to Odoo Ecosystem",
    status: "completed",
    type: "Reading + Slides",
    duration: "20 mins",
    summary:
      "Understand why enterprises choose Odoo and how its CRM integrates with core business modules.",
    learningPoints: [
      "What is Odoo and why enterprises use it",
      "Overview of CRM, Sales, Inventory, and Accounting modules",
      "How Odoo CRM fits into business workflows"
    ],
    resources: ["12 pages PDF", "Architecture diagram"]
  },
  {
    id: 2,
    title: "CRM Module Installation & Setup",
    status: "in-progress",
    type: "Video + Guide",
    duration: "15:30",
    summary:
      "Install the Odoo CRM module and configure teams, stages, and pipelines.",
    learningPoints: [
      "Installing the Odoo CRM module",
      "Configuring sales teams and pipelines",
      "Setting up stages (Lead -> Opportunity -> Won)"
    ],
    resources: ["Installation checklist", "Setup reference document"]
  },
  {
    id: 3,
    title: "Sales Pipeline Automation",
    status: "locked",
    type: "Video + Quiz",
    duration: "25 mins",
    summary:
      "Automate lead assignment, activities, and follow-ups to scale pipeline management.",
    learningPoints: [
      "Automating lead assignment",
      "Activity scheduling and follow-ups",
      "Email automation and sales forecasting basics"
    ],
    resources: ["10-question quiz (MCQs)", "Automation worksheet"],
    footerNote: "Final Quiz"
  },
  {
    id: 4,
    title: "Advanced Sales & CRM Automation",
    status: "locked",
    type: "Project",
    duration: "40 mins",
    summary:
      "Build a mini CRM automation project with custom workflows and dashboards.",
    learningPoints: [
      "Design a custom sales pipeline",
      "Automated reminder workflow",
      "Sales performance dashboard"
    ],
    resources: ["Project brief", "Sample dashboard layout"],
    footerNote: "Final Project"
  }
];

const statusStyles = {
  completed: "text-emerald-600",
  "in-progress": "text-indigo-600",
  locked: "text-slate-400"
};

export default function LessonPlayer() {
  const [searchParams] = useSearchParams();
  const lessonParam = Number(searchParams.get("lesson"));
  const currentLesson = lessons.find((lesson) => lesson.id === lessonParam) || lessons[1];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <Link to="/course/coursepage" className="text-sm font-semibold text-indigo-600">
            {"<-"} Back to Course
          </Link>

          <div className="border border-slate-200 rounded-2xl p-4">
            <h3 className="font-semibold text-slate-900 text-sm">
              Basics of Odoo CRM
            </h3>
            <p className="text-xs text-emerald-600 font-semibold mt-2">
              30% Completed
            </p>
            <div className="w-full bg-slate-200 h-2 rounded-full mt-3">
              <div className="bg-indigo-600 h-2 rounded-full w-[30%]" />
            </div>
          </div>

          <div className="space-y-3 text-sm">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={lesson.status === "locked" ? "#" : `/lesson-player?lesson=${lesson.id}`}
                className={`flex items-center justify-between rounded-xl px-3 py-2 transition ${
                  currentLesson.id === lesson.id
                    ? "bg-indigo-50 text-indigo-700"
                    : "hover:bg-slate-50 text-slate-600"
                } ${lesson.status === "locked" ? "pointer-events-none opacity-60" : ""}`}
              >
                <span className="font-medium">{lesson.title}</span>
                <span className={`${statusStyles[lesson.status]} text-xs font-semibold`}>
                  {lesson.status === "completed" && (
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
                  )}
                  {lesson.status === "in-progress" && (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                  {lesson.status === "locked" && (
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
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  )}
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Module Content
            </p>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
              <span className="font-medium text-slate-600">Document</span>
              <svg
                className="w-4 h-4 text-emerald-600"
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
            <div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
              <span className="font-medium text-slate-600">Video</span>
              <svg
                className="w-4 h-4 text-emerald-600"
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
            <Link
              to="/quiz-player"
              className="flex items-center justify-between rounded-xl border border-indigo-300 bg-indigo-50 px-3 py-2 text-indigo-700 font-semibold"
            >
              Quiz
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>
        </aside>

        <main className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.25em]">
                  Lesson {currentLesson.id.toString().padStart(2, "0")}
                </p>
                <h1 className="text-2xl font-semibold text-slate-900 mt-2">
                  {currentLesson.title}
                </h1>
              </div>
              <div className="text-sm text-slate-500 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-100">
                  {currentLesson.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100">
                  {currentLesson.duration}
                </span>
                <span
                  className={`px-3 py-1 rounded-full bg-slate-100 font-semibold ${statusStyles[currentLesson.status]}`}
                >
                  {currentLesson.status === "in-progress"
                    ? "IN PROGRESS"
                    : currentLesson.status === "completed"
                      ? "COMPLETED"
                      : "LOCKED"}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-600">{currentLesson.summary}</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">What you'll learn</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {currentLesson.learningPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center text-xs mt-0.5">
                    <svg
                      className="w-3.5 h-3.5"
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
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Resources</h2>
              {currentLesson.footerNote && (
                <span className="text-xs font-semibold text-slate-500">
                  {currentLesson.footerNote}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              {currentLesson.resources.map((resource) => (
                <span
                  key={resource}
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-center min-h-[280px]">
            <div className="text-center space-y-3 max-w-md">
              <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mx-auto">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.25em]">
                Now Playing
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                {currentLesson.title}
              </h3>
              <p className="text-sm text-slate-500">
                Primary material: {currentLesson.type}. Estimated duration{" "}
                {currentLesson.duration}.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm ${
                currentLesson.status === "locked"
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
              disabled={currentLesson.status === "locked"}
              type="button"
            >
              Next Content {"->"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
