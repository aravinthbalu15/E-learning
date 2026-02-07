import { Link } from "react-router-dom";

export default function CourseCard({
  status,
  title,
  description,
  tags = [],
  progress = 0,
  price,
  originalPrice,
  rating,
  cta,
  ctaLink,
  isPaid = false,
  variant = "crm",
  heroTitle,
  heroSubtitle
}) {
  const formatCurrency = (value) => {
    if (typeof value !== "number") return value;
    return new Intl.NumberFormat("en-IN").format(value);
  };
  const currencySymbol = "\u20B9";

  const statusStyles = {
    "IN PROGRESS": "bg-indigo-100 text-indigo-700",
    NEW: "bg-amber-100 text-amber-700",
    "PAID CONTENT": "bg-emerald-100 text-emerald-700"
  };

  const headerClasses = {
    crm: "from-[#0c1f2b] via-[#173a4a] to-[#0e3440]",
    marketing: "from-[#2a3f3a] via-[#39544b] to-[#2b4a42]",
    sales: "from-[#161616] via-[#1f1f1f] to-[#0f0f0f]"
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
      <div
        className={`relative h-44 bg-gradient-to-br ${headerClasses[variant]} flex items-center justify-center overflow-hidden`}
      >
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${statusStyles[status]}`}
        >
          {status === "PAID CONTENT" && (
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          )}
          {status}
        </span>

        {variant === "crm" && (
          <div className="absolute inset-0">
            <div className="absolute -left-8 -top-6 w-48 h-48 rounded-full bg-sky-400/40 blur-2xl" />
            <div className="absolute right-6 bottom-6 w-32 h-32 rounded-full bg-emerald-400/30 blur-2xl" />
            <div className="absolute left-10 top-10 w-28 h-20 rounded-xl border border-white/25 bg-white/5" />
            <div className="absolute left-16 top-16 w-16 h-8 rounded-lg border border-white/25 bg-white/10" />
          </div>
        )}

        {variant === "marketing" && (
          <div className="absolute inset-0">
            <div className="absolute left-8 top-8 w-40 h-40 rounded-full bg-amber-200/10" />
            <div className="absolute right-6 bottom-6 w-24 h-24 rounded-full bg-emerald-200/10" />
            <div className="absolute left-10 bottom-8 w-20 h-10 border border-white/15 rounded-full" />
          </div>
        )}

        {variant === "sales" && (
          <div className="absolute inset-0">
            <div className="absolute -left-10 -top-10 w-52 h-52 rounded-full bg-amber-400/10 blur-2xl" />
            <div className="absolute right-4 bottom-2 w-40 h-40 rounded-full bg-amber-300/10 blur-2xl" />
          </div>
        )}

        <div className="relative text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">
            {heroSubtitle || "Learning"}
          </p>
          <h2 className="text-2xl font-semibold tracking-wide text-white/90">
            {heroTitle || title}
          </h2>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 leading-tight">{title}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        {!isPaid ? (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>{progress === 0 ? "Not started" : "Progress"}</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-slate-400 line-through">
                {currencySymbol}
                {formatCurrency(originalPrice)}
              </span>
              <span className="ml-2 text-lg font-semibold text-slate-900">
                {currencySymbol}
                {formatCurrency(price)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l2.9 5.88 6.5.94-4.7 4.58 1.1 6.44L12 17.77 6.2 19.84l1.1-6.44-4.7-4.58 6.5-.94L12 2z" />
              </svg>
              {rating}
            </div>
          </div>
        )}

        {ctaLink ? (
          <Link
            to={ctaLink}
            className={`w-full block py-2.5 rounded-xl font-semibold text-sm transition text-center
              ${
                isPaid
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : progress === 0
                    ? "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
              }
            `}
          >
            {cta}
          </Link>
        ) : (
          <button
            className={`w-full py-2.5 rounded-xl font-semibold text-sm transition
              ${
                isPaid
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : progress === 0
                    ? "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
              }
            `}
            type="button"
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  );
}
