import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="footer_main container">
          <div className="footer_1">
            <a className="navbar-brand my-3" href="#">
              <h2>Waleed</h2>
              <h2>Waleed</h2>
            </a>
            <p className="mt-4">
              Let's build something incredible together. Reach out via email or
              connect on LinkedIn and GitHub. Explore my portfolio for more.
            </p>
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
          <div className="footer_2">
            <h4 className="pb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Testimonals</a>
              </li>
            </ul>
          </div>
          <div className="footer_3">
            <h4 className="pb-2">Leave A Message</h4>
            <form action="/contact">
              <div className="footer_3_input mt-4">
                <input type="email" placeholder="Email Address" required />
                <button className="btn3" type="submit">
                  Send
                </button>
              </div>
            </form>
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
