import React, { useState } from 'react';
import { teams } from "../data/team";
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Team = () => {
  const [activeTeam, setActiveTeam] = useState(
    teams.find((team) => team.isActive) ? teams.find((team) => team.isActive).name : teams[0].name
  );

  const handleMouseEnter = (teamName) => {
    setActiveTeam(teamName);
  };

  return (
    <section className="ep-team-section pt-120 mb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <SectionTitle subTitle="Creative Members" title="Smart people. Bold ideas. Big impact." extraClass="text-center" />
          </div>
        </div>
        <div className="row">
          {teams.map((team) => (
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              key={team.id}
              className={`team-item rounded-20 position-relative ${activeTeam === team.name ? "active-team" : ""}`}
              onMouseEnter={() => handleMouseEnter(team.name)}
              onClick={() => handleClick(team.name)}
            >
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 align-self-center">
                  <div className="team-name-info">
                    <h4 className="name">{team.name}</h4>
                    <p>{team.description}</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 align-self-center">
                  <div className="social-icon-box">
                    <ul className="list-unstyled">
                      {Object.entries(team.socialLinks).map(([key, link]) => (
                        <li key={key}>
                          <Link to={link} className="d-inline-flex justify-content-center align-items-center">
                            <i className={`fab fa-${key}`}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-1 align-self-center">
                  <div className="hover-image position-absolute overflow-hidden rounded-20">
                    <div className="team-image">
                      <img loading="lazy"
                        src={team.image}
                        alt={team.name}
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="all-members text-center">
          <Link to="/contact" className="theme-btn theme-btn-border position-relative d-inline-flex align-items-center">
            Contact Us
            <span className="arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4443_62)">
                  <path
                    d="M13.4317 12.5381C13.4967 12.4215 13.535 12.2898 13.5367 12.1506L13.5733 7.95396C13.5758 7.60896 13.2992 7.32646 12.9483 7.32312C12.6058 7.32312 12.3258 7.59896 12.3233 7.94229L12.2975 10.8665L7.48917 6.05813C7.245 5.81396 6.84917 5.81396 6.605 6.05813C6.36083 6.30229 6.36083 6.69812 6.605 6.94229L11.4158 11.7531L8.59083 11.7831C8.245 11.7873 7.96833 12.0698 7.9725 12.4148C7.97583 12.7581 8.255 13.0331 8.60417 13.0331C8.60417 13.0331 12.6783 12.989 12.685 12.989C12.9967 12.9856 13.2842 12.8023 13.4325 12.539L13.4317 12.5381Z"
                    fill="white" />
                  <path
                    d="M9.99984 19.2219C9.29484 19.2219 8.59818 19.2094 7.91151 19.1853C4.06734 19.0503 0.949844 15.9328 0.81401 12.0869C0.789844 11.3994 0.777344 10.7036 0.777344 9.99859C0.777344 9.29359 0.789844 8.59776 0.81401 7.91026C0.949844 4.06609 4.06734 0.948594 7.91151 0.813594C9.28651 0.76526 10.7148 0.76526 12.0882 0.813594C15.9323 0.948594 19.0498 4.06609 19.1857 7.91193C19.2098 8.59859 19.2223 9.29526 19.2223 10.0003C19.2223 10.7053 19.2098 11.4011 19.1857 12.0886C19.0498 15.9336 15.9323 19.0511 12.0882 19.1869C11.4015 19.2111 10.7048 19.2236 9.99984 19.2236V19.2219ZM9.99984 2.02609C9.31068 2.02609 8.62818 2.03859 7.95568 2.06276C4.76401 2.17443 2.17568 4.76276 2.06318 7.95443C2.03984 8.62776 2.02734 9.30859 2.02734 9.99859C2.02734 10.6886 2.03984 11.3703 2.06318 12.0428C2.17568 15.2344 4.76401 17.8236 7.95568 17.9344C9.30151 17.9836 10.699 17.9836 12.044 17.9344C15.2365 17.8228 17.8248 15.2344 17.9365 12.0428C17.9598 11.3694 17.9723 10.6886 17.9723 9.99859C17.9723 9.30859 17.9598 8.62693 17.9365 7.95443C17.824 4.76276 15.2357 2.17359 12.044 2.06276C11.3707 2.03859 10.689 2.02609 9.99984 2.02609Z"
                    fill="white" />
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
