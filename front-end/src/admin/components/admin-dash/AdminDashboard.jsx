import { useState } from "react";
import AdminSidebar from "../side-nav/AdminSidebar";
import AdminHeader from "../header/AdminHeader";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
     const navigate = useNavigate();   // ADD THIS
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

      <main className="p-6">
  <div className="bg-white rounded-xl shadow divide-y">

    {courses.map((course) => (
      <div
        key={course.id}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6"
      >

        {/* Left section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-indigo-600">
            {course.title}
          </h3>

          <div className="text-xs text-gray-500 mt-2">
            tag1 • tag2 • tag3
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-800">{course.views}</p>
            <p>Views</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">{course.contents}</p>
            <p>Contents</p>
          </div>
          <div>
            <p className="font-medium text-gray-800">{course.duration}</p>
            <p>Duration</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Share
          </button>

          <button
  onClick={() => navigate(`/admin/course/edit/${course.id}`)}
  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
>
  Edit
</button>



          <span className="ml-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            Published
          </span>
        </div>
      </div>
    ))}

  </div>
</main>

      </div>
    </div>
  );
}
