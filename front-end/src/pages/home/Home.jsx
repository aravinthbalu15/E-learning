import CourseCard from "../../components/coursecard/CourseCard";
import ProfileSidebar from "../../components/profilesidebar/ProfileSidebar";
import Nav from "../../components/nav/Navbar";

export default function Home() {
  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-100 p-4 md:p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold mb-1">My Learning Journey</h1>
            <p className="text-gray-500 mb-6">
              Continue where you left off or start a new challenge.
            </p>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {/* Enrolled course */}
              <CourseCard
                title="Basics of Odoo CRM"
                progress={75}
                tags={["Business", "Analytics"]}
                isPaid={false}
              />

              {/* Free course */}
              <CourseCard
                title="Digital Marketing Mastery"
                progress={0}
                tags={["Marketing"]}
                isPaid={false}
              />

              {/* Paid course */}
              <CourseCard
                title="Enterprise Sales Strategy"
                tags={["Sales", "Advanced"]}
                isPaid={true}
                price={499}
              />

            </div>
          </div>

          {/* RIGHT */}
          <ProfileSidebar />

        </div>
      </div>
    </>
  );
}
