export default function CourseReviewsTab() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">

        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">4.5</h2>

          {/* Stars */}
          <div className="flex text-yellow-400 text-lg">
            ★ ★ ★ ★ ☆
          </div>
        </div>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Add Review
        </button>
      </div>

      {/* LOGGED USER REVIEW BOX */}
      <div className="flex gap-3 items-start mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>

        <div className="flex-1">
          <p className="text-sm font-medium mb-1">Logged in user</p>

          <textarea
            placeholder="Write your review..."
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
          ></textarea>
        </div>
      </div>

      {/* REVIEWS LIST */}
      <div className="space-y-5">

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>

          <div className="flex-1 border rounded-xl p-4">
            <p className="font-medium">Name of User 2</p>
            <p className="text-gray-600 mt-1">
              This course helped me understand CRM implementation clearly.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>

          <div className="flex-1 border rounded-xl p-4">
            <p className="font-medium">Name of User 3</p>
            <p className="text-gray-600 mt-1">
              Excellent step-by-step explanation and real-world examples.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
