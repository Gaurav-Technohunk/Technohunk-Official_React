import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import IconPhone from '../assets/images/icons/icon-headphone.svg';
import WhoImg from '../assets/images/about-us/a1.png';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
const WhoWeAre = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [serviceCount, setServiceCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setServiceCount(25);
      }, 500);
    }
  }, [isVisible]);

  return (
    <section className="ep-who-we-area-section pt-120" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 align-self-center">
            <div className="short-info text-center text-md-start">
              <SectionTitle title="Impact Through Intelligent Innovation" extraClass="mb-20 text-center text-md-start" />
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >At Technohunk, we leverage AI, deep learning, and modern engineering to build scalable, reliable solutions.
               Our mission is to empower businesses with technology that drives growth and future readiness.</motion.p>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >Technohunk blends innovation with expertise in AI, Python, and Java to craft intelligent solutions.
                We design systems that are robust, scalable, and built to adapt to evolving challenges.
                Our focus is clear: helping businesses thrive through smarter, future-ready technology.</motion.p>
            </div>
          </div>
          <div className="col-xl-7">
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="image d-sm-flex justify-content-end">
              <div className="counter flex-shrink-0 text-center flex-grow-1 d-flex flex-column justify-content-center">
                <div
                  className="icon-box rounded-pill d-flex justify-content-center align-items-center icon-box-tertiary mx-auto">
                  <img src={IconPhone} alt="icon-headphone" />
                </div>
                <div className="count d-flex align-items-center justify-content-center">
                  <Odometer value={serviceCount} format="d" duration={1000} />+
                </div>
                <h5 className="title">Services We Provide</h5>
              </div>
              <div className="img overflow-hidden">
                <img loading="lazy" src={WhoImg} alt="who-we-are" className="img-fluid w-100" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
