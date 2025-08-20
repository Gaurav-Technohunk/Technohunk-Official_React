import React from "react";
import { motion } from 'framer-motion';
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  // Split projects into two separate columns
  const leftColumn = projects.filter((_, index) => index % 2 === 0); // 1 & 3
  const rightColumn = projects.filter((_, index) => index % 2 !== 0); // 2 & 4

  return (
    <section className="ep-project-section pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <SectionTitle subTitle="Latest Projects" title="Tech Solutions for a Connected World" extraClass="text-center" />
          </div>
        </div>
        <div className="row g-4">
          {/* Left Column (1 & 3) */}
          <div className="col-lg-6">
            {leftColumn.map((project) => (
              <div key={project.id} className="project-item position-relative mb-4">
                <div className="img overflow-hidden rounded-20">
                  <Link to="/project-details" className="d-block w-100">
                    <img src={project.image} alt={project.title} className="img-fluid w-100" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-100"
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
                    />
                  </Link>
                </div>
                <div className="overlay position-absolute">
                  <div className="text">
                    <p>{project.category}</p>
                    <h4 className="title">
                      <Link to="/project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (2 & 4) */}
          <div className="col-lg-6">
            {rightColumn.map((project) => (
              <div key={project.id} className="project-item position-relative mb-4">
                <div className="img overflow-hidden rounded-20">
                  <Link to="/project-details" className="d-block w-100">
                    <img loading="lazy" src={project.image} alt={project.title} className="img-fluid w-100" />
                    <motion.img
                      loading="lazy"
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-100"
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
                    />
                  </Link>
                </div>
                <div className="overlay position-absolute">
                  <div className="text">
                    <p>{project.category}</p>
                    <h4 className="title">
                      <Link to="/project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
