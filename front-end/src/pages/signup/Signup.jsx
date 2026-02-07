import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:5001/api/auth/signup";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      toast.success("Signup successful");

      // redirect to login (recommended)
      navigate("/login");

      // OR directly redirect based on role
      // if (res.data.role === "admin") navigate("/admin/dashboard");
      // else if (res.data.role === "manager") navigate("/manager/dashboard");
      // else navigate("/home");

    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8 text-center">

        <h1 className="text-2xl font-bold mb-6">Create Account</h1>

        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-3">
            SIGN UP
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
