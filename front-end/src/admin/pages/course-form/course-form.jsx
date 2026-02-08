import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTopNav from "../../components/side-nav/AdminTopNav";
import DescriptionTab from "./Description";
import QuizEditor from "./Quize";

export default function CourseBuilderPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("content");
  const [published, setPublished] = useState(true);
  const [editingItem, setEditingItem] = useState(null);

  const contents = [
    { id: 1, title: "Advanced Sales & CRM Automation", category: "Video" },
    { id: 2, title: "Odoo CRM Advanced Features", category: "Document" },
    { id: 3, title: "Quiz", category: "Quiz" }
  ];

  return (
    <>
      <AdminTopNav />

      <div className="bg-gray-100 min-h-screen">

        {/* HEADER */}
        <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <button className="border px-4 py-2 rounded-lg">New</button>

          <div className="flex items-center gap-4">
            <button className="border px-4 py-2 rounded-lg">
              Publish on website
            </button>

            <div
              onClick={() => setPublished(!published)}
              className={`w-14 h-7 rounded-full p-1 cursor-pointer flex items-center ${
                published ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow transform ${
                  published ? "translate-x-7" : ""
                }`}
              />
            </div>

            <button className="border px-4 py-2 rounded-lg">Preview</button>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-xl shadow p-6">

            {/* EDIT MODE */}
            {editingItem && (
              <div className="mb-6">
                <button
                  onClick={() => setEditingItem(null)}
                  className="text-indigo-600 mb-4"
                >
                  ← Back
                </button>

                <h2 className="text-lg font-semibold mb-2">
                  Editing: {editingItem.title}
                </h2>

                <input
                  defaultValue={editingItem.title}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
            )}

            {!editingItem && (
              <>
                {/* COURSE DETAILS */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <input
                      placeholder="Course title"
                      className="w-full border-b py-2 outline-none"
                    />
                    <input
                      placeholder="Tags"
                      className="w-full border-b py-2 outline-none"
                    />
                    <input
                      placeholder="Responsible"
                      className="w-full border-b py-2 outline-none"
                    />
                  </div>

                  <div className="border rounded-lg h-32 flex items-center justify-center text-gray-400">
                    Course image
                  </div>
                </div>

                {/* TABS */}
                <div className="flex gap-3 mt-8 border-b pb-2">
                  {["content", "description", "options", "quiz"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded ${
                        activeTab === tab
                          ? "bg-indigo-600 text-white"
                          : "border"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* TAB CONTENT */}
                <div className="mt-6">

                  {activeTab === "content" && (
                    <div>
                      <table className="w-full text-left border rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-3">Content title</th>
                            <th className="p-3">Category</th>
                            <th className="p-3"></th>
                          </tr>
                        </thead>

                        <tbody>
                          {contents.map(item => (
                            <tr key={item.id} className="border-t">
                              <td className="p-3">{item.title}</td>
                              <td className="p-3">{item.category}</td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => setEditingItem(item)}
                                  className="text-indigo-600 mr-4"
                                >
                                  Edit
                                </button>
                                <button className="text-red-500">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="flex justify-center mt-6">
                        <button
                          onClick={() =>
                            navigate("/admin/course/add-content")
                          }
                          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
                        >
                          Add Content
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === "description" && <DescriptionTab />}

                  {activeTab === "quiz" && <QuizEditor />}

                  {activeTab === "options" && (
                    <div className="p-6 text-gray-500">
                      Options settings will appear here
                    </div>
                  )}

                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
