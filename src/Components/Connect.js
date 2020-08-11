import React from 'react'
import Social from "./Social"
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <section className="connect">

      <video autoPlay muted loop className="video-container">
        <source src="/vid/connect.mp4" type="video/mp4" />
      </video>

      <div className="connect-text-container">
        <h1>Available for hire</h1>
        <div className="underline"></div>
        <h2>Find me on</h2>
        <Social />
        <h2>or</h2>
        <Link to="/contact">
          <button className="contact-btn">contact me</button>
        </Link>
      </div>
      
    </section>
  )
}

export default Connect
