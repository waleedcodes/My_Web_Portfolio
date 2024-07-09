import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../assets/jhon.png";
import img2 from "../assets/icon1.png";
import img3 from "../assets/icon2.png";
import icon1 from "../assets/testimonial-icon.png";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="row text-center gx-0">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>
              <img src={img2} alt="" />
              TESTIMONIALS
              <img src={img3} alt="" />
            </h1>
            <p className="px-2 px-md-5">
              Duis aute irure dolor in reprehen pteur sint occaecat cupidatat
              non proident, sunt in culim id est.
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="container gx-0 test_slide1">
          {/* ********************* */}
          <div className="row gx-0">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="test_1" data-aos="fade-up">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-right">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-right">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-right">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-right">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-down">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-right">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test_1" data-aos="fade-right">
                  <img src={icon1} alt="" className="test_img" />
                  <div className="d-flex pb-1"></div>
                  <p className="py-3">
                    As a digital marketing agency our team works day in and day
                    out on websites of all kinds. Some of the most common errors
                    we see are websites not optimized.
                  </p>
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                      <h5>John Doe</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* ********************* */}
        </div>
        <div className="test_slide2">
          <div className="conatiner-fluid">
            {/* ********************* */}
            <div className="row gx-0">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="test_1" data-aos="fade-up">
                    <img src={icon1} alt="" className="test_img" />
                    <div className="d-flex pb-1"></div>
                    <p className="py-3">
                      As a digital marketing agency our team works day in and
                      day out on websites of all kinds. Some of the most common
                      errors we see are websites not optimized for SEO because
                      of old, boring, or out of date website themes or designs.
                    </p>
                    <div className="row">
                      <div className="col-4 text-center">
                        <img src={img1} alt="" />
                      </div>
                      <div className="col-8">
                        <h5>John Doe</h5>
                        <p>CEO</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="test_1" data-aos="fade-up">
                    <img src={icon1} alt="" className="test_img" />
                    <div className="d-flex pb-1"></div>
                    <p className="py-3">
                      As a digital marketing agency our team works day in and
                      day out on websites of all kinds. Some of the most common
                      errors we see are websites not optimized for SEO because
                      of old, boring, or out of date website themes or designs.
                    </p>
                    <div className="row">
                      <div className="col-4 text-center">
                        <img src={img1} alt="" />
                      </div>
                      <div className="col-8">
                        <h5>John Doe</h5>
                        <p>CEO</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="test_1" data-aos="fade-up">
                    <img src={icon1} alt="" className="test_img" />
                    <div className="d-flex pb-1"></div>
                    <p className="py-3">
                      As a digital marketing agency our team works day in and
                      day out on websites of all kinds. Some of the most common
                      errors we see are websites not optimized for SEO because
                      of old, boring, or out of date website themes or designs.
                    </p>
                    <div className="row">
                      <div className="col-4 text-center">
                        <img src={img1} alt="" />
                      </div>
                      <div className="col-8">
                        <h5>John Doe</h5>
                        <p>CEO</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="test_1" data-aos="fade-up">
                    <img src={icon1} alt="" className="test_img" />
                    <div className="d-flex pb-1"></div>
                    <p className="py-3">
                      As a digital marketing agency our team works day in and
                      day out on websites of all kinds. Some of the most common
                      errors we see are websites not optimized for SEO because
                      of old, boring, or out of date website themes or designs.
                    </p>
                    <div className="row">
                      <div className="col-4 text-center">
                        <img src={img1} alt="" />
                      </div>
                      <div className="col-8">
                        <h5>John Doe</h5>
                        <p>CEO</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* ********************* */}
          </div>
        </div>
      </div>
      {/* ************************ */}
      {/* ******************************** */}
    </>
  );
};

export default Testimonial;
