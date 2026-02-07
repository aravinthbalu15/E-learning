import { useNavigate } from "react-router-dom";

export default function LessonPlayer() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gray-100">

      {/* TOP BAR */}
      <div className="bg-white border-b px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => navigate("/course")}
          className="text-sm font-medium text-indigo-600"
        >
          ← Back to My Courses
        </button>

        <h2 className="font-semibold">Basics of Odoo CRM</h2>
      </div>

      {/* MAIN */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-80 bg-white border-r p-4 overflow-y-auto">

          <div className="mb-4">
            <h3 className="font-semibold">Basics of Odoo CRM</h3>
            <p className="text-sm text-gray-500">70% Completed</p>
          </div>

          <div className="space-y-3">

            <div className="border rounded-lg p-3 bg-indigo-50">
              Advanced Sales & CRM Automation in Odoo
            </div>

            <div className="border rounded-lg p-3">
              Document
            </div>

            <div className="border rounded-lg p-3">
              Video
            </div>

            <div className="border rounded-lg p-3">
              Quiz
            </div>

          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 flex flex-col">

          {/* DESCRIPTION */}
          <div className="bg-white border-b p-4">
            <p className="text-gray-600">
              Description of the content should be visible here which is set
              in background for the user.
            </p>
          </div>

          {/* VIEWER */}
          <div className="flex-1 flex items-center justify-center bg-gray-200">
            <div className="w-[80%] h-[70%] bg-white rounded-xl shadow flex items-center justify-center">
              Content Viewer (Video / Document / Image)
            </div>
          </div>

          {/* NEXT BUTTON */}
          <div className="bg-white border-t p-4 flex justify-end">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
              Next Content →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
