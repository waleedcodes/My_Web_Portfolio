import React from "react";
// import { CircularProgressbar } from "react-circular-progressbar";

// import "react-circular-progressbar/dist/styles.css";
// import ChangingProgressProvider from "./ChangingProgressProvider";

const Skills = () => {
  // const ab = 100;
  // const cd = 95;
  // const ef = 80;
  // const gh = 85;
  // const ij = 70;
  return (
    <>
      <div className="skills">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row gx-0 align-items-center">
            <h1>MY SKILLS</h1>
            <div className="col-md-6">
              <div className="skill_col1">
                <div className="skill">
                  <div className="skill-name">HTML</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="100%"
                      style={{ maxWidth: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">CSS</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="100%"
                      style={{ maxWidth: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">
                    {" "}
                    <div className="skill-name">Bootstrap 3/4/5</div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="100%"
                      style={{ maxWidth: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">Javascript</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="100%"
                      style={{ maxWidth: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">React JS</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="95%"
                      style={{ maxWidth: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">Tailwind CSS</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="80%"
                      style={{ maxWidth: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill_col2">
                <div className="skill">
                  <div className="skill-name">GitHub</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="90%"
                      style={{ maxWidth: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">Git</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="90%"
                      style={{ maxWidth: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">MongoDB</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="80%"
                      style={{ maxWidth: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">Node JS</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="75%"
                      style={{ maxWidth: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">Strapi</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="80%"
                      style={{ maxWidth: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-name">REST API</div>
                  <div className="skill-bar">
                    <div
                      className="skill-percentage"
                      per="80%"
                      style={{ maxWidth: "80%" }}
                    ></div>
                  </div>
                </div>
                {/* <div className="row ">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
