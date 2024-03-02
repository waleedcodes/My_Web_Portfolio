import AllCourses from "./AllCourses";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/i1.png";
import img4 from "../../assets/i2.png";
import img5 from "../../assets/i3.png";

const CoursesList = ({ courses }) => {
  return (
    <>
      <div>
        {courses.map((course, index) => (
          <AllCourses key={index} course={course} />
        ))}
      </div>
      {/* // ******************************** */}
      {/* // ******************************** */}
    </>
  );
};

export default CoursesList;
