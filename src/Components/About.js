import React from "react";
import Social from "./Social";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>about me</h1>
        <div className="underline"></div>
        <div className="about-wrapper">
          <div className="about-text">
            <article>
              Hello, I am Panagiotis Berovalis and I am a web developer. I spend
              most of my day creating apps using HTML, CSS and Javascript, while
              experimenting with the lastest technologies and frameworks
              available. My basic fullstack training was at FreeCodeCamp, where i
              successfully completed the entire curriculum, approximately 1800
              hours of coursework in 6 months. Currently I am trying Bootstrap
              5, Deno.js and I am working my way to the basic tier certification
              of AWS (CLF-C01).
            </article>
          </div>
          <div className="about-cv">
            Check out my CV here
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <i className="far fa-file-pdf"></i>
            </a>
          </div>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default About;
