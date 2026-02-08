export default function AdminTopNav({ onNew }) {
  return (
    <div className="bg-white border-b px-6 py-3 flex flex-wrap items-center justify-between gap-4">

      {/* Left section */}
      <div className="flex items-center gap-4 flex-wrap">

        {/* Logo / App name */}
        <div className="px-4 py-2 border rounded-lg text-sm font-medium">
          App name and logo
        </div>

        {/* Menu buttons */}
        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
          Courses
        </button>

        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
          Reporting
        </button>

        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
          Setting
        </button>
      </div>

      {/* Right section
      <div>
        <button
          onClick={onNew}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm"
        >
          New
        </button>
      </div> */}

    </div>
  );
}
