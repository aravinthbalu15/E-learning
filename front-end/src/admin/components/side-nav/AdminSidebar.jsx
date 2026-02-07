export default function AdminSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-4">
        <a href="#" className="block hover:text-indigo-400">Courses</a>
        <a href="#" className="block hover:text-indigo-400">Reporting</a>
        <a href="#" className="block hover:text-indigo-400">Settings</a>
      </nav>
    </aside>
  );
}
