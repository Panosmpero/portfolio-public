import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PopupContainer } from "./Sidebar";

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // https://stackoverflow.com/a/42947505/13266620
    const checkForMouseout = (e) => {
      if (e.clientY < 0 || e.clientX < 0) setShow(true);
    };
    document.addEventListener("mouseout", checkForMouseout);
    return () => document.removeEventListener("mouseout", checkForMouseout);
  }, []);

  return (
    <PopupContainer show={show}>
      <PromptWrapper>
        <h1>Leaving Soon?</h1>
        <div className="underline"></div>
        <p>Come say hi at least!</p>
        <Link onClick={() => setShow(false)} to="/contact">
          <button className="contact-btn">contact me</button>
        </Link>
        <QuitPrompt onClick={() => setShow(false)}>
          <i className="fas fa-times"></i>
        </QuitPrompt>
      </PromptWrapper>
    </PopupContainer>
  );
};

const PromptWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  color: var(--main);
  height: 20rem;
  padding: 1.5rem;
  border-radius: 10px;
  z-index: 1001;
  pointer-events: all;
  text-align: center;
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
  }

  a {
    margin-top: auto;

    button {
      background-color: var(--lighter);
      color: var(--dark);
    }
  }
`;

const QuitPrompt = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(100%, -100%);
  border-radius: 50%;
  width: 100%;
  background-color: var(--light);
  color: var(--main);
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--lighter);
  }

  i {
    font-size: 1.8rem;
  }
`;

export default Popup;
