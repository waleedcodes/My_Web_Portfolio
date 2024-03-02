import AllCourses from "./AllCourses";

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <AllCourses key={index} course={course} />
      ))}
    </div>
  );
};

export default Courses;
