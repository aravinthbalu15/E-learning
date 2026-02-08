import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:5001/api/auth/login";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(API, {
        ...formData,
        email: formData.email.trim()
      });

      const { token, role } = res.data;

      // Save token
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      toast.success("Login successful");

      // Role-based redirect
      if (role === "admin") navigate("/admin/Admin-home");
      else if (role === "manager") navigate("/manager/dashboard");
      else navigate("/");

    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8 text-center">

        <h2 className="text-xl font-semibold mb-6">
          Enterprise Learning Portal
        </h2>

        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-3 hover:bg-indigo-700 transition">
            SIGN IN
          </button>
        </form>

        <div className="text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}
