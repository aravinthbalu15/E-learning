export default function AdminHeader({ onCreate }) {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">E-learning Kanban View</h1>

      <button
        onClick={onCreate}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        + Create Course
      </button>
    </header>
  );
}
