import AllCourses from "./AllCourses";

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
