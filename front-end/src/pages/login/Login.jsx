import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">
            L
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">
          Enterprise Learning Portal
        </h2>

        <form className="space-y-4 text-left">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-3 hover:bg-indigo-700 transition">
            SIGN IN
          </button>
        </form>

        <div className="text-sm text-gray-500 mt-4">
          Forget Password?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium">
            Sign Up
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          © 2024 Enterprise Learning Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}
