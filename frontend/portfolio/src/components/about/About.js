import "./about.css";
import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import pic1 from "../../assets/pic1.jpg";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pic1} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a full stack developer with handful of skills like
              Java,Python,React,NextJs......
            </p>
            <p>My passion for full stack development helped me to Land here.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>REACT && NEXTJS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MACHINE LEARNING</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>SQL && PYTHON</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
