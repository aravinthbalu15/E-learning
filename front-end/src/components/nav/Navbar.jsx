export default function Navbar() {
  return (
    <div className="bg-white border-b px-6 py-3 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-indigo-600">EduCorp</h1>

        <div className="hidden md:flex gap-5 text-sm">
          <span className="text-indigo-600 font-medium cursor-pointer">
            My Courses
          </span>
          <span className="text-gray-500 cursor-pointer">Course Catalog</span>
          <span className="text-gray-500 cursor-pointer">Achievements</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <input
          placeholder="Search courses..."
          className="hidden md:block border rounded-full px-4 py-1 text-sm"
        />

        <div className="w-8 h-8 rounded-full bg-orange-400"></div>
      </div>
    </div>
  );
}
