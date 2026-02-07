import { useNavigate } from "react-router-dom";

export default function CourseOverviewTab() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h2 className="font-semibold text-lg">4 Contents</h2>

        <input
          placeholder="Search content"
          className="border rounded-lg px-3 py-2 text-sm w-full md:w-64"
        />
      </div>

      {/* LESSON LIST */}
      <div className="divide-y">

        {/* LESSON 1 */}
        <div
          onClick={() => navigate("/lesson-player")}
          className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 px-2 rounded-lg"
        >
          <p className="font-medium">
            Advanced Sales & CRM Automation in Odoo
          </p>

          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        {/* LESSON 2 */}
        <div
          onClick={() => navigate("/lesson-player")}
          className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 px-2 rounded-lg"
        >
          <p className="font-medium">
            Odoo CRM: Advanced Features & Best Practices
          </p>

          <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
        </div>

        {/* LESSON 3 */}
        <div
          onClick={() => navigate("/lesson-player")}
          className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 px-2 rounded-lg"
        >
          <p className="font-medium">Content 3</p>

          <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
        </div>

        {/* LESSON 4 */}
        <div
          onClick={() => navigate("/lesson-player")}
          className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 px-2 rounded-lg"
        >
          <p className="font-medium">Content 4</p>

          <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
        </div>

      </div>

    </div>
  );
}
