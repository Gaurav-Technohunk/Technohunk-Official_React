import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { services } from "../data/services";
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';

const Services = ({ isSlider = true, showTitle = true, extraClassName='' }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (isSlider && swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = ".arrow-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".arrow-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, [isSlider]);

  return (
    <section className={`ep-services-section py-120 ${extraClassName}`}>
      <div className="container">
        <div className="position-relative">
          {/* Conditionally render the SectionTitle only when showTitle is true */}
          {showTitle && (
            <div className="row mb-60">
              <div className="col-xl-6 col-md-9">
                <SectionTitle subTitle="Our Services" title="Smart Solutions for a Digital World" extraClass="mb-0" />
              </div>
              {isSlider && (
                <div className="col-xl-6 col-md-3 align-self-end">
                  <div className="services-arrow d-flex gap-4 align-items-center justify-content-center justify-content-sm-start justify-content-md-end">
                    <div className="arrow arrow-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="arrow arrow-next">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Render the Swiper or non-slider layout */}
        {isSlider ? (
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={1000}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ prevEl: ".arrow-prev", nextEl: ".arrow-next" }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-item rounded-20">
                  <Link to="/service-details" className="d-block w-100">
                    <div className={`icon-box rounded-20 ${service.className} d-flex justify-content-center align-items-center`}>
                      <img src={service.icon} alt="service-icon" />
                    </div>
                    <div className="text">
                      <h4 className="service-title">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-item rounded-20">
                  <Link to="/service-details" className="d-block w-100">
                    {/* Override className only for non-slider view */}
                    <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                      <img src={service.icon} alt="service-icon" />
                    </div>
                    <div className="text">
                      <h4 className="service-title">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
