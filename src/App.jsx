import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Feature />
      <Testimonial />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>about</h1>} />
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
