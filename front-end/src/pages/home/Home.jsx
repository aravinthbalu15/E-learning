import Nav from "../../components/nav/Navbar";
import CourseCard from "../../components/coursecard/CourseCard";
import ProfileSidebar from "../../components/profilesidebar/ProfileSidebar";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <section className="lg:col-span-9 space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-900">
                    My Learning Journey
                  </h1>
                  <p className="text-slate-500 mt-1">
                    Continue where you left off or start a new challenge today.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 text-sm bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 font-semibold flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 6h16" />
                      <path d="M6 12h12" />
                      <path d="M10 18h4" />
                    </svg>
                    Filter
                  </button>
                  <button className="px-4 py-2 text-sm bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 font-semibold flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 6h18" />
                      <path d="M7 12h10" />
                      <path d="M10 18h4" />
                    </svg>
                    Sort by Latest
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    status="IN PROGRESS"
                    title="Basics of Odoo CRM"
                    description="Master customer relationship management with industry standard tools."
                    tags={["Business", "Analytics"]}
                    progress={75}
                    cta="Continue Learning"
                    ctaLink="/course/coursepage"
                    variant="crm"
                    heroTitle="Odoo CRM"
                    heroSubtitle="In Progress"
                  />

                  <CourseCard
                    status="NEW"
                    title="Digital Marketing Mastery"
                    description="A comprehensive guide to modern digital marketing strategies."
                    tags={["Marketing"]}
                    progress={0}
                    cta="Start Course"
                    ctaLink="/course/coursepage"
                    variant="marketing"
                    heroTitle="Minimal Marketing"
                    heroSubtitle="Safe Work"
                  />

                  <CourseCard
                    status="PAID CONTENT"
                    title="Enterprise Sales Strategy"
                    description="Deep dive into enterprise-level sales funnels and negotiation tactics."
                    tags={["Advanced", "Sales"]}
                    price={500}
                    originalPrice={1200}
                    rating={4.9}
                    cta="Buy Now"
                    ctaLink="/buy-now"
                    isPaid
                    variant="sales"
                    heroTitle="Sales"
                    heroSubtitle="Enterprise"
                  />
                </div>
              </div>
            </section>

            <aside className="lg:col-span-3 self-start">
              <div className="lg:sticky lg:top-24">
                <ProfileSidebar />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg grid place-items-center text-slate-600 hover:bg-slate-50">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      </button>
    </>
  );
}
