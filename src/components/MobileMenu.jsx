import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
    submenu: [
      {
        id: 11,
        title: "Home One",
        link: "/",
      },
      {
        id: 12,
        title: "Home Two",
        link: "/home-two",
      },
    ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "#",
    submenu: [
      {
        id: 31,
        title: "Service Single",
        link: "/services",
      },
      {
        id: 32,
        title: "Services Details",
        link: "/service-details",
      },
    ],
  },
  {
    id: 4,
    title: "Projects",
    link: "#",
    submenu: [
      {
        id: 41,
        title: "Projects Single",
        link: "/projects",
      },
      {
        id: 42,
        title: "Project Details",
        link: "/project-details",
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    submenu: [
      {
        id: 51,
        title: "Blog Single",
        link: "/blog",
      },
      {
        id: 52,
        title: "Blog Details",
        link: "/blog-details",
      },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenuId(null);
  };

  // Toggle submenu visibility with smooth transition
  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <div className="mobile-menu-area d-block d-xl-none">
      <div className="container">
        <div className="mobile-topbar">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="bars" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Main */}
      <div className={`mobile-menu-main ${isMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="close-mobile-menu" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </div>
        <div className="menu-body">
          <div className="menu-list">
            <ul className="list-unstyled">
              {menus.map((menu) => (
                <li className="sub-mobile-menu" key={menu.id}>
                  {menu.submenu ? (
                    <>
                      <Link
                        to="#"
                        onClick={() => toggleSubmenu(menu.id)}
                      >
                        {menu.title}{" "}
                        <i
                          className={`fas float-end ${openSubmenuId === menu.id ? "fa-chevron-up" : "fa-chevron-down"}`}
                        ></i>
                      </Link>
                      <ul
                        className={`submenu ${openSubmenuId === menu.id ? "open" : ""}`}
                      >
                        {menu.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link to={submenu.link} onClick={closeMenu}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={menu.link} onClick={closeMenu}>
                      {menu.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="call-us p-4">
          <a
            href="tel:+1234567890"
            className="call-us-btn d-flex align-items-center gap-3"
          >
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
  );
};

export default MobileMenu;
