import React, { useEffect } from 'react';
import logo from '../assets/images/logo/logo.svg';
import { Link } from "react-router-dom";
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const NavbarOne = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("sticky-header");
      if (window.scrollY > 120) {
        header.classList.add("sticky-menu");
      } else {
        header.classList.remove("sticky-menu");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="ep-header-section w-100" id="sticky-header">
      <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
        <div className="container header-one-container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu/>
            <div className="call-us">
              <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                <span className="icon d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div className="info">
                  <span className="title">Need help?</span>
                  <h5 className="number">+123 456 7890</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navbar part start */}
      <MobileMenu/>
      {/* mobile navbar part end */}
    </header>
  )
}

export default NavbarOne
