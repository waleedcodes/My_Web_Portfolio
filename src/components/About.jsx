// import React from "react";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/i2.png";
import img5 from "../assets/i3.png";
import img6 from "../assets/about-main.png";

const About = () => {
  // const card = document.querySelector(".sec1_col1");
  // const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  // const THRESHOLD = 2;
  // function handleHover(e) {
  //   const { clientX, clientY, currentTarget } = e;
  //   const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  //   const horizontal = (clientX - offsetLeft) / clientWidth;
  //   const vertical = (clientY - offsetTop) / clientHeight;
  //   const rotateX = (THRESHOLD / 1 - horizontal * THRESHOLD).toFixed(1);
  //   const rotateY = (vertical * THRESHOLD - THRESHOLD / 1).toFixed(1);

  //   card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  // }

  // function resetStyles(e) {
  //   card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  // }

  // if (!motionMatchMedia.matches) {
  //   card.addEventListener("mousemove", handleHover);
  //   card.addEventListener("mouseleave", resetStyles);
  // }

  return (
    <>
      <div className="about">
        <div className="container gx-0">
          <div className="row text-center gx-0">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>
                <img src={img1} alt="" /> WELCOME TO MY WORLD
                <img src={img2} alt="" />
              </h1>
              <p className="px-5 px-md-5">
                I am a young Guy, My aim is to become a full-stack developer and
                machine learner.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0 py-md-4 py-3 px-2 p-md-0">
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Creativity</h2>
                <p>
                  Duis aute irure dolor in it esse cillum dolore eu fugiat nulla
                  pari erunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>Dedication</h2>
                <p>
                  Duis aute irure dolor in it esse cillum dolore eu fugiat nulla
                  pari erunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-left">
                <img src={img5} alt="" />
                <h2>Hard Work</h2>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui offi llit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
      <div className="section1">
        <div className="container gx-0 px-md-0 px-3">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6" data-aos="fade-down">
              <div className="sec1_col1">
                <img src={img6} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="sec1_col2">
                <h4>ABOUT ME</h4>
                <h1>
                  I am a <span>Web Developer</span>, I
                </h1>
                <h1>Work From Anywhere</h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p>
                  Tabore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <div className="row gx-0">
                  <div className="col-md-6">
                    <h5>NAME :</h5>
                    <p>Waleed Ishfaq</p>
                    <h5>EMAIL :</h5>
                    <p>waleedishfaq1515@gmail.com</p>
                    <h5>PHONE NO :</h5>
                    <p>123456789</p>
                  </div>
                  <div className="col-md-6">
                    <h5>AGE :</h5>
                    <p>18</p>
                    <h5>EDUCATION :</h5>
                    <p>D.COM</p>
                    <h5>WEB DEVELOPER :</h5>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
      {/* ************************************* */}
    </>
  );
};

export default About;
