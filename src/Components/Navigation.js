import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../Context/context";

const Navigation = () => {
  const { awsNotification, emuNotification } = useContext(Context);
  return (
    <>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
          {emuNotification && <div className="notification">1</div>}
        </li>
        <li>
          <Link to="/about">About</Link>
          {awsNotification && <div className="notification">1</div>}
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
