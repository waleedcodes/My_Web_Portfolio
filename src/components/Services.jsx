import React from "react";

import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/i1.png";
import img4 from "../assets/i2.png";
import img5 from "../assets/i3.png";

const Services = () => {
  return (
    <>
      <div className="about">
        <div className="container gx-0">
          <div className="row text-center gx-0">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>
                <img src={img1} alt="" />
                SERVICE
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
                <h2>HTML CSS JS</h2>
                <p>
                  Enterprise-class websites need consistent colors, fonts, and
                  design to match the organizations branding guidelines.
                  Toptal’s front-end developers are experts at designing
                  responsive websites, with CSS at the core of front end
                  development alongside JavaScript and HTML.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>HTML CSS Bootstap</h2>
                <p>
                  Enterprise-class websites need consistent colors, fonts, and
                  design to match the organizations branding guidelines.
                  Toptal’s front-end developers are experts at designing
                  responsive websites, with CSS at the core of front end
                  development alongside JavaScript and HTML.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-left">
                <img src={img5} alt="" />
                <h2>Responsive Websites</h2>
                <p>
                  Enterprise-class websites need consistent colors, fonts, and
                  design to match the organizations branding guidelines.
                  Toptal’s front-end developers are experts at designing
                  responsive websites, with CSS at the core of front end
                  development alongside JavaScript and HTML.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-left">
                <img src={img5} alt="" />
                <h2>PSD to Bootstrap</h2>
                <p>
                  Toptal front-end developers convert PSD, Sketch, Ai, and Adobe
                  XD files into pixel-perfect standards that are compliant with
                  HTML5/CSS3/Bootstrap3/4 templates.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-left">
                <img src={img5} alt="" />
                <h2>PSD To HTML</h2>
                <p>
                  Toptal front-end developers convert PSD, Sketch, Ai, and Adobe
                  XD files into pixel-perfect standards that are compliant with
                  HTML5/CSS3/Bootstrap3/4 templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}
    </>
  );
};

export default Services;
