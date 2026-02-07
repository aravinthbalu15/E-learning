export default function CourseCard({ title, progress }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      <div className="p-4">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
          Marketing
        </span>

        <h3 className="font-semibold text-lg mt-2">{title}</h3>

        <p className="text-gray-500 text-sm mt-1">
          A comprehensive guide to modern digital marketing strategies.
        </p>

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

        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Continue Learning
        </button>
      </div>
    </div>
  );
}
