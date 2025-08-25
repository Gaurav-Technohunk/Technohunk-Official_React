import React from "react";
import footerIcon1 from '../assets/images/icons/footer-short-icon-1.svg';
import footerIcon2 from '../assets/images/icons/footer-short-icon-2.svg';
import footerIcon3 from '../assets/images/icons/footer-short-icon-3.svg';
import logo2 from '../assets/images/logo/tech-logo.png';
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

const FooterOne = () => {

  return (
    <>
      {/* scroll to top start */}
      <ScrollToTopButton />
      {/* scroll to top end */}

      <footer className="ep-footer-section pt-120">
        <div className="footer-bg">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-4 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <img src={footerIcon1} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Scalable Solutions</h4>
                    <p>Delivering robust, future-ready systems designed to grow with your business.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <img src={footerIcon2} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">AI-Driven Innovation</h4>
                    <p>Leveraging AI, deep learning, and NLP to create smarter, faster solutions.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <img src={footerIcon3} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Reliable Partnerships</h4>
                    <p>Building trusted, maintainable technology that empowers long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget footer-about ">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo2} alt="logo2" className="w-50 img-fluid"   />
                      </a>
                    </div>
                    <div className="short-info">
                      <p>Driving innovation and delivering scalable IT solutions for a smarter future.</p>
                    </div>
                    <div className="contact-info">
                      <ul className="list-unstyled">
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h4 className="title">Address </h4>
                          </div>
                          <p>H-11, Sector-23, Sanjay Nagar, Ghaziabad - 201002 (U.P.), India</p>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-envelope"></i>
                            </div>
                            <h4 className="title">Email </h4>
                          </div>
                          <a href="mailto:Info@technohunk.co.in">Info@technohunk.co.in</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget footer-links services-widget">
                    <h4 className="footer-title">What We Do</h4>
                    <ul className="list-unstyled">
                      <li><Link to="/software-development"><i className="fas fa-chevron-right"></i> Software Development </Link></li>
                      <li><Link to="/ai-ml-implimentation"><i className="fas fa-chevron-right"></i> AI/ML Implementation </Link></li>
                      <li><Link to="/business-automation"><i className="fas fa-chevron-right"></i> Business Process Auto.</Link></li>
                      <li><Link to="/digital-transformation"><i className="fas fa-chevron-right"></i> Digital Transformation</Link></li>
                      <li><Link to="/cybersecurity-advisory"><i className="fas fa-chevron-right"></i>Cybersecurity Advisory</Link></li>
                      <li><Link to="/data-analytics"><i className="fas fa-chevron-right"></i> Data Analytics/Insights</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-6">
                  <div className="footer-widget footer-links links-widget">
                    <h4 className="footer-title">Link</h4>
                    <ul className="list-unstyled">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">What We Do</Link></li>
                      <li><Link to="/projects">What We Think</Link></li>
                      <li><Link to="/blog">Insights</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget recent-post-widget">
                    <h4 className="footer-title">Recent Post</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/blog/drive-success-with-cutting-edge-technology">
                          <span className="title">
                            Drive success with cutting-edge technology
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            Mar 09, 2025
                          </small>
                        </Link>
                      </li>
                      <li>
                        <Link to="blog/empowering-progress-through-technology">
                          <span className="title">
                            Empowering Progress Through Technology
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            April 23, 2025
                          </small>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row g-2">
                  <div className="col-lg-6">
                    <div className="footer-copyright text-center text-lg-start">
                      <p>©Technohunk 2025 | All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="footer-menu text-center text-lg-end">
                      <ul className="list-unstyled">
                        <li className="d-inline-block"><Link href="#">Trams & Condition</Link></li>
                        <li className="d-inline-block"><Link href="#">Privacy Policy</Link></li>
                        <li className="d-inline-block"><Link href="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterOne
