import React, { useEffect } from "react";

const Hero = () => {
  const img = new Image();
  img.src = "/img/profile_img.png";

  // hero img animation
  useEffect(() => {
    document.getElementById("hero").className = "banner";
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-header-container">
          <h1>panos berovalis</h1>
        </div>
        <div className="line-animation"> <div className="line-circle"></div> </div>
        <div className="hero-header-container">
          <p>web developer</p>
        </div>
      </div>
      {/* <div className="hero-my-img-container" id="hero-img-container">
        <img src={img.src} alt="profile" id="hero-img" />
      </div> */}
    </div>
  );
};

export default Hero;
