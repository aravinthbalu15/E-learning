import { useNavigate } from "react-router-dom";

export default function CourseCard({ title, progress }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/course")}
      className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer"
    >
      <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mt-2">{title}</h3>

        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/course");
          }}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg"
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
}
