import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="footer_main container">
          <div className="row text-center">
            <div className="footer_1 col-md-12">
              <h2 className="pb-4">Lets Connect</h2>
              <ul className=" ms-auto nav_ul d-inline-flex">
                <li className="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink to="/skills"> Skills</NavLink>
              </li> */}
                <li className="nav-item">
                  <NavLink to="/services"> Services</NavLink>
                </li>{" "}
                <li className="nav-item">
                  <NavLink to="/courses"> Courses</NavLink>
                </li>
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
                  <NavLink to="/contact"> Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog"> Blog</NavLink>
                </li>
              </ul>
              <div className="ft_icon">
                <a
                  href="https://www.facebook.com/waleedcodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/@waleedcodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/waleedcodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/waleedcodes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/waleedcodes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ******************************************** --> */}
      <div className="footer_end">
        <p>
          © 2024{" "}
          <a href="http://waleedcodes.com/" target="_blank" rel="noreferrer">
            waleedcodes.com
          </a>{" "}
          | All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
