import React from "react";
import "./profile.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
import pic1 from "../../assets/pic1.jpg";
import resume from "../../assets/resume.pdf";

const Profile = () => {
  return (
    <div id = "Home" className="profile">
      <img src={pic1} alt="profile" />
      <h1>
        <span>I'm Ramu Gande</span>,full stack developer based in India.
      </h1>
      <p>I'm a full stack developer from India</p>
      <div className="profile-action">
        <div className="profile-connect"><AnchorLink className="anchor-link" offset={50} href="#Contact">Connect with me</AnchorLink></div>
        <div className="profile-resume"><a href={resume} download="Resume">My resume</a></div>
      </div>
    </div>
  );
};

export default Profile;
