import React from "react";
import { data } from "../data";
import "./leftrightformat.css";

function Projects() {
  return (
    <div>
      <h2>PROJECTS</h2>
      {data.projects.map((pj) => (
        <div key={pj.name} className="module-item">
          <div className="module-left">
            <div className="module-container">
              <a href={pj.link}>
                <p>{pj.name}</p>
              </a>
              <ul>
                <li key={pj.desc}>{pj.desc}</li>
              </ul>
            </div>
          </div>
          <div className="module-right">
            <p>{pj.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
