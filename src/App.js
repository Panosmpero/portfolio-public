import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Default from "./Components/Default"
import Popup from "./Components/Popup";

function App() {
  return (
    <>
      <Header />
      <Popup />
      <div className="main">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route component={Default} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
