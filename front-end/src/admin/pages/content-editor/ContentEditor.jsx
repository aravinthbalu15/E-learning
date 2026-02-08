import { useState } from "react";

export default function ContentEditor({ item, onClose }) {
  const [activeTab, setActiveTab] = useState("content");
  const [category, setCategory] = useState("video");
  const [allowDownload, setAllowDownload] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-semibold">
            {item ? "Edit Content" : "Add Content"}
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Title */}
        <input
          defaultValue={item?.title}
          placeholder="Content title"
          className="w-full border-b py-2 outline-none mb-6"
        />

        {/* Tabs */}
        <div className="flex gap-3 border-b pb-2 mb-6">
          {["content","description","attachment"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT TAB */}
        {activeTab === "content" && (
          <div className="space-y-6">

            {/* Category */}
            <div className="flex gap-6">
              {["video","document","image"].map(c => (
                <label key={c} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={category === c}
                    onChange={() => setCategory(c)}
                  />
                  {c}
                </label>
              ))}
            </div>

            {/* VIDEO */}
            {category === "video" && (
              <input
                placeholder="Video Link"
                className="w-full border-b py-2 outline-none"
              />
            )}

            {/* DOCUMENT */}
            {category === "document" && (
              <div className="flex items-center gap-4">
                <input type="file" />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={allowDownload}
                    onChange={()=>setAllowDownload(!allowDownload)}
                  />
                  Allow Download
                </label>
              </div>
            )}

            {/* IMAGE */}
            {category === "image" && (
              <div className="flex items-center gap-4">
                <input type="file" />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={allowDownload}
                    onChange={()=>setAllowDownload(!allowDownload)}
                  />
                  Allow Download
                </label>
              </div>
            )}

            <input
              placeholder="Responsible"
              className="w-full border-b py-2 outline-none"
            />
          </div>
        )}

        {/* DESCRIPTION TAB */}
        {activeTab === "description" && (
          <textarea
            rows={8}
            placeholder="Write your description..."
            className="w-full border rounded-lg p-3 outline-none"
          />
        )}

        {/* ATTACHMENT TAB */}
        {activeTab === "attachment" && (
          <div className="border-dashed border-2 p-10 text-center text-gray-400">
            Upload Additional Attachment
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end mt-8 gap-3">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
