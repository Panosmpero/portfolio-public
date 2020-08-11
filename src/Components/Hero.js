import React, { useEffect } from "react";

const Hero = () => {

  const img = new Image();
  img.src = "/img/profile_img.png"

  // hero img animation
  useEffect(() => {
    document.getElementById("hero").className = "banner";
    Object.assign(document.getElementById("hero-img-container").style, {
      boxShadow: "15px 15px 45px 10px white",
      top: "30%",
      left: "65%",
      transform: "scale(1)"
    })
    Object.assign(document.getElementById("hero-img").style, {
      boxShadow: "15px 15px 45px 10px white",
      transform: "translate(-12%, -12%)"
    })
  }, [])

  return (
    <div className="hero" id="hero">
      <div className="hero-header" id="hero-header">
        <h1 className="hero-title">i am panos</h1>
      </div>
      <div className="hero-text" id="hero-text">
        <p>web developer</p>
      </div>
      <div className="hero-my-img-container" id="hero-img-container">
        <img src={img.src} alt="profile" id="hero-img"/>
      </div>
    </div>
  );
};

export default Hero;
