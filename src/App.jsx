import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import DevPortfolio from "./components/DevPortfolio";
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
          {/* <Route
            path="/"
            element={<Home /> }
          />{" "} */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/devportfolio" element={<DevPortfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<CoursesList courses={courses} />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/contact"
            element={isSignedIn ? <Contact /> : <Navigate to="/signin" />}
          />
          ``
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        {/* <Routes>
          <Route path="*" element={<Error />} />
       
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={isSignedIn ? <About /> : <Navigate to="/signin" />}
          />

          <Route
            path="/portfolio"
            element={isSignedIn ? <Portfolio /> : <Navigate to="/signin" />}
          />
          <Route
            path="/services"
            element={isSignedIn ? <Services /> : <Navigate to="/signin" />}
          />
          <Route
            path="/courses"
            element={
              isSignedIn ? (
                <CoursesList courses={courses} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />

          <Route
            path="/blog"
            element={isSignedIn ? <Blog /> : <Navigate to="/signin" />}
          />
          <Route
            path="/contact"
            element={isSignedIn ? <Contact /> : <Navigate to="/signin" />}
          />
          <Route path="/signin" element={<SignInPage />} />
        </Routes> */}

        <Footer />
      </Router>
    </>
  );
}

export default App;
