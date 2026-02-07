import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import CourseDetails from "./pages/course/CoursePage";
        import LessonPlayer from "./pages/lesson/LessonPlayer";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<CourseDetails />} />

      <Route path="/lesson-player" element={<LessonPlayer />} />


      </Routes>
    </BrowserRouter>
  );
}
