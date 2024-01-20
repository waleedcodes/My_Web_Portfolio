import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Contact = () => {
  return (
    <>
      {/* <div className="contact">
        <div className="container gx-0">
          <div className="row text-center gx-0">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>
                <img src={icon1} alt="" />
                GET IN TOUCH
                <img src={icon2} alt="" />
              </h1>
              <p className="px-5 px-md-5">
                Duis aute irure dolor in reprehen pteur sint occaecat cupidatat
                non proident, sunt in culim id est.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0">
            <div className="col-md-4">
              <div className="contact_col">
                <div className="row gx-0 align-items-center">
                  <div className="col-3">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="col-9">
                    <div className="contact_info">
                      <h3>Address</h3>
                      <p>Abbottabad, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_col">
                <div className="row gx-0 align-items-center">
                  <div className="col-3">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="col-9">
                    <div className="contact_info">
                      <h3>Phone</h3>
                      <p>+92 1323243423</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_col">
                <div className="row gx-0 align-items-center">
                  <div className="col-3">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="col-9">
                    <div className="contact_info">
                      <h3>Email</h3>
                      <p>waleedishfaq1515@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-0 py-4">
            <div className="col-md-6">
              <div className="contact-col1"></div>
            </div>
            <div className="col-md-6">
              <div className="contact-col2"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ****************** */}
      <div className="contact container-fluid">
        <div className="container contact_main gx-0">
          <div className="row text-center gx-0 pb-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>
                <img src={icon1} alt="" />
                GET IN TOUCH
                <img src={icon2} alt="" />
              </h1>
              <p>
                Fill the form below or write us .We will help you as soon as
                possible.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0 align-items-center">
            <div className="col-lg-7 text-center">
              {/* ************************* */}
              <div className="row gx-0">
                <div className="col-lg-6 gx-0">
                  <div className="contact_fm_1" data-aos="fade-left">
                    <i className="fa-solid fa-phone"></i>
                    <h4>Phone No</h4>
                    <h6>+88 01682 825 123</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact_fm_1" data-aos="fade-left">
                    <i className="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                    <h6>hi@waleedcodes.com</h6>
                  </div>
                </div>
              </div>
              {/* ************************* */}
              <div className="row gx-0">
                <div className="col-lg-12">
                  <div className="contact_fm_1">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>Address</h4>
                    <h6>Abbottabad, Pakistan</h6>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.97328102255!2d73.08828448657466!3d34.17513477655343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688829299558!5m2!1sen!2s"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* ************************* */}
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              <div className="contact_sec2">
                <form action="https://formspree.io/f/xayrnrdk" method="POST">
                  {/* <form action="https://formspree.io/f/xjvqvwyo" method="POST"> */}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Subject Here"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message*
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="textarea"
                      placeholder="Type Your Message Here"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact_btn">
                    Let's Talk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****************** */}
    </>
  );
};

export default Contact;
