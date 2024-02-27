import React, { useRef } from "react";
import "./Flow.css";
import { Link } from "react-router-dom";
import Icons from "../icons/Icons";
const Flow = () => {
  const inp = useRef("");
  return (
    <section id="flow">
      <div className="flow-submit">
        <p>see my project at once & leave here your E-mail Address</p>
        <div className="submit">
          <input
            type="text"
            name="Email Address"
            placeholder="Email Address"
            ref={inp}
          />
          <Link
            onClick={(e) => {
              alert("Thanks " + inp.current.value + " for your time");
              inp.current.value = "";
            }}
          >
            {" "}
            Submit
          </Link>
        </div>
      </div>

      <img src="./assets/logo.png" />
      <div className="flow-icon">
        <Icons />
        <p style={{ color: "rgb(175, 175, 175)" }}>
          {" "}
          Copyrights 2024 By Bavly Akramy Alfy
          <i className="fas fa-heart heart"></i>
        </p>
      </div>
    </section>
  );
};

export default Flow;
