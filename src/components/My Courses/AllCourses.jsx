const AllCourses = ({ course }) => {
  return (
    <>
      {/* <div className="">
        <div className="col">
          <h5 className="text-white">{course.title}</h5>
          <p className="">{course.description}</p>
          <p className="">Instructor: {course.instructor}</p>
        </div>
      </div> */}
      {/* ***************************** */}
      <div className="">
        <div className="about-col1" data-aos="fade-up">
          <h4 className="text-white">{course.title}</h4>
          <p className="">{course.description}</p>
          <h6 className="text-white"><b>Instructor:</b> {course.instructor}</h6>
        </div>
      </div>
      {/* ***************************** */}
    </>
  );
};

export default AllCourses;
