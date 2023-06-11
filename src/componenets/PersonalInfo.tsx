import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";
import "./personalInfo.css";

const PersonalInfo = () => {
  const { personalInfo } = data;

  return (
    <div className="personal-info">
      <h1>{personalInfo.name}</h1>
      <div className="personal-info-item">
        <FaMapMarkerAlt className="icon" />
        <p>{personalInfo.address}</p>
      </div>
      <div className="personal-info-item">
        <FaPhone className="icon" />
        <p>{personalInfo.mobile}</p>
      </div>
      <div className="personal-info-item">
        <FaEnvelope className="icon" />
        <p><a href="mailto:alcls0026@gmail.com}">{personalInfo.email}</a></p>
      </div>
      <div className="personal-info-item">
        <FaGithub className="icon" />
        <p>
          <Link to={`https://github.com/choy30`}>{personalInfo.github}</Link>
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
