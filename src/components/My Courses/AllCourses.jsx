import { NavLink } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
const AllCourses = ({ course }) => {
  const executeOnClick = () => {
    console.log("see more");
  };
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
        <NavLink to={course.link} target="_blank">
          <div className="about-col1" data-aos="fade-up">
            <img src={course.src} alt="" className="img-fluid" />
            <h4 className="text-white pt-4">{course.title}</h4>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              anchorClass="show-more-less-clickable"
              onClick={executeOnClick}
              expanded={false}
              truncatedEndingComponent={"... "}
              className="py-3"
            >
              <p className="">{course.description}</p>
            </ShowMoreText>
            {/* <p className="">{course.description}</p> */}
            <h6 className="text-white">
              <b className="pe-3">Instructor:</b>
              {course.instructor}
            </h6>
          </div>
        </NavLink>
      </div>
      {/* ***************************** */}
    </>
  );
};

export default AllCourses;
