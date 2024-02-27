import React, { useCallback, useEffect, useState } from "react";
import "./slider.css";
import { memo } from "react";

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
  const [NumSlides, setNumSlides] = useState(window.innerWidth > 600 ? 3 : 2);  
  const slides = document.getElementsByClassName("mySlides");

  useEffect(() => {
    console.log(NumSlides, window.innerWidth);
  }, [NumSlides]);

  const plusSlides = useCallback(() => {
    setSlideIndex(slideIndex + 1);
  }, [slideIndex]);
  const minusSlides = useCallback(() => {
    setSlideIndex(slideIndex - 1);
  }, [slideIndex]);

  useEffect(() => {
    setNumSlides(
      window.innerWidth > 1100 ? 4 : window.innerWidth > 600 ? 3 : 2   //   Number of slides
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
  }, [plusSlides, minusSlides, slideIndex, slides, NumSlides]);

  return (
    <section id="section-skills">
      <div className="skills" id="skill">
        <h2 className="title"> Skills </h2>
        <div className="slideshow-container">
          {StylesSkills.map((skill, id) => (
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
          <p className="prev" onClick={minusSlides}>
            ❮
          </p>
          <p className="next" onClick={plusSlides}>
            ❯
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Slider);