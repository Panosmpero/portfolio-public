import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Default from "./Components/Default"

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Main} />
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
