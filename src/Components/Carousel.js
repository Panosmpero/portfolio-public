import React from "react";
import styled from "styled-components";
import techs from "../data/techs";

// css based on the link below
// https://24ways.org/2010/intro-to-css-3d-transforms

const Carousel = () => {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        {techs.map(({ src, name, url }, idx) => (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <CarouselFigure key={idx} deg={idx * (360 / techs.length)}>
              <img src={src} alt={name} />
            </CarouselFigure>
          </a>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  margin: 5% auto;
  width: 210px;
  height: 80px;
  position: relative;
  perspective: 1000px;

  @media (max-width: 48em) {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: rotation 20s infinite linear;

  :hover {
    animation-play-state: paused;
  }

  @keyframes rotation {
    from {
      transform: rotateY(360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;

const CarouselFigure = styled.figure`
  display: block;
  position: absolute;
  padding: 2px;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 10px;
  overflow: hidden;
  text-align: center;
  transform: rotateY(${(props) => props.deg}deg) translateZ(300px);
  transform-origin: 0%;
  transition: all 0.3s ease;

  :hover {
    transform: rotateY(${(props) => props.deg}deg) translateZ(300px) scale(1.1);
  }

  img {
    cursor: pointer;
    height: 100%;
    width: 100%;
    max-height: 60px;
    max-width: 60px;
  }
`;

export default Carousel;
