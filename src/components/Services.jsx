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
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1>
                <img src={img1} alt="" />
                SERVICE
                <img src={img2} alt="" />
              </h1>
              <p className="px-5 px-md-5">
                As a dedicated Frontend Developer and proficient MERN stack
                specialist, I offer a comprehensive range of services to enhance
                your web presence
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row gx-0 py-md-4 py-3 px-2 p-md-0">
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Frontend Development</h2>
                <p>
                  Crafting visually captivating and responsive user interfaces
                  using HTML, CSS, and JavaScript to captivate your audience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img4} alt="" />
                <h2>MERN Stack Development</h2>
                <p>
                  Building robust web applications with MongoDB, Express.js,
                  React, and Node.js, ensuring seamless functionality and user
                  experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img5} alt="" />
                <h2>Custom UI/UX Development</h2>
                <p>
                  Tailoring user interfaces and experiences to your brand and
                  audience, making your website intuitive and enjoyable to
                  navigate.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img5} alt="" />
                <h2>Custom Web Apps</h2>
                <p>
                  Designing and developing tailor-made web applications to
                  address your specific needs and business goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img5} alt="" />
                <h2>PSD To HTML CSS JavaScript</h2>
                <p>
                  Effortlessly bring your PSD designs to life with our precise
                  PSD to HTML/CSS/JavaScript conversion service. Achieve
                  pixel-perfect, responsive web solutions.
                </p>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-up">
                <img src={img5} alt="" />
                <h2>Responsive Design</h2>
                <p>
                  Ensuring your digital assets look and function flawlessly on
                  various devices, from desktops to smartphones.
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
