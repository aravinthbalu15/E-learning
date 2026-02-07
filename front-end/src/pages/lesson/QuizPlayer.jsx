import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const STORAGE_KEY = "eduflow-odoo-crm-progress";

const quizQuestions = [
  {
    id: 1,
    question: "What is the primary benefit of using Odoo CRM for lead management?",
    options: [
      "Automated data entry and lead enrichment",
      "Centralized pipeline visibility and reporting",
      "Integration with social media platforms only"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "Which stage sequence reflects a standard Odoo CRM pipeline?",
    options: [
      "Lead -> Opportunity -> Won",
      "Prospect -> Contacted -> Archived",
      "Inquiry -> Proposal -> Invoice"
    ],
    correctIndex: 0
  },
  {
    id: 3,
    question: "What is a key outcome of automating CRM activities?",
    options: [
      "Reduced visibility across teams",
      "More consistent follow-ups and forecasting",
      "Manual lead assignment at scale"
    ],
    correctIndex: 1
  }
];

const totalLessons = 3;

const moduleItems = [
  { key: "document", label: "Document" },
  { key: "video", label: "Video" },
  { key: "quiz", label: "Quiz" }
];

export default function QuizPlayer() {
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showReward, setShowReward] = useState(false);
  const [error, setError] = useState("");
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  const quizCompleted = completedLessons.includes("quiz");
  const progressPercent = useMemo(
    () => Math.round((completedLessons.length / totalLessons) * 100),
    [completedLessons]
  );

  const persistProgress = (next) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setCompletedLessons(next);
  };

  const markCompleted = (item) => {
    if (completedLessons.includes(item)) return;
    const next = [...completedLessons, item];
    persistProgress(next);
  };

  const handleStartQuiz = () => {
    if (!completedLessons.includes("document") || !completedLessons.includes("video")) {
      const next = [...new Set([...completedLessons, "document", "video"])];
      persistProgress(next);
    }
    setQuizStarted(true);
  };

  const handleProceed = () => {
    if (selectedOption === null) {
      setError("Select an option to continue.");
      return;
    }
    setError("");
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = selectedOption;
    setAnswers(nextAnswers);
    setSelectedOption(null);

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }

    markCompleted("quiz");
    setShowReward(true);
    setQuizStarted(false);
  };

  const handleContinueLearning = () => {
    setShowReward(false);
    navigate("/lesson-player?lesson=4");
  };

  const handleCompleteCourse = () => {
    if (completedLessons.length === totalLessons) {
      setCourseCompleted(true);
    }
  };

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <Link to="/course/coursepage" className="text-sm font-semibold text-indigo-600">
            {"<-"} Back to Course
          </Link>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Basics of Odoo CRM</h3>
            <p className="text-xs text-slate-500 mt-2">
              {progressPercent}% Completed
            </p>
            <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-emerald-500 h-2" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <div className="space-y-3 text-sm">
            {moduleItems.map((item) => {
              const isActive = item.key === "quiz";
              const isCompleted = completedLessons.includes(item.key);
              return (
                <div
                  key={item.key}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                    isActive
                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs font-semibold">
                    {isCompleted ? (
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
                    ) : isActive ? (
                      <span className="text-indigo-600">ACTIVE</span>
                    ) : (
                      <svg
                        className="w-4 h-4 text-slate-400"
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
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Next Module
            </p>
            <div className="mt-3 flex items-center justify-between text-slate-600">
              <span>Pipeline Management</span>
              {quizCompleted ? (
                <button
                  type="button"
                  onClick={() => navigate("/lesson-player?lesson=4")}
                  className="text-indigo-600 font-semibold"
                >
                  Open
                </button>
              ) : (
                <svg
                  className="w-4 h-4 text-slate-400"
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
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8 space-y-6">
          {!quizStarted && !quizCompleted && (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="max-w-md mx-auto text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 grid place-items-center mx-auto">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M12 5v2" />
                    <path d="M12 17v2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Module Quiz</h2>
                <p className="text-sm text-slate-500">
                  Test your knowledge on Odoo CRM Basics
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center">
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
                      <path d="M3 7h18" />
                      <path d="M3 12h18" />
                      <path d="M3 17h18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                      Questions
                    </p>
                    <p className="text-base font-semibold text-slate-900">
                      3 Total Questions
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center">
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
                      <path d="M12 2v4" />
                      <path d="M12 18v4" />
                      <path d="M4.93 4.93l2.83 2.83" />
                      <path d="M16.24 16.24l2.83 2.83" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                      Attempts
                    </p>
                    <p className="text-base font-semibold text-slate-900">
                      Multiple Allowed
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 grid place-items-center">
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
                    <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                      Duration
                    </p>
                    <p className="text-base font-semibold text-slate-900">
                      ~10 Minutes
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-500 text-center mt-6">
                You need at least <span className="font-semibold">80%</span> to
                pass this quiz.
              </p>

              <button
                type="button"
                onClick={handleStartQuiz}
                className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700"
              >
                Start Quiz {"->"}
              </button>
            </div>
          )}

          {quizStarted && !quizCompleted && (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.25em]">
                  Question {currentIndex + 1} of {quizQuestions.length}
                </p>
                <h2 className="text-xl font-semibold text-slate-900 mt-2">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition ${
                      selectedOption === index
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion.id}`}
                      className="accent-indigo-600"
                      checked={selectedOption === index}
                      onChange={() => setSelectedOption(index)}
                    />
                    <span className="text-sm text-slate-700">{option}</span>
                  </label>
                ))}
              </div>

              {error && <p className="text-sm text-rose-600">{error}</p>}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleProceed}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
                >
                  {currentIndex === quizQuestions.length - 1
                    ? "Proceed and Complete Quiz"
                    : "Proceed"}
                </button>
              </div>
            </div>
          )}

          {quizCompleted && (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold text-emerald-500 uppercase tracking-[0.2em]">
                    Quiz Completed
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900 mt-2">
                    Great work completing this assessment.
                  </h2>
                  <p className="text-sm text-slate-500 mt-2">
                    Your quiz is marked as completed and the next module is now
                    unlocked.
                  </p>
                </div>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/lesson-player?lesson=4")}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
                >
                  Next Module {"->"}
                </button>
                {completedLessons.length === totalLessons && (
                  <button
                    type="button"
                    onClick={handleCompleteCourse}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50"
                  >
                    Complete this course
                  </button>
                )}
              </div>

              {courseCompleted && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                  Course completed. Certificate unlocked and dashboard stats
                  updated.
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {showReward && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md text-center space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-500 grid place-items-center mx-auto">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 4h10l-1 7H8L7 4z" />
                <path d="M5 4H4a2 2 0 00-2 2v1a4 4 0 004 4" />
                <path d="M19 4h1a2 2 0 012 2v1a4 4 0 01-4 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Bingo!</h3>
            <p className="text-sm text-slate-500">You have earned 20 points</p>

            <div className="rounded-2xl border border-slate-200 p-4 text-left">
              <p className="text-center text-lg font-semibold text-amber-500">
                20 Points
              </p>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Start</span>
                  <span>Goal</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-400 h-2 w-[20%]" />
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>5 Points</span>
                  <span>100 Points</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Reach the next rank to gain more points and unlock exclusive
              badges.
            </p>
            <button
              type="button"
              onClick={handleContinueLearning}
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700"
            >
              Continue Learning
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
