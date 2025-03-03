import React from "react";
import "./mywork.css";
import mywork_data from "../../assets/mywork_data.js";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id = "Mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((item, index) => {
          return <img key={index} src={item.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
      <p>Show More</p>
      <img src={arrow_icon} alt=""/>
      </div>
    </div>
  );
};

export default Mywork;
