import React from 'react'
import { motion } from 'framer-motion';
import mailIcon from '../assets/images/icons/mail-icon.svg';

const Cta = () => {
  return (
    <section className="ep-cta-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 align-self-center">
            <div className="cta-text d-flex align-items-center gap-4">
              <div className="icon">
                <img src={mailIcon} alt="mail-icon"/>
              </div>
              <h3 className="info">Subscribe Our Newsletter</h3>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="cta-form">
              <form action="#">
                <div className="d-sm-flex gap-3 align-items-center">
                  <div className="input-group position-relative">
                    <input type="text" className="form-control form-field shadow-none" placeholder="Enter Your Email"/>
                    <span className="mail-icon position-absolute top-50 translate-middle-y"><i
                        className="fas fa-envelope"></i></span>
                  </div>
                  <motion.button
                    className="theme-btn mt-3 mt-sm-0 theme-btn-primary position-relative flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, backgroundColor: '#007bff', color: '#fff' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    Subscribe Now
                  </motion.button>
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
