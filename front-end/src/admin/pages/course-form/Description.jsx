export default function DescriptionTab() {
  return (
    <div className="border rounded-xl p-6 mt-6">

      <textarea
        rows={10}
        placeholder="Write your content description here..."
        className="w-full resize-none outline-none bg-transparent text-sm placeholder:text-indigo-500"
      />

    </div>
  );
}