import { useState } from "react";
import CourseOverviewTab from "./CourseOverviewTab";
import CourseReviewsTab from "./CourseReviewsTab";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6">

          <div className="flex gap-5 items-center">
            <div className="w-24 h-24 bg-white/20 rounded-xl"></div>

            <div>
              <span className="bg-white/20 text-xs px-3 py-1 rounded">
                COURSE
              </span>

              <h1 className="text-2xl md:text-3xl font-bold mt-2">
                Basics of Odoo CRM
              </h1>

              <p className="text-white/90 mt-2 max-w-xl">
                Master CRM and sales pipeline automation using Odoo.
              </p>
            </div>
          </div>

          <div className="bg-white/20 rounded-xl p-5 w-full lg:w-80">
            <p className="text-sm mb-2">30% Completed</p>

            <div className="w-full bg-white/30 h-2 rounded-full mb-4">
              <div className="bg-green-400 h-2 rounded-full w-[30%]" />
            </div>

            <div className="grid grid-cols-3 text-center text-sm">
              <div><p className="font-semibold text-lg">4</p><p>Content</p></div>
              <div><p className="font-semibold text-lg">2</p><p>Completed</p></div>
              <div><p className="font-semibold text-lg">2</p><p>Incomplete</p></div>
            </div>
          </div>

        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6 border-b mb-6">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-2 ${
              activeTab === "overview"
                ? "border-b-2 border-indigo-600 font-medium"
                : "text-gray-500"
            }`}
          >
            Course Overview
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-indigo-600 font-medium"
                : "text-gray-500"
            }`}
          >
            Ratings and Reviews
          </button>
        </div>

        {activeTab === "overview" && <CourseOverviewTab />}
        {activeTab === "reviews" && <CourseReviewsTab />}
      </div>
    </div>
  );
}
