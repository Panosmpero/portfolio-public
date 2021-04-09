import React, { useState } from "react";
import Social from "./Social";
import Certification from "./Certification";
import { about } from "../data/about";
import { featuredData } from "../data/featured";
import { certificationsData } from "../data/certifications";

const About = () => {
  const [text, setText] = useState(about);
  const [fccOpen, setFccOpen] = useState(true);
  const [awsOpen, setAwsOpen] = useState(false);

  const handleMarkovChain = () => {
    let markovChain = {};
    let totalText =
      featuredData.reduce((acc, x) => acc + " " + x.info, "") + " " + about;
    let allWords = totalText.split(" ");
    for (let i = 0; i < allWords.length; i++) {
      let word = allWords[i].toLowerCase().replace(/[\W_]/g, "");
      if (!markovChain[word]) markovChain[word] = [];
      if (allWords[i + 1])
        markovChain[word].push(
          allWords[i + 1].toLowerCase().replace(/[\W_]/g, "")
        );
    }
    // console.log(markovChain)
    let words = Object.keys(markovChain);
    let word = words[Math.floor(Math.random() * words.length)];
    let result = "";
    words.forEach((x) => {
      result += word + " ";
      let nextWord =
        markovChain[word][Math.floor(Math.random() * markovChain[word].length)];
      word = nextWord;
      if (!word || !markovChain.hasOwnProperty(word))
        word = words[Math.floor(Math.random() * words.length)];
    });

    setText(result);
  };

  return (
    <section className="about">
      <div className="about-container">
        <div
          id="about-randomize"
          className="about-randomize"
          onClick={handleMarkovChain}
        >
          markov chain
          <br /> generator
        </div>
        <h1 className="about-header">about me</h1>

        <div className="underline"></div>
        <div className="about-wrapper">
          <div className="about-text">
            <article>{text}</article>
          </div>
          <div className="about-certifications-container">
            {certificationsData.map((data) => (
              <Certification data={data} />
            ))}            
          </div>
          <article className="about-cv">
            Check out my CV here
            <a
              href="/Panagiotis_Berovalis_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-file-pdf"></i>
            </a>
          </article>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default About;
