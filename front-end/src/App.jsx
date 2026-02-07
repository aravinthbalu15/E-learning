import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import CourseDetails from "./pages/course/CoursePage";
import LessonPlayer from "./pages/lesson/LessonPlayer";
import BuyNow from "./pages/buy/BuyNow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<CourseDetails />} />
        <Route path="/course/coursepage" element={<CourseDetails />} />
        <Route path="/buy-now" element={<BuyNow />} />

        <Route path="/lesson-player" element={<LessonPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
