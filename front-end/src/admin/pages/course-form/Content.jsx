export default function ContentTab() {
  return (
    <div className="border rounded-xl p-6 mt-6 space-y-6">

      {/* Category */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Content Category :</p>

        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-indigo-600" />
            Video
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Document
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Image
          </label>
        </div>
      </div>

      {/* Video link */}
      <div>
        <label className="text-sm text-gray-500">
          Video Link:
        </label>

        <input
          className="w-full border-b mt-2 py-2 outline-none"
          placeholder="Google drive link or youtube video link"
        />
      </div>

      {/* Responsible */}
      <div>
        <label className="text-sm text-gray-500">
          Responsible:
        </label>

        <input
          className="w-full border-b mt-2 py-2 outline-none"
          placeholder="Enter responsible person"
        />
      </div>

      {/* Duration */}
      <div>
        <label className="text-sm text-gray-500">
          Duration:
        </label>

        <div className="flex items-center gap-3 mt-2">
          <input
            type="time"
            className="border rounded-lg px-3 py-2"
          />
          <span className="text-gray-500">hours</span>
        </div>
      </div>

    </div>
  );
}
