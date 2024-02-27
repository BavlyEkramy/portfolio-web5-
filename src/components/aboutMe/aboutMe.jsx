import React, { useEffect, useState } from "react";
import "./aboutMe.css";
import TypeIt from "typeit-react";

const AboutMe = ({ flag, color }) => {
  const [style1, setStyle1] = useState(
    flag
      ? {}
      : {
          animationName: "about",
          height: "0px",
          width: "100%",
          padding: "0px 5%",
          backgroundColor: "#111",
        }
  );

  const [style2, setStyle2] = useState(
    flag
      ? {}
      : {
          textAlign: "center",
        }
  );
  return (
    <div className="aboutMe" style={{ ...style1, color: "white" }}>
      {" "}
      <div style={{ ...style2 }}>
        {flag ? <p className="p1">welcome Everyone in my portfolio </p> : ""}
        <div className="p2">
          <TypeIt
            options={{ loop: true, speed: 100, waitUntilVisible: true }}
            getBeforeInit={(instance) => {
              instance
                .type("Hi, I'm Bavly Akramy , ")
                .pause(750)
                .type("FrontEnd Developer")
                .pause(750)
                .delete(18)
                .pause(500)
                .type("BackEnd Developer")
                .pause(750)
                .delete(17)
                .pause(500)
                .type("FullStack Developer");
              return instance;
            }}
          />
        </div>
        <p className="p3">i have 1 year of experience in web Development</p>
      </div>
    </div>
  );
};

export default AboutMe;
