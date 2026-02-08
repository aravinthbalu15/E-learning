export default function ProfileSidebar() {
  const storage = typeof window !== "undefined" ? localStorage : null;
  const userName =
    (storage ? storage.getItem("name") : null) ||
    (storage ? storage.getItem("userName") : null) ||
    "Alex Morgan";

  const currentLevel = "Professional";
  const progress = 65;
  const learningCredits = 120;
  const certifications = 3;
  const learningHours = "48h";
  const levels = [
    "Foundation",
    "Associate",
    "Professional",
    "Advanced",
    "Expert"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-5">
      <div className="space-y-1">
        <p className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Profile
        </p>
        <h2 className="font-semibold text-slate-900">Skill Progress Overview</h2>
        <p className="text-sm text-slate-500">{userName}</p>
      </div>

      <div className="rounded-xl bg-slate-50 p-4 space-y-2 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Total learning credits</span>
          <span className="font-semibold text-slate-900">
            {learningCredits}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Current proficiency</span>
          <span className="font-semibold text-slate-900">{currentLevel}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Certifications earned</span>
          <span className="font-semibold text-slate-900">{certifications}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Learning hours</span>
          <span className="font-semibold text-slate-900">{learningHours}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Overall progress</span>
          <span className="font-semibold text-slate-700">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Proficiency Levels
        </p>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <span
              key={level}
              className={`text-xs px-3 py-1 rounded-full border ${
                level === currentLevel
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-500 border-slate-200"
              }`}
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
