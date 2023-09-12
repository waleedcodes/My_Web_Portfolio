import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
// import ChangingProgressProvider from "./ChangingProgressProvider";

const Skills = () => {
  const ab = 100;
  const cd = 95;
  const ef = 80;
  const gh = 85;
  const ij = 70;
  return (
    <>
      <div className="skills">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="skill_col1">
                <h5>MY SKILLS</h5>
                <h1>I am great in what I</h1>
                <h1>do and I am loving it</h1>
                <p>
                  My skill set includes proficiency in HTML, CSS, JavaScript,
                  and popular frameworks like React. I have experience in
                  creating responsive, interactive websites and web
                  applications. Additionally, I am skilled in version control
                  systems, troubleshooting, and staying updated with the latest
                  web development trends
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill_col2">
                <div className="row ">
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ab} text={`${ab}%`} />
                      <h3>HTML</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>CSS</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>Bootstrap</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ef} text={`${ef}%`} />
                      <h3>JavaScript</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={gh} text={`${gh}%`} />
                      <h3>React Js</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ij} text={`${ij}%`} />
                      <h3>MongoDB</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
