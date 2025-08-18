import React from "react";
import footerIcon1 from '../assets/images/icons/footer-short-icon-1.svg';
import footerIcon2 from '../assets/images/icons/footer-short-icon-2.svg';
import footerIcon3 from '../assets/images/icons/footer-short-icon-3.svg';
import logo2 from '../assets/images/logo/logo2.svg';
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
                    <h4 className="title">Tech Fusion Solutions</h4>
                    <p>It encompasses the use of computers, networks</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <img src={footerIcon2} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Digital Edge Innovations</h4>
                    <p>Other digital technologies to store place network</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-short-info rounded-20 d-flex align-items-center">
                  <div className="icon d-flex align-items-center justify-content-center rounded-pill flex-shrink-0">
                    <img src={footerIcon3} alt="footer-short-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">Cloud Wave Services</h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main">
              <div className="row g-4">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget footer-about">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo2} alt="logo2" />
                      </a>
                    </div>
                    <div className="short-info">
                      <p>Drives innovation within the IT sector, making it a dynamic </p>
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
                          <p>2464 Royal Ln. Mesa, New Jersey</p>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2">
                            <div className="icon">
                              <i className="fas fa-envelope"></i>
                            </div>
                            <h4 className="title">Email </h4>
                          </div>
                          <a href="mailto:curtis.weaver@example.com">curtis.weaver@example.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget footer-links services-widget">
                    <h4 className="footer-title">Services</h4>
                    <ul className="list-unstyled">
                      <li><Link to="/services"><i className="fas fa-chevron-right"></i> InfoSec Experts</Link></li>
                      <li><Link to="/services"><i className="fas fa-chevron-right"></i> Quantum IT Solutions</Link></li>
                      <li><Link to="/services"><i className="fas fa-chevron-right"></i> NexusTech Systems</Link></li>
                      <li><Link to="/services"><i className="fas fa-chevron-right"></i> SmartNet IT Services</Link></li>
                      <li><Link to="/services"><i className="fas fa-chevron-right"></i> ByteForce Solutions</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-6">
                  <div className="footer-widget footer-links links-widget">
                    <h4 className="footer-title">Link</h4>
                    <ul className="list-unstyled">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      <li><Link to="/blog">Blog And News</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget recent-post-widget">
                    <h4 className="footer-title">Recent Post</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/blog">
                          <span className="title">
                            Crafting Tomorrow’s Digital World
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            October 19, 2024
                          </small>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <span className="title">
                            Technology That Powers the Future
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            October 19, 2024
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
                      <p>© Yoursitename 2024 | All Rights Reserved</p>
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
