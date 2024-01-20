import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_main container-fluid">
        <div className="container navbar-col gx-0">
          {/* <a className="navbar-brand" href="#">
            <h2>
              waleed <span>codes</span>
            </h2>
          </a> */}
          <NavLink className="navbar-brand" to="/">
            {/* <h2>
              waleed <span>codes</span>
            </h2> */}
            <h2>Waleed</h2>
            <h2>Waleed</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto nav_ul">
              <li className="nav-item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills"> Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services"> Services</NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink to="/portfolio"> Portfoilo</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/feature"> Feature</NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink to="/testimonial"> Testimonial</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/blog"> Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact"> Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
