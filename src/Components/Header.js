import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { data } from "../data/all"

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
       // Preloads '/projects' images
      (function preloadProjects() {
        let images = []
        data.forEach((proj, i) => {
          images[i] = new Image()
          images[i].src = proj.img
        })
      })()

    }, 2000);
    return () => clearTimeout(timer)
  }, [])


  // header - footer fixes on scroll
  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        Object.assign(document.getElementById("header").style, {
          boxShadow: "0 1px 5px 1px #0a6c75",
          position: "fixed"
        })
        Object.assign(document.getElementById("footer").style, {
          marginBottom: "0.5rem",
        })
      } else {
        Object.assign(document.getElementById("header").style, {
          boxShadow: "none",
          position: "relative"
        })
        Object.assign(document.getElementById("footer").style, {
          marginBottom: "0rem"
        })
      }
    }
  });

  // Light / Dark theme
  useEffect(() => {
    Object.assign(document.getElementById("theme").style, {
      justifyContent: darkTheme ? "flex-end" : "flex-start"
    })
    document.documentElement.style.setProperty("--white", darkTheme ? "rgb(7, 3, 22)" : "rgb(255, 255, 255)");
    document.documentElement.style.setProperty("--light", darkTheme ? "rgb(51, 19, 105)" : "rgb(136, 235, 242)");
    document.documentElement.style.setProperty("--lighter", darkTheme ? "rgb(0, 0, 0)" : "rgb(231, 237, 255)");
    document.documentElement.style.setProperty("--main", darkTheme ? "#b4c1e4" : "#0a6c75");
    document.documentElement.style.setProperty("--dark", darkTheme ? "rgba(255, 255, 255, 0.856)" : "rgba(11, 5, 43, 0.856)");
  }, [darkTheme])

  const changeColor = () => {
    setDarkTheme(prev => !prev)
  };

  const showSidebar = (bool) => {
    setShow(bool)
  }

  return (
    <>
      <header className="header" id="header">
        <div className="header-container" id="header-container">
          <div className="theme-wrapper nav-items">
            <i className="far fa-sun"></i>
            <div className="theme" id="theme" onClick={changeColor}><div className="theme-ball"></div></div>
            <i className="far fa-moon"></i>
          </div>
          <div className="nav-list nav-items">
            <Navigation />
          </div>
          <i className="fas fa-bars" id="burger" onClick={() => setShow(true)}></i>
        </div>
      </header>
      <Sidebar show={show} onClick={showSidebar} />
    </>
  );
};

export default Header;
