import { useNavigate } from "react-router-dom";

export default function CourseCard({
  title,
  progress,
  tags = [],
  isPaid = false,
  price = 0,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/course")}
      className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer"
    >
      {/* IMAGE */}
      <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      <div className="p-4">

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-lg mt-2">{title}</h3>

        {/* PROGRESS */}
        {!isPaid && (
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
        )}

        {/* PRICE (for paid course) */}
        {isPaid && (
          <p className="mt-4 text-lg font-semibold text-gray-800">
            ₹{price}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/course");
          }}
          className={`mt-4 w-full py-2 rounded-lg text-white ${
            isPaid ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isPaid ? "Buy Course" : "Continue Learning"}
        </button>
      </div>
    </div>
  );
}
