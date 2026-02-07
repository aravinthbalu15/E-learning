import { useState } from "react";
import CourseOverviewTab from "./CourseOverviewTab";
import CourseReviewsTab from "./CourseReviewsTab";
import Nav from "../../components/nav/Navbar";
import Footer from "../../components/Footer";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Nav
        showBackLink
        backTo="/home"
        backLabel="Back to My Courses"
        showNavLinks={false}
        searchPlaceholder="Search content..."
      />

      <section className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/25 grid place-items-center">
              <svg
                className="w-9 h-9 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" />
                <path d="M21 7.5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" />
              </svg>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-white/15">
                Course
              </span>
              <h1 className="text-3xl md:text-4xl font-semibold mt-3">
                Basics of Odoo CRM
              </h1>
              <p className="text-white/85 mt-3 max-w-2xl">
                Master the fundamentals of customer relationship management and
                sales pipeline automation using the Odoo framework.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-80 bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-white/60">
            <p className="text-sm font-semibold text-slate-500">
              30% Completed
            </p>
            <div className="mt-3 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-2 w-[30%]" />
            </div>

            <div className="mt-5 grid grid-cols-3 text-center text-sm text-slate-600">
              <div>
                <p className="font-semibold text-lg text-slate-900">4</p>
                <p>Total Lessons</p>
              </div>
              <div>
                <p className="font-semibold text-lg text-slate-900">2</p>
                <p>Completed</p>
              </div>
              <div>
                <p className="font-semibold text-lg text-slate-900">2</p>
                <p>Incomplete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-6 text-sm font-semibold">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 border-b-2 transition ${
                  activeTab === "overview"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                Course Overview
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 border-b-2 transition ${
                  activeTab === "reviews"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                Ratings and Reviews
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeTab === "overview" && <CourseOverviewTab />}
          {activeTab === "reviews" && <CourseReviewsTab />}
        </div>
      </section>

      <Footer />
    </>
  );
}
