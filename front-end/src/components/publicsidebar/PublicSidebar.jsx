export default function PublicSidebar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-5">
      <div className="space-y-2">
        <p className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Professional Skill Framework
        </p>
        <h2 className="text-lg font-semibold text-slate-900">
          Role-based learning built for enterprise teams.
        </h2>
        <p className="text-sm text-slate-500">
          Structured paths and certification tiers that map directly to business
          outcomes.
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Role-Based Learning Paths
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>Sales Enablement</li>
          <li>CRM Operations</li>
          <li>Marketing Analytics</li>
          <li>ERP Functional Consulting</li>
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Certification Levels
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>Foundation Level</li>
          <li>Associate Level</li>
          <li>Professional Level</li>
          <li>Advanced Practitioner</li>
          <li>Domain Expert</li>
        </ul>
      </div>
    </div>
  );
}
