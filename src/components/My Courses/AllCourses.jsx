const AllCourses = ({ course }) => {
  return (
    <div className=" mb-3">
      <div className="">
        <h5 className="">{course.title}</h5>
        <p className="">{course.description}</p>
        <p className="">Instructor: {course.instructor}</p>
      </div>
    </div>
  );
};

export default AllCourses;
