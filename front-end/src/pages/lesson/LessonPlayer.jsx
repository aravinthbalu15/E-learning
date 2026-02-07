import { useNavigate } from "react-router-dom";

export default function LessonPlayer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-80 bg-white border-r p-5 flex flex-col">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="text-indigo-600 text-sm mb-4"
        >
          ← Back
        </button>

        {/* COURSE CARD */}
        <div className="border rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-sm mb-2">
            Basics of Odoo CRM
          </h3>

          <p className="text-xs text-orange-500 mb-2">
            30% Completed
          </p>

          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-indigo-600 h-2 rounded-full w-[30%]"></div>
          </div>
        </div>

        {/* LESSON LIST */}
        <div className="space-y-3 text-sm">

          <div className="flex justify-between items-center">
            <span className="text-indigo-600 font-medium">
              Advanced Sales & CRM Automation
            </span>
            <span className="text-green-500">✓</span>
          </div>

          {/* ATTACHMENTS */}
          <div className="ml-3 space-y-2 text-gray-600">
            <p className="flex justify-between">
              Document
              <span className="w-4 h-4 border rounded-full"></span>
            </p>

            <p className="flex justify-between">
              Video
              <span className="w-4 h-4 border rounded-full"></span>
            </p>

            <p className="flex justify-between">
              Quiz
              <span className="w-4 h-4 border rounded-full"></span>
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT PLAYER */}
      <div className="flex-1 flex flex-col p-6">

        {/* DESCRIPTION HEADER */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <p className="text-sm text-gray-600">
            Description of the content should be visible here,
            which is set in backend for the user.
          </p>
        </div>

        {/* PLAYER AREA */}
        <div className="bg-white rounded-xl shadow-sm flex-1 flex items-center justify-center">
          <h2 className="text-gray-400 text-lg">
            Advanced Sales & CRM Automation in Odoo
          </h2>
        </div>

        {/* NEXT BUTTON */}
        <div className="flex justify-end mt-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Next Content →
          </button>
        </div>

      </div>

    </div>
  );
}
