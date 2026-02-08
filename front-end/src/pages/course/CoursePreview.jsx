import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../../components/nav/Navbar";
import Footer from "../../components/Footer";
import { courses, variantMap } from "../../data/courses";

const coverStyles = {
  crm: "from-indigo-700/95 via-indigo-800 to-slate-900",
  marketing: "from-emerald-700/90 via-emerald-800 to-slate-900",
  sales: "from-slate-700 via-slate-800 to-slate-950",
  analytics: "from-sky-700/90 via-sky-800 to-slate-900",
  default: "from-slate-700 via-slate-800 to-slate-950"
};

const valueStatements = {
  CRM: "Practical CRM frameworks aligned to enterprise revenue teams.",
  Marketing: "Practical digital marketing frameworks aligned to growth teams.",
  Sales: "Enterprise sales playbooks aligned to pipeline performance.",
  Analytics: "Analytics foundations aligned to executive reporting needs.",
  ERP: "ERP workflows aligned to operational efficiency goals."
};

export default function CoursePreview() {
  const { id } = useParams();
  const isAuthenticated =
    typeof window !== "undefined" && Boolean(localStorage.getItem("token"));

  const course = useMemo(() => {
    if (!id) return courses[0];
    return courses.find((item) => String(item.id) === String(id));
  }, [id]);

  if (!course) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-slate-50">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Course not found
            </h1>
            <p className="text-slate-500 mt-2">
              The course you requested is unavailable.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center mt-6 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const coverVariant = variantMap[course.category] || "default";
  const accessLabel = course.access === "Free" ? "Free" : "Paid";
  const skills = (course.skills || []).slice(0, 5);
  const statement =
    valueStatements[course.category] ||
    `Practical ${course.category.toLowerCase()} frameworks aligned to enterprise teams.`;

  const notRecommended =
    course.level === "Beginner"
      ? "Not recommended for advanced specialists seeking deep specialization."
      : `Not recommended for beginners with no prior ${course.category.toLowerCase()} exposure.`;

  const getCtaConfig = () => {
    if (!isAuthenticated) {
      if (accessLabel === "Paid") {
        return { label: "Buy Now", link: "/buy-now", isPaid: true };
      }
      return { label: "Sign in to Enroll", link: "/login", isPaid: false };
    }

    if (course.access === "Paid") {
      return { label: "Buy Now", link: "/buy-now", isPaid: true };
    }
    if (course.status === "Not Started") {
      return { label: "Start Course", link: "/course/coursepage", isPaid: false };
    }
    return { label: "Continue Learning", link: "/course/coursepage", isPaid: false };
  };

  const cta = getCtaConfig();

  const metaRows = [
    { label: "Category", value: course.category },
    { label: "Level", value: course.level },
    { label: "Duration", value: course.duration || "2-5 hours" },
    { label: "Rating", value: `${course.rating} / 5` },
    { label: "Access", value: accessLabel }
  ];

  if (isAuthenticated) {
    metaRows.push({ label: "Status", value: course.status });
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-slate-50">
        {/* HERO */}
        <section
          className={`bg-gradient-to-br ${coverStyles[coverVariant]} text-white`}
        >
          <div className="max-w-7xl mx-auto px-6 py-14">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/85 text-slate-800">
                  {course.category}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/85 text-slate-800">
                  {course.level}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white">
                  {accessLabel}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {course.title}
              </h1>
              <p className="text-white/80 text-base">{statement}</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
          {/* KEY OUTCOMES / SKILLS */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Key Outcomes
              </h2>
              <p className="text-sm text-slate-500">
                Skill outcomes aligned to enterprise workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 text-slate-600 bg-slate-50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* PROGRAM FIT */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Program Fit</h2>
            <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-600">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Ideal For
                </p>
                <p>
                  Professionals building scalable {course.category} workflows.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Not Recommended For
                </p>
                <p>{notRecommended}</p>
              </div>
            </div>
          </div>

          {/* COURSE META */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Course Overview
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {metaRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-xs text-slate-400 uppercase tracking-[0.2em]">
                    {row.label}
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRIMARY ACTION */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Primary Action</span>
              {accessLabel === "Paid" && typeof course.price === "number" ? (
                <span className="font-semibold text-slate-900">
                  ₹{course.price}
                </span>
              ) : (
                <span className="font-semibold text-slate-900">Free</span>
              )}
            </div>
            <Link
              to={cta.link}
              className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold text-sm transition
                ${
                  cta.isPaid
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }
              `}
            >
              {cta.label}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
