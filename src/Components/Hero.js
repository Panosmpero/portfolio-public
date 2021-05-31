import React, { useEffect } from "react";

const Hero = () => {
  // hero img animation
  useEffect(() => {
    document.getElementById("hero").className = "banner";
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-header-container">
          <h1>
            {"Panos Berovalis".split("").map((letter, i) => (
              <span key={i} className="letter-anim">
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <div className="line-animation">
          {" "}
          <div className="line-circle"></div>{" "}
        </div>
        <div className="hero-header-container">
          <p>
            {"web developer".split("").map((letter, i) => (
              <span key={i} className="letter-anim">
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
