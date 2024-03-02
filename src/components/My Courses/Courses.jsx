const Courses = ({ course }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <p className="card-text">Instructor: {course.instructor}</p>
      </div>
    </div>
  );
};

export default Courses;
