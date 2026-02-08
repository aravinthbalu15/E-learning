import { useEffect, useMemo, useState } from "react";
import Nav from "../../components/nav/Navbar";
import CourseCard from "../../components/coursecard/CourseCard";
import ProfileSidebar from "../../components/profilesidebar/ProfileSidebar";
import PublicSidebar from "../../components/publicsidebar/PublicSidebar";
import Footer from "../../components/Footer";
import { courses, variantMap } from "../../data/courses";

const emptyFilters = {
  category: [],
  level: [],
  status: [],
  access: [],
  duration: ""
};

/* ---------------- PAGE ---------------- */

export default function Home() {
  const isAuthenticated =
    typeof window !== "undefined" && Boolean(localStorage.getItem("token"));

  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters] = useState(emptyFilters);
  const [sortBy] = useState("Latest");

  /* -------- SEARCH (ROLE-AWARE) -------- */

  useEffect(() => {
    const t = setTimeout(() => {
      setSearchQuery(searchInput.trim().toLowerCase());
    }, 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (filters.category.length && !filters.category.includes(course.category)) {
        return false;
      }
      if (filters.level.length && !filters.level.includes(course.level)) {
        return false;
      }
      if (filters.status.length && !filters.status.includes(course.status)) {
        return false;
      }
      if (filters.access.length && !filters.access.includes(course.access)) {
        return false;
      }
      if (filters.duration && course.duration !== filters.duration) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const searchedCourses = useMemo(() => {
    if (!searchQuery) return filteredCourses;

    const tokens = searchQuery.split(/\s+/).filter(Boolean);

    return filteredCourses.filter((course) => {
      const searchable = [
        course.title,
        course.description,
        course.category,
        course.level,
        ...(course.skills || [])
      ]
        .join(" ")
        .toLowerCase();

      return tokens.every((token) => searchable.includes(token));
    });
  }, [filteredCourses, searchQuery]);

  const sortedCourses = useMemo(() => {
    const sorted = [...searchedCourses];

    sorted.sort((a, b) => {
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return sorted;
  }, [searchedCourses, sortBy]);

  /* -------- CTA LOGIC (FIXED) -------- */

  const getCtaConfig = (course) => {
    const previewLink = `/course/preview/${course.id}`;
    if (!isAuthenticated) {
      if (course.access === "Paid" || course.access === "Purchased") {
        return { cta: "Buy Now", link: "/buy-now", isPaid: true, previewLink };
      }
      return { cta: "View Details", link: previewLink, previewLink };
    }

    if (course.access === "Paid") {
      return { cta: "Buy Now", link: "/buy-now", isPaid: true, previewLink };
    }

    if (course.status === "In Progress") {
      return { cta: "Continue Learning", link: "/course/coursepage", previewLink };
    }

    if (course.status === "Completed") {
      return { cta: "Review Course", link: "/course/coursepage", previewLink };
    }

    return { cta: "Start Course", link: "/course/coursepage", previewLink };
  };

  return (
    <>
      {/* NAVBAR */}
      <Nav
        searchValue={searchInput}
        onSearchChange={setSearchInput}
      />

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* MAIN CONTENT */}
            <section className="lg:col-span-9 space-y-6">
              {/* HEADER */}
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">
                  {isAuthenticated ? "My Learning Journey" : "Explore Courses"}
                </h1>
                <p className="text-slate-500 mt-1">
                  {isAuthenticated
                    ? "Continue where you left off or start something new."
                    : "Professional courses designed for business growth."}
                </p>
              </div>

              {/* META */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  Showing {sortedCourses.length} of {courses.length} courses
                </p>
                {searchInput && (
                  <button
                    className="text-sm font-semibold text-indigo-600"
                    onClick={() => {
                      setSearchInput("");
                      setSearchQuery("");
                    }}
                  >
                    Clear Search
                  </button>
                )}
              </div>

              {/* GRID */}
              {sortedCourses.length === 0 ? (
                <div className="rounded-2xl bg-white border p-10 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {searchQuery ? "No courses match your search" : "No courses available"}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    {searchQuery
                      ? "Try different keywords or clear filters."
                      : "Check back soon for new courses."}
                  </p>
                  {searchQuery && (
                    <button
                      className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-indigo-200 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition"
                      onClick={() => {
                        setSearchInput("");
                        setSearchQuery("");
                      }}
                      type="button"
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sortedCourses.map((course) => {
                    const cta = getCtaConfig(course);

                    return (
                      <CourseCard
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        category={course.category}
                        level={course.level}
                        price={course.price}
                        originalPrice={course.originalPrice}
                        cta={cta.cta}
                        ctaLink={cta.link}
                        isPaid={cta.isPaid}
                        coverVariant={variantMap[course.category] || "default"}
                        previewLink={cta.previewLink}
                      />
                    );
                  })}
                </div>
              )}
            </section>

            {/* SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                {isAuthenticated ? <ProfileSidebar /> : <PublicSidebar />}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
