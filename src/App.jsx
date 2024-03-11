import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import {auth } from "@clerk/clerk-react";
import SignInPage from "./components/SignIn/SignInPage";

function App() {
  // const {userId} = await auth();
  // const isAuth = !!userId;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        {/* <SignInPage /> */}
        <Routes>
          <Route path="*" element={<Error />} />
          {/* {!isAuth ? (
             <SignIn />
          ):(  <><Route path="/" element={<Home />} /></>)} */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<CoursesList courses={courses} />} />
          {/* <Route path="/feature" element={<Feature />} /> */}
          {/* <Route path="/testimonial" element={<Testimonial />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
