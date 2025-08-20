import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { testimonials } from "../data/testmonial";
import SectionTitle from "./SectionTitle";
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className="ep-testimonial-section pt-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="testimonial-info">
              <SectionTitle subTitle="Clients Testimonials" title="Voices of trust. Stories of success." extraClass="mb-20" />
              <div className="short-info">
                <p className=".fa ">
                  Our clients are at the heart of everything we do.
                  Their stories reflect the trust, innovation, and success we build together.
                  Here’s what they have to say about partnering with Technohunk.
                </p>
              </div>
              <div className="call-us">
                <a
                  href="tel:(704)555-0127"
                  className="call-us-btn style2 d-flex align-items-center gap-3"
                >
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="info">
                    <span className="title text-uppercase">CALL US ANYTIME</span>
                    <h4 className="number">+91 9873003702</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-area testimonial-slider rounded-30">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="swiper-container"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-item d-flex flex-column">
                      <div className="rating">
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`fas fa-star ${index >= testimonial.rating ? "no-rate" : ""
                              }`}
                          ></i>
                        ))}
                      </div>
                      <div className="details">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="user-info d-flex align-items-center justify-content-between gap-4">
                        <div className="user d-flex align-items-center">
                          <div className="img overflow-hidden rounded-pill flex-shrink-0">
                            <img
                              src={testimonial.img}
                              alt={testimonial.name}
                              className="w-5 h-5 object-fit-cover"
                              initial={{ scale: 1, rotate: 0, y: 0 }}
                              animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 5, 0, -5, 0] }}
                              whileHover={{ scale: 1.1, rotate: 10 }}
                              transition={{
                                y: {
                                  repeat: Infinity,
                                  duration: 2,
                                  ease: 'easeInOut',
                                },
                                rotate: {
                                  repeat: Infinity,
                                  duration: 2,
                                  ease: 'easeInOut',
                                },
                                type: 'spring',
                                stiffness: 300
                              }}
                              as={motion.img}
                            />
                          </div>
                          <div className="text">
                            <h4 className="name">{testimonial.name}</h4>
                            <p className="designation">{testimonial.designation}</p>
                          </div>
                        </div>
                        <div className="quote">
                          <img
                            src={testimonial.quoteIcon}
                            alt="quote-icon"
                            initial={{ scale: 1, rotate: 0, y: 0 }}
                            animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 5, 0, -5, 0] }}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{
                              y: {
                                repeat: Infinity,
                                duration: 2,
                                ease: 'easeInOut',
                              },
                              rotate: {
                                repeat: Infinity,
                                duration: 2,
                                ease: 'easeInOut',
                              },
                              type: 'spring',
                              stiffness: 300
                            }}
                            as={motion.img}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
