import React from 'react';
import { motion } from 'framer-motion';

import featureImg1 from '../assets/images/features/e4.png';
import featureImg2 from '../assets/images/features/e3.jpg';
import featureIcon1 from '../assets/images/icons/ai.png';
import featureIcon2 from '../assets/images/icons/time.png';
import featureIcon3 from '../assets/images/icons/secure.png';
import SectionTitle from './SectionTitle';
import { fadeIn } from './variants';

const Features = () => {
  return (
    <section className="ep-features-section overflow-hidden pt-120">
      <div className="container">
        <div className="row">
          {/* Feature Image Section */}
          <div className="col-lg-6">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="feature-image position-relative"
            >
              <div className="img-one overflow-hidden rounded-20 position-relative">
                <img
                  loading="lazy"
                  src={featureImg1}
                  alt="about-img"
                  className="img-fluid w-100 rounded-20"
                />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                <img
                  loading="lazy"
                  src={featureImg2}
                  alt="about-img"
                  className="img-fluid w-100 rounded-20"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature Text Section */}
          <div className="col-lg-6">
            <div className="feature-text">
              <SectionTitle
                subTitle="Our features"
                title="Solutions as unique as your goals"
              />

              {/* Feature Item 1 */}
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="feature-item d-flex align-items-center"
              >
                <div className="icon-box rounded-20 d-flex justify-content-center align-items-center">
                  <motion.img
                    src={featureIcon1}
                    alt="feature-icon"
                    initial={{ scale: 1, rotate: 0, y: 0 }}
                    animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 5, 0, -5, 0] }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
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
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <div className="info">
                  <h4 className="feature-title">AI-Powered Solutions</h4>
                  <p className="text-dark">
                    Leverage AI to transform data into insights, automate workflows, and accelerate innovation.
                  </p>
                </div>
              </motion.div>

              {/* Feature Item 2 */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="feature-item d-flex align-items-center"
              >
                <div className="icon-box rounded-20 d-flex justify-content-center align-items-center">
                  <motion.img
                    src={featureIcon2}
                    alt="feature-icon"
                    initial={{ scale: 1, rotate: 0, y: 0 }}
                    animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 5, 0, -5, 0] }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
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
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <div className="info">
                  <h4 className="feature-title">Future-Ready Architecture</h4>
                  <p className="text-dark">
                    Scalable, adaptive systems designed to evolve with your business and market demands.
                  </p>
                </div>
              </motion.div>

              {/* Feature Item 3 */}
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="feature-item d-flex align-items-center"
              >
                <div className="icon-box rounded-20 d-flex justify-content-center align-items-center">
                  <motion.img
                    src={featureIcon3}
                    alt="feature-icon"
                    initial={{ scale: 1, rotate: 0, y: 0 }}
                    animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 5, 0, -5, 0] }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
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
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
                <div className="info">
                  <h4 className="feature-title">Secure & Reliable Systems</h4>
                  <p className="text-dark">
                    Enterprise-grade security and performance built into every solution to safeguard your future.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
