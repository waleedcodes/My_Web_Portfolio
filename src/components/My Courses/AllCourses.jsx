import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/i1.png";
import img4 from "../../assets/i2.png";
import img5 from "../../assets/i3.png";

const AllCourses = ({ course }) => {
  return (
    <>
      <div className=" mb-3">
        <div className="">
          <h5 className="">{course.title}</h5>
          <p className="">{course.description}</p>
          <p className="">Instructor: {course.instructor}</p>
        </div>
      </div>
      {/* ***************************** */}
      <div className="about">
        <div className="container gx-0">
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
          <div className="row gx-0 py-md-4 py-3 px-2 p-md-0">
            <div className="col-md-4">
              <div className="about-col1" data-aos="fade-down">
                <img src={img3} alt="" />
                <h2>Frontend Development</h2>
                <p>
                  Crafting visually captivating and responsive user interfaces
                  using HTML, CSS, and JavaScript to captivate your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************** */}
    </>
  );
};

export default AllCourses;
