import { useEffect, useMemo, useRef, useState } from "react";
import Nav from "../../components/nav/Navbar";
import CourseCard from "../../components/coursecard/CourseCard";
import ProfileSidebar from "../../components/profilesidebar/ProfileSidebar";

/* ---------------- CONFIG ---------------- */

const filterOptions = {
  category: ["CRM", "Sales", "Marketing", "Analytics", "ERP"],
  level: ["Beginner", "Intermediate", "Advanced"],
  status: ["Not Started", "In Progress", "Completed"],
  access: ["Free", "Paid", "Purchased"],
  duration: ["< 1 hour", "1-2 hours", "2-5 hours", "5+ hours"],
};

const sortOptions = [
  "Latest",
  "Most Relevant",
  "Highest Rated",
  "Progress",
  "Price: Low to High",
  "Price: High to Low",
];

const courses = [
  {
    id: 1,
    title: "Basics of Odoo CRM",
    description:
      "Manage customers, track leads, automate pipelines, and improve conversion rates.",
    category: "CRM",
    level: "Beginner",
    status: "In Progress",
    access: "Purchased",
    duration: "2-5 hours",
    createdAt: "2025-11-12",
    rating: 4.7,
    price: 0,
    progress: 75,
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description:
      "SEO, paid ads, analytics, and conversion optimization strategies.",
    category: "Marketing",
    level: "Intermediate",
    status: "Not Started",
    access: "Free",
    duration: "2-5 hours",
    createdAt: "2025-10-05",
    rating: 4.6,
    price: 0,
    progress: 0,
  },
  {
    id: 3,
    title: "Enterprise Sales Strategy",
    description:
      "Enterprise sales playbooks, negotiation techniques, and B2B deal management.",
    category: "Sales",
    level: "Advanced",
    status: "Not Started",
    access: "Paid",
    duration: "5+ hours",
    createdAt: "2026-01-15",
    rating: 4.9,
    price: 500,
    originalPrice: 1200,
    progress: 0,
  },
  {
    id: 4,
    title: "GA4 Analytics Foundations",
    description:
      "GA4 setup, reporting, and interpretation of engagement metrics.",
    category: "Analytics",
    level: "Beginner",
    status: "Completed",
    access: "Free",
    duration: "1-2 hours",
    createdAt: "2025-08-22",
    rating: 4.5,
    price: 0,
    progress: 100,
  },
  {
    id: 5,
    title: "ERP Inventory Control with Odoo",
    description:
      "Automate inventory, replenishment, and stock forecasting.",
    category: "ERP",
    level: "Intermediate",
    status: "In Progress",
    access: "Purchased",
    duration: "2-5 hours",
    createdAt: "2025-12-01",
    rating: 4.4,
    price: 0,
    progress: 45,
  },
  {
    id: 6,
    title: "HubSpot Pipeline Automation",
    description:
      "Build automated deal stages and sales alerts.",
    category: "CRM",
    level: "Intermediate",
    status: "Not Started",
    access: "Paid",
    duration: "1-2 hours",
    createdAt: "2025-09-20",
    rating: 4.8,
    price: 350,
    originalPrice: 900,
    progress: 0,
  },
];

const variantMap = {
  CRM: "crm",
  Marketing: "marketing",
  Sales: "sales",
  Analytics: "crm",
  ERP: "sales",
};

const emptyFilters = {
  category: [],
  level: [],
  status: [],
  access: [],
  duration: "",
};

/* ---------------- PAGE ---------------- */

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");

  /* -------- FILTER & SEARCH -------- */

  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return courses.filter((course) =>
      [course.title, course.description, course.category]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [searchQuery]);

  /* -------- SORT -------- */

  const sortedCourses = useMemo(() => {
    const sorted = [...filteredCourses];
    sorted.sort((a, b) => {
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return sorted;
  }, [filteredCourses, sortBy]);

  const getCtaConfig = (course) => {
    if (course.access === "Paid")
      return { cta: "Buy Now", ctaLink: "/buy-now", isPaid: true };
    if (course.status === "In Progress")
      return { cta: "Continue Learning", ctaLink: "/course/coursepage" };
    if (course.status === "Completed")
      return { cta: "Review Course", ctaLink: "/course/coursepage" };
    return { cta: "Start Course", ctaLink: "/course/coursepage" };
  };

  return (
    <>
      <Nav searchValue={searchQuery} onSearchChange={setSearchQuery} />

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* MAIN CONTENT */}
            <section className="lg:col-span-9 space-y-6">
              <div>
                <h1 className="text-3xl font-semibold text-slate-900">
                  My Learning Journey
                </h1>
                <p className="text-slate-500 mt-1">
                  Continue where you left off or start a new challenge.
                </p>
              </div>

              {/* COURSE GRID — SEPARATE CARDS */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sortedCourses.map((course) => {
                  const ctaConfig = getCtaConfig(course);
                  return (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      status={course.status}
                      tags={[course.category, course.level, course.access]}
                      progress={course.progress}
                      price={course.price}
                      originalPrice={course.originalPrice}
                      rating={course.rating}
                      cta={ctaConfig.cta}
                      ctaLink={ctaConfig.ctaLink}
                      isPaid={ctaConfig.isPaid}
                      variant={variantMap[course.category]}
                      heroSubtitle={course.level}
                    />
                  );
                })}
              </div>
            </section>

            {/* PROFILE SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <ProfileSidebar />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}