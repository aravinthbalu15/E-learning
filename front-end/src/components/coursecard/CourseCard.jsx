import { Link, useNavigate } from "react-router-dom";

export default function CourseCard({
  title,
  description,
  category,
  level,
  price,
  originalPrice,
  cta,
  ctaLink,
  isPaid = false,
  coverVariant = "default",
  previewLink
}) {
  const currencySymbol = "\u20B9";
  const isPaidCourse = typeof price === "number" && price > 0;
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (previewLink) {
      navigate(previewLink);
    }
  };

  const handleKeyDown = (event) => {
    if (!previewLink) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(previewLink);
    }
  };

  const coverStyles = {
    crm: "from-indigo-600 to-indigo-800",
    marketing: "from-emerald-600 to-emerald-800",
    sales: "from-slate-700 to-slate-900",
    analytics: "from-sky-600 to-sky-800",
    default: "from-slate-600 to-slate-800"
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition h-full flex flex-col overflow-hidden ${
        previewLink ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role={previewLink ? "button" : undefined}
      tabIndex={previewLink ? 0 : undefined}
      aria-label={previewLink ? `Open ${title} preview` : undefined}
    >
      {/* COVER */}
      <div
        className={`h-36 bg-gradient-to-br ${coverStyles[coverVariant]} flex items-end`}
      >
        <div className="p-4 flex gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-slate-800">
            {category}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-slate-800">
            {level}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex-1 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-1">
          {description}
        </p>

        <div className="mt-auto">
          {isPaidCourse ? (
            <div className="flex items-center gap-2">
              {typeof originalPrice === "number" && (
                <span className="text-sm text-slate-400 line-through">
                  {currencySymbol}
                  {originalPrice}
                </span>
              )}
              <span className="text-xl font-semibold text-slate-900">
                {currencySymbol}
                {price}
              </span>
            </div>
          ) : (
            <p className="text-sm font-medium text-slate-500">Available</p>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <Link
          to={ctaLink}
          onClick={(event) => event.stopPropagation()}
          className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition
            ${
              isPaid
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }
          `}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
