import ShowMoreText from "react-show-more-text";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/blog4.webp";
import img5 from "../assets/blog5.jpg";
import img6 from "../assets/blog6.jpg";

const Blog = () => {
  const executeOnClick = () => {
    console.log("see more");
  };

  return (
    <>
      <div className="section6" id="Blog">
        <div className="row text-center gx-0">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>
              <img src={icon1} alt="" />
              BLOG
              <img src={icon2} alt="" />
            </h1>
            <p className="px-1 px-md-5">
              Sharing my web development journey and expertise. Explore
              insights, tutorials, and the latest trends in concise articles.
              Stay informed and inspired.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="container gx-0 pt-5">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="sec6_1">
                <div className="card">
                  <img src={img1} className="card-img-top" alt="..." />
                  <div className="sec6_col">
                    <h5>Introduction to Web Development</h5>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="sec6_1" data-aos="fade-up">
                <div className="card">
                  <img src={img2} className="card-img-top" alt="..." />
                  <div className="sec6_col">
                    <h5>Frontend Development</h5>
                    <ShowMoreText
                      lines={5}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-more-less-clickable"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      Frontend development is the process of designing and
                      building the user interface of a website or web
                      application. It involves creating the layout, styling, and
                      functionality of the site using HTML, CSS, and JavaScript.
                      Frontend developers must have a strong understanding of
                      user experience (UX) design, as well as a solid
                      understanding of how to make their sites responsive and
                      accessible to users on different devices. With the rise of
                      mobile devices and the importance of responsive design,
                      frontend development has become increasingly important in
                      creating a positive user experience. It is a challenging
                      but rewarding field that requires both creativity and
                      technical skills.
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="sec6_1" data-aos="fade-left">
                <div className="card">
                  <img src={img3} className="card-img-top" alt="..." />
                  <div className="sec6_col">
                    <h5>Backend Development</h5>
                    <ShowMoreText
                      lines={5}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-more-less-clickable"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      Backend development is an essential component of web
                      development that involves creating the server-side
                      components of a website or web application. Backend
                      developers work with programming languages such as Python,
                      Ruby, or PHP, and databases like MySQL or MongoDB to store
                      and retrieve data. They are responsible for ensuring that
                      the server-side components of the site are secure,
                      efficient, and scalable. With the rise of complex web
                      applications that require robust backend infrastructure,
                      the demand for skilled backend developers is increasing.
                      Backend development is a challenging but rewarding field
                      that requires strong technical skills and a deep
                      understanding of server-side programming, algorithms, and
                      data structures.
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="sec6_1" data-aos="fade-right">
                <div className="card">
                  <img src={img4} className="card-img-top" alt="..." />
                  <div className="sec6_col">
                    <h5>Full-Stack Development</h5>
                    <ShowMoreText
                      lines={5}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-more-less-clickable"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      Full-stack development combines frontend and backend
                      development to create a comprehensive web development
                      solution. Full-stack developers are responsible for
                      building both the client-side and server-side components
                      of a website or web application. They must have a strong
                      understanding of both frontend and backend development,
                      and be able to work with a variety of programming
                      languages and frameworks. Full-stack developers must also
                      be proficient in project management and be able to
                      communicate effectively with both technical and
                      non-technical stakeholders. With the demand for full-stack
                      developers on the rise, this field offers exciting career
                      opportunities for those who are willing to embrace the
                      challenges and stay up-to-date with the latest trends and
                      technologies.
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="sec6_1" data-aos="fade-up">
                <div className="card">
                  <img src={img5} className="card-img-top" alt="..." />
                  <div className="sec6_col">
                    <h5>Responsive Web Design</h5>
                    <ShowMoreText
                      lines={5}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-more-less-clickable"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      Responsive web design is an approach to web development
                      that emphasizes the importance of creating websites and
                      web applications that adapt to different screen sizes and
                      devices. With the rise of mobile devices and the
                      increasing variety of screen sizes, responsive web design
                      has become essential in creating a positive user
                      experience. This involves designing and building websites
                      that can be viewed on a variety of devices, from
                      smartphones to tablets to desktop computers, while
                      maintaining a consistent look and feel. Responsive web
                      design requires a deep understanding of frontend
                      development, including HTML, CSS, and JavaScript, as well
                      as UX design principles and accessibility considerations.
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="sec6_1" data-aos="fade-left">
                <div className="card">
                  <img src={img6} className="card-img-top" alt="..." />
                  <div className="sec6_col">
                    <h5>Website hosting and deployment</h5>
                    <ShowMoreText
                      lines={5}
                      more="Show more"
                      less="Show less"
                      anchorClass="show-more-less-clickable"
                      onClick={executeOnClick}
                      expanded={false}
                      truncatedEndingComponent={"... "}
                    >
                      Website hosting and deployment are crucial aspects of web
                      development that involve making a website or web
                      application accessible to users on the internet. Website
                      hosting involves storing the files that make up a website
                      on a web server and making them available to users via the
                      internet. Deployment, on the other hand, is the process of
                      publishing a website or web application to a web server
                      and making it live for users to access. There are many
                      hosting and deployment options available, including shared
                      hosting, dedicated hosting, cloud hosting, and more. Web
                      developers must have a strong understanding of hosting and
                      deployment options to ensure their websites are secure,
                      scalable, and accessible to users.
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
