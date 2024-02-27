import React, { useEffect, useState } from "react";
import "./slider.css";

const Slider = () => {
  const StylesSkills = [
    {
      col: "rgb(102, 165, 220)",
      percent: "10",
      skillName: " ",
    },
    {
      col: "rgb(50, 155, 200)",
      percent: "95",
      skillName: "HTML",
    },
    {
      col: " rgb(32 ,  175, 150)",
      percent: "85",
      skillName: "CSS",
    },
    {
      col: "rgb(132 ,  70 ,  70)",
      percent: "75",
      skillName: "JAVASCRIPT",
    },
    {
      col: "rgb(50 , 50,  200)",
      percent: "60",
      skillName: "REACT",
    },
    {
      col: "rgb(0, 175, 150)",
      percent: "30",
      skillName: "C++",
    },
    {
      col: "rgb(120, 100, 200)",
      percent: "90",
      skillName: "JAVA",
    },
    {
      col: "rgb(20, 150, 200)",
      percent: "70",
      skillName: "SQL",
    },
    {
      col: "rgb(200, 150, 25)",
      percent: "95",
      skillName: "MATH",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [NumSlides, setNumSlides] = useState(window.innerWidth > 600 ? 3 : 2); //   Number of slides
  const [slides, setSlides] = useState(
    document.getElementsByClassName("mySlides")
  );

  useEffect(() => {
    console.log(NumSlides, window.innerWidth);
  }, [NumSlides]);

  const plusSlides = () => {
    setSlideIndex(slideIndex + 1);
  };
  const minusSlides = () => {
    setSlideIndex(slideIndex - 1);
  };

  useEffect(() => {
    setNumSlides(
      window.innerWidth > 1100 ? 4 : window.innerWidth > 600 ? 3 : 2
    );
    if (slideIndex > slides.length - NumSlides) {
      setSlideIndex(slides.length - NumSlides);
    }
    if (slideIndex < 1) {
      setSlideIndex(1);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < NumSlides; i++) {
      slides[(slideIndex + i) % slides.length].style.display = "block";
    }
  }, [plusSlides, minusSlides]);

  return (
    <section id="section-skills">
      <div className="skills">
        <h2 className="title"> Skills </h2>
        <div className="slideshow-container">
          {StylesSkills.map((skill,id) => (
            <div
              key={id}
              className={skill.percent < 50 ? "mySlides less" : "mySlides"}
              style={{
                "--p": skill.percent,
                "--col": skill.col,
              }}
            >
              <h3>
                {skill.percent} <span>%</span>
              </h3>
              <h4>{skill.skillName}</h4>
            </div>
          ))}

          <a className="prev" onClick={minusSlides}>
            ❮
          </a>
          <a className="next" onClick={plusSlides}>
            ❯
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
