import { NavLink } from "react-router-dom";
import "./project.css";
import { React, useEffect, useRef } from "react";

const Projects = () => {
  const style1 = ({ isActive }) => {
    return {
      color: isActive ? "rgb(50, 105, 220)" : "#fff",
    };
  };
  const ref = useRef("");

  useEffect(() => {
    ref.current.click();
  }, []);

  return (
    <section id="project">
      <h2 className="title">Projects</h2>
      <p className="proj-title">my name is bavly , this is the 4th projects </p>
      <nav className="project-links">
        <NavLink style={style1} to="/proj" ref={ref}>
          My projects
        </NavLink>
        <NavLink style={style1} to="/contact">
          contact me
        </NavLink>
        <NavLink style={style1} to="/about">
          about me
        </NavLink>
      </nav>
    </section>
  );
};

export default Projects;
