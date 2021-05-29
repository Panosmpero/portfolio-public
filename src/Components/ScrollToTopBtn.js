import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = (e) => {
      if (window.scrollY > 600) setShow(true);
      else setShow(false);
    };
    document.addEventListener("scroll", checkScroll);
    return () => document.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer show={show} onClick={scrollTop}>
      <i className="fas fa-angle-double-up"></i>
    </ButtonContainer>
  );
};

export default ScrollToTopBtn;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -70%);
  width: 5rem;
  height: 5rem;
  z-index: 1000;
  place-items: center;
  border-radius: 50%;
  background-color: var(--lighter);
  color: var(--main);
  cursor: pointer;
  border: 2px var(--main) solid;
  box-shadow: 0 0 10px 1px var(--main);
  display: ${({ show }) => (show ? "grid" : "none")};
  pointer-events: ${({ show }) => (show ? "all" : "none")};

  &:hover {
    i {
      animation: move-up 1.5s ease-out infinite;
    }
  }

  i {
    font-size: 2.5rem;
  }

  @keyframes move-up {
    0% {
      transform: translateY(0%);
    }
    10% {
      transform: translateY(30%);
    }
    40% {
      transform: translateY(-30%);
    }
    60% {
      transform: translateY(30%);
    }
    90% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
