import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
// import Feature from "./components/Feature";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { HeroParallax } from "./components/ui/HeroParallax";
import Error from "./components/Error";
import courses from "./components/My Courses/courses";
import CoursesList from "./components/My Courses/CoursesList";
// import { useAuth, auth } from "@clerk/clerk-react";
import SignInPage from "./components/SignIn/SignInPage";
import { useAuth } from "@clerk/clerk-react";
function App() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={isSignedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/about" element={isSignedIn ? <About /> : <Navigate to="/signin" />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/portfolio" element={isSignedIn ? <Portfolio /> : <Navigate to="/signin" />} />
          <Route path="/services" element={isSignedIn ? <Services /> : <Navigate to="/signin" />} />
          <Route path="/courses" element={isSignedIn ? <CoursesList courses={courses} /> : <Navigate to="/signin" />} />
          {/* <Route path="/feature" element={<Feature />} /> */}
          {/* <Route path="/testimonial" element={<Testimonial />} /> */}
          <Route path="/blog" element={isSignedIn ? <Blog /> : <Navigate to="/signin" />} />
          <Route path="/contact" element={isSignedIn ? <Contact /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
