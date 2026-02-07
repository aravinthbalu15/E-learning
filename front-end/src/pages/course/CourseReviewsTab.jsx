import { useMemo, useState } from "react";

const ratingDistribution = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 20 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 }
];

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    initials: "SC",
    rating: 5.0,
    timeAgo: "2 days ago",
    helpful: 12,
    content:
      "The module on automated lead scoring was a game-changer for our sales team. The practical examples map directly to Odoo's CRM backend, which made implementation straightforward. Highly recommended for account managers working in enterprise environments."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    initials: "MR",
    rating: 4.0,
    timeAgo: "1 week ago",
    helpful: 8,
    content:
      "Great course content overall. I would have liked more video walkthroughs for custom pipeline stages, but the documentation and quizzes were excellent and reinforced the concepts well."
  },
  {
    id: 3,
    name: "David Thompson",
    initials: "DT",
    rating: 5.0,
    timeAgo: "2 weeks ago",
    helpful: 3,
    content:
      "Solid fundamentals. It covered exactly what I needed to set up our new CRM instance. The section on data migration saved our team hours of trial and error."
  }
];

export default function CourseReviewsTab() {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isLoggedIn = true;
  const canSubmit = reviewText.trim().length >= 20;

  const overallRating = useMemo(() => 4.5, []);

  const handleSubmit = () => {
    if (!canSubmit) {
      setError("Please enter at least 20 characters.");
      return;
    }
    setError("");
    setHasSubmitted(true);
    setShowEditor(false);
  };

  const handleCancel = () => {
    setReviewText("");
    setSelectedRating(5);
    setError("");
    setShowEditor(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                Student Feedback
              </p>
              <h2 className="text-lg font-semibold text-slate-900 mt-2">
                Overall Rating
              </h2>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-slate-900">
                  {overallRating}
                </span>
                <span className="text-sm text-slate-500">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 mt-2">
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
              <p className="text-xs text-slate-500 mt-2">Course Rating</p>
            </div>

            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-12 text-slate-600">{item.stars} star</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 bg-indigo-500"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-slate-500">
                    {item.percent}%
                  </span>
                </div>
              ))}
            </div>

            {isLoggedIn && !hasSubmitted && (
              <button
                type="button"
                onClick={() => setShowEditor((prev) => !prev)}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700"
              >
                Add Your Review
              </button>
            )}

            {hasSubmitted && (
              <div className="text-sm text-emerald-600 font-semibold">
                Review submitted. Editable within 24 hours.
              </div>
            )}

            <div className="text-xs text-slate-500 space-y-1">
              <p>Verified learners only. Reviews sorted by Most Relevant.</p>
              <p>Helpful votes influence ranking and visibility.</p>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-7 space-y-6">
          {showEditor && isLoggedIn && !hasSubmitted && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center font-semibold">
                    DM
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Dineesh M
                    </p>
                    <p className="text-xs text-slate-500">Verified learner</p>
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  One review per course
                </div>
              </div>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSelectedRating(value)}
                    className={`w-9 h-9 rounded-full border grid place-items-center ${
                      value <= selectedRating
                        ? "bg-amber-50 border-amber-200 text-amber-500"
                        : "border-slate-200 text-slate-400"
                    }`}
                    aria-label={`Rate ${value} star`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2l2.9 5.88 6.5.94-4.7 4.58 1.1 6.44L12 17.77 6.2 19.84l1.1-6.44-4.7-4.58 6.5-.94L12 2z" />
                    </svg>
                  </button>
                ))}
                <span className="text-sm text-slate-500">
                  {selectedRating}.0
                </span>
              </div>

              <textarea
                value={reviewText}
                onChange={(event) => setReviewText(event.target.value)}
                placeholder="Share your experience with this course. Focus on content quality, practical usefulness, and learning outcomes."
                className="w-full border border-slate-200 rounded-xl p-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
              />

              {error && <p className="text-sm text-rose-600">{error}</p>}

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold ${
                    canSubmit
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <span className="text-xs text-slate-500 self-center">
                  Editable within 24 hours
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Reviews
              </h3>
              <p className="text-xs text-slate-500">
                Sorted by Most Relevant
              </p>
            </div>
            <div className="text-xs text-slate-500">Verified learners only</div>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 grid place-items-center font-semibold">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill={index < Math.round(review.rating) ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.9 5.88 6.5.94-4.7 4.58 1.1 6.44L12 17.77 6.2 19.84l1.1-6.44-4.7-4.58 6.5-.94L12 2z" />
                      </svg>
                    ))}
                    <span className="text-xs text-slate-500">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600">{review.content}</p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <button type="button" className="hover:text-slate-700">
                    Helpful ({review.helpful})
                  </button>
                  <button type="button" className="hover:text-slate-700">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="w-full border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-600 hover:bg-white"
          >
            View More Reviews (24)
          </button>
        </section>
      </div>
    </div>
  );
}
