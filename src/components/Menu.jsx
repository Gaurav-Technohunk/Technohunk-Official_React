import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">
      <motion.li
        className="nav-item"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.08, color: '#007bff' }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
      >
        <Link className="nav-link" to="/about">
          About Us
        </Link>
      </motion.li>
      <motion.li
        className="nav-item"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.08, color: '#007bff' }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        <Link className="nav-link" to="/services">
          What We Do
        </Link>
      </motion.li>
      <motion.li
        className="nav-item"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.08, color: '#007bff' }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
      >
        <Link className="nav-link" to="/projects">
          What We Think
        </Link>
      </motion.li>
      {/* <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          Home <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/">Home One</Link>
          </li>
          <li>
            <Link to="/home-two">Home Two</Link>
          </li>
        </ul>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services">
          What We Do 
        </Link>
        {/* <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/services">Service Single</Link>
          </li>
          <li>
            <Link to="/service-details">Service Details</Link>
          </li>
        </ul> */}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">
          What We Think
        </Link>
        {/* <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/projects">Project Single</Link>
          </li>
          <li>
            <Link to="/project-details">Project Details</Link>
          </li>
        </ul> */}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog">
          Insights
        </Link>
        {/* <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/blog">Blog Single</Link>
          </li>
          <li>
            <Link to="/blog/drive-success-with-cutting-edge-technology">Blog Details</Link>
          </li>
        </ul> */}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Menu
