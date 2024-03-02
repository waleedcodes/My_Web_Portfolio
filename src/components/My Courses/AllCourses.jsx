const AllCourses = ({ course }) => {
  return (
    <>
      <div className="">
        <div className="col">
          <h5 className="text-white">{course.title}</h5>
          <p className="">{course.description}</p>
          <p className="">Instructor: {course.instructor}</p>
        </div>
      </div>
      {/* ***************************** */}

      {/* ***************************** */}
    </>
  );
};

export default AllCourses;
