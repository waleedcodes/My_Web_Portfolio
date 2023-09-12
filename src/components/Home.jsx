import React from "react";
import img2 from "../assets/men.jpg";
import TextTransition, { presets } from "react-text-transition";
import { NavLink } from "react-router-dom";

const TEXTS = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "React Js",
  "MongoDB",
  "GitHub",
  "Git",
  "Rest Api",
];

const Home = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="home">
        <div className="row_main">
          <div className="row gx-0">
            <div className="col-md-3"></div>
            {/* ******************* */}
            <div className="col-md-6">
              {/* ******************* */}
              <div className="home_col">
                <img src={img2} alt="" className="img-fluid" />
                <h3>Hello, My Name is</h3>
                <h1>
                  Waleed <span>Ishfaq</span>
                </h1>
                <h2>A passionate Web Developer who works on</h2>
                <div className="home_text">
                  <h4>
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </h4>
                </div>
                <div className="home_btns">
                  <button type="button" className="home_btn1">
                    <NavLink to="/about">HIRE ME</NavLink>
                  </button>
                  <button type="button" className="home_btn2">
                    <NavLink to="/about">ABOUT ME</NavLink>
                  </button>
                </div>
              </div>
            </div>
            {/* ******************* */}
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      {/* ********* */}
      {/* ********* */}
    </>
  );
};

export default Home;
