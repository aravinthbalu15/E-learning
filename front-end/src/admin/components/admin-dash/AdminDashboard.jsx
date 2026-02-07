import { useState } from "react";
import AdminSidebar from "../side-nav/AdminSidebar";
import AdminHeader from "../header/AdminHeader";

export default function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);

  const courses = [
    { id: 1, title: "Introduction to Odoo AI", views: 15, contents: 6, duration: "25:30" },
    { id: 2, title: "Basics of Odoo CRM", views: 20, contents: 8, duration: "20:35" },
    { id: 3, title: "About Odoo Courses", views: 10, contents: 5, duration: "10:20" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader onCreate={() => setShowModal(true)} />

        <main className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow p-5">
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500">Views: {course.views}</p>
              <p className="text-sm text-gray-500">Contents: {course.contents}</p>
              <p className="text-sm text-gray-500">Duration: {course.duration}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
