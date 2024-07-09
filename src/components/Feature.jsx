import React from "react";
import img1 from "../assets/feature-photo.png";
import img2 from "../assets/feature_icon1.png";
import img3 from "../assets/feature_icon2.png";
import img4 from "../assets/feature_icon3.png";

const Feature = () => {
  return (
    <>
      <div className="section5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6 py-3 py-md-0" data-aos="fade-down">
              <div className="sec5_col1 py-5 py-md-0">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="sec5_col2">
                <h4>WHY WORK WITH ME</h4>
                <h1>
                  Best Result With <span>Top User </span>
                </h1>
                <h1>Experience</h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <div className="row pt-3">
                  <div className="col-2">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-10 px-5 px-md-0">
                    <h3>Lifetime Support</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                {/* ************** */}
                <div className="row pt-3">
                  <div className="col-2">
                    <img src={img3} alt="" />
                  </div>
                  <div className="col-10 px-5 px-md-0">
                    <h3>Coding Required</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                {/* ************** */}
                <div className="row pt-3">
                  <div className="col-2">
                    <img src={img4} alt="" />
                  </div>
                  <div className="col-10 px-5 px-md-0">
                    <h3>Regular Updates</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                {/* ************** */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
