import React, { useEffect, useState } from "react";
import "./home.css";
import AboutMe from "../aboutMe/aboutMe";
import Slider from "../slider/Slider";
import Projects from "../projets/Projects";
const Home = () => {
  return (
    <article id="vv">
      <section id="home">
        <AboutMe flag={true} color={"white"} />
        <img src="./assets/b11.png" className="photo" />
      </section>
      <Slider />
      <Projects />
    </article>
  );
};

export default Home;
