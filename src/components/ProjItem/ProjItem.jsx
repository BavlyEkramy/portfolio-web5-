import React from "react";
import "./ProjItem.css";
import { Link } from "react-router-dom";

const ProjItem = () => {
  const data = [
    {
      link: "https://bavlyekramy.github.io/first-web/",
      img: "/assets/web1.jpg",
      p: "This template built using html and css",
    },
    {
      link: "https://bavlyekramy.github.io/wep-2/",
      img: "./assets/web2.jpg",
      p: "This template 2 showing a website using html css and its new versions like html5 css3 ",
    },
    {
      link: "https://bavlyekramy.github.io/web-3-1/",
      img: "./assets/web3.jpg",
      p: "This template 3 showing a website using Bootstrap framework",
    },
    {
      link: "https://bavlyekramy.github.io/wep-4/",
      img: "./assets/web4.jpg",
      p: "This template 4 for a sample e-commerce website built with JavaScript, HTML5, and CSS3.",
    },
  ];

  return (
    <section id="ProjItem">
      {data.map((e, index) => (
        <div className="item" key={index}>
          <Link to={e.link} target="_blank">
            <img className="item-img" src={e.img} alt="" />
            <div className="item-overlay">{e.p}, <u>click here to visit the website</u></div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProjItem;
