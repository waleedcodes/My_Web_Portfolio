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
                      lines={5}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-more-less-clickable"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      <p>
                        Web development involves designing, building, and
                        maintaining websites and web applications. In the early
                        days, web development was simple, but now it has become
                        complex with developers utilizing a wide range of
                        programming languages, frameworks, and tools. There are
                        three main components to web development: frontend
                        development, backend development, and full-stack
                        development. Frontend developers design and build the
                        user interface using HTML, CSS, and JavaScript. Backend
                        developers create the server-side components and use
                        programming languages and databases to store and
                        retrieve data. Full-stack developers build both the
                        client-side and server-side components. Web development
                        also involves other important considerations like
                        accessibility, performance optimization, SEO, and
                        security.
                      </p>
                    </ShowMoreText>
            <p className="">{course.description}</p>
            <h6 className="text-white">
              <b>Instructor:</b>
              <span> {course.instructor}</span>
            </h6>
          </div>
        </NavLink>
      </div>
      {/* ***************************** */}
    </>
  );
};

export default AllCourses;
