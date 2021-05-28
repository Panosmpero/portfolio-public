import React, { useEffect, useState } from "react";
import styled from "styled-components";
import techs from "../data/techs";
import Loading from "./Loading";

// css based on the link below
// https://24ways.org/2010/intro-to-css-3d-transforms

const Carousel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, [700]);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CarouselContainer>
      {loading && <Loading />}
      <CarouselWrapper>
        {techs.map(({ src, name, url }, idx) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={idx}>
            <CarouselFigure deg={idx * (360 / techs.length)}>
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
  animation: rotation 15s infinite linear;

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

const totalPixelLength = 1904;
const size = Math.floor(totalPixelLength / techs.length);
const CarouselFigure = styled.figure`
  // border: 1px black solid;
  display: block;
  position: absolute;
  padding: 2px;
  width: ${size}px;
  height: ${size}px;
  max-height: 100px;
  left: 50%;
  top: 10px;
  overflow: hidden;
  text-align: center;
  transform: rotateY(${(props) => props.deg}deg) translateZ(300px);
  transform-origin: 0%;
  transition: all 0.3s ease;

  :hover {
    transform: rotateY(${(props) => props.deg}deg) translate3d(0, -10%, 300px)
      scale(1.2);
  }

  img {
    cursor: pointer;
    height: 100%;
    width: 100%;
    max-height: ${size - 2}px;
    max-width: ${size - 2}px;
  }
`;

export default Carousel;
