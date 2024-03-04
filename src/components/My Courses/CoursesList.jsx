import AllCourses from "./AllCourses";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import "./Course.css";

const CoursesList = ({ courses }) => {
  return (
    <>
      {/* <div>
        {courses.map((course, index) => (
          <AllCourses key={index} course={course} />
        ))}
      </div> */}
      {/* // ******************************** */}
      <div className="about">
        <div className="row text-center gx-0">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="pb-3">
              <img src={img1} alt="" />
              My Courses
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
        <div className="container">
          <div className="Main_courses">
            {courses.map((course, index) => (
              <AllCourses key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
      {/* // ******************************** */}
    </>
  );
};

export default CoursesList;
