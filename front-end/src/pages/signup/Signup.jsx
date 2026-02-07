import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8 text-center">

        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            🎓
          </div>
        </div>

        <h2 className="text-sm text-gray-500 mb-1">Enterprise Learning</h2>
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-500 text-sm mb-6">
          Join the corporate learning revolution.
        </p>

        <form className="space-y-4 text-left">
          <div>
            <label className="text-sm">Enter Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Enter Email Id</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Enter Password</label>
            <input
              type="password"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Re-Enter Password</label>
            <input
              type="password"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-3 hover:bg-indigo-700 transition">
            SIGN UP
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 font-medium">
            Sign In
          </Link>
        </p>

        <div className="border-t mt-6 pt-4 text-xs text-gray-400 flex justify-center gap-4">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
}
