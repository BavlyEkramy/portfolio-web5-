import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import Icons from "../icons/Icons";
import "./header.css";
const Header = () => {
  const goSkills = () => {
    window.location = "#section-skills";
  };
  const goHome = () => {
    window.location = "#home";
  };
  const goProjects = () => {
    window.location = "#project";
  };
  const goContact = () => {
    window.location = "#contact";
  };
  const [con, setCon] = useState(false);
  useEffect(() => {
    const head = document.querySelector(".header");
    const btnIcon = document.querySelector(".btnIcon");
    const bti= btnIcon.getAttribute("aria-expanded")
    head.style.height = "60px";
    head.style.alignItems = "center";
    head.style.padding = "0px 5%";

    if (con ) {
      head.style.height = "45vh";
      head.style.alignItems = "flex-start";

      head.style.padding = "20px";
    }
  }, [con]);


  return (
    <header>
      <nav className="header  navbar navbar-expand-md navbar-dark ">
        <img
          className="logo"
          src="./assets/logo.png"
          alt=""
        />
        <button
          className="navbar-toggler btnIcon"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-expanded="false"
        >
          <span
            className="navbar-toggler-icon"
            onClick={() => setCon(!con)}
          ></span>
        </button>
        <div className="collapse navbar-collapse z-1 " id="collapsibleNavbar">
          <nav className="links navbar-nav ">
            <NavLink className="nav-item" to="home" onClick={goHome}>
              Home
            </NavLink>
            <NavLink className="nav-item" to="skills" onClick={goSkills}>
              Skills
            </NavLink>
            <NavLink className="nav-item" to="proj" onClick={goProjects}>
              Projects
            </NavLink>
            <Icons />
            <div className="connect nav-item">
              <NavLink to="#contact" onClick={goContact}>
                let's connect
              </NavLink>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
