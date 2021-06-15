import React, { useContext } from "react";
import Social from "./Social";
import { Link } from "react-router-dom";
import { Context } from "../Context/context";

const Connect = () => {
  const { hired, emuNotification, setEmuNotification } = useContext(Context);
  return (
    <section className="connect">
      <video autoPlay muted loop className="video-container">
        <source src="/vid/connect.mp4" type="video/mp4" />
      </video>
      <a
        href="https://www.emu-analytics.com/"
        id="emu-analytics-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Emu Analytics Link"
        onClick={() => setEmuNotification(false)}
      >
        <img src="/img/emu.png" alt="emu-logo" />
        {emuNotification && <div className="notification">1</div>}
      </a>

      <div className="connect-text-container">
        <h1 style={{ textDecoration: hired ? "line-through" : "none" }}>
          Available for hire
        </h1>
        <div className="underline"></div>
        <h2>Find me on</h2>
        <Social />
        <h2>or</h2>
        <Link to="/contact">
          <button className="contact-btn">contact me</button>
        </Link>
      </div>
    </section>
  );
};

export default Connect;
