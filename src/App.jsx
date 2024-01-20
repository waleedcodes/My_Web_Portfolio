import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/feature" element={<Feature />} /> */}
          {/* <Route path="/testimonial" element={<Testimonial />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
