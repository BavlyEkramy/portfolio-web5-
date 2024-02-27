import React from "react";
import { NavLink } from "react-router-dom";
import './icon.css';
const Icons = () => {
  return (
    <nav className="icons-links">
      <NavLink
        to="https://www.linkedin.com/in/bavly-akramy-201751256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        data-toggle="tooltip"
        title="Linkedin"
      >
        <i className="fab fa-linkedin-in"></i>
      </NavLink>
      <NavLink
        to="https://github.com/BavlyEkramy"
        target="_blank"
        data-toggle="tooltip"
        title="Github"
      >
        <i className="fab fa-github"></i>
      </NavLink>
      <NavLink
        to="mailto:bavlyakramy@gmail.com"
        target="_blank"
        data-toggle="tooltip"
        title="Gmail"
      >
        <i className="far fa-envelope"></i>
      </NavLink>
    </nav>
  );
};

export default Icons;
