import React from "react";
import { Nav1 } from "../Nav1";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavigationBar() {
  const page = useLocation().pathname;

  const fontStyle1 = {
    fontWeight: 500,
  };
  const fontStyle2 = {
    fontWeight: 800,
    color: "#FF2442",
  };

  return (
    <div className="navigation-wrapper" style={{ minWidth: "900px" }}>
      <div className="navigation-left">
        <div className="navigation-logo-wrapper">
          <Link to="/">
            <img src="./images/logo.png" alt="logo"></img>
          </Link>
        </div>
        <ul>
          <li>
            <Link
              to="/"
              style={page === "/" ? fontStyle2 : fontStyle1}
              onClick={(e) => {}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={page === "/about" ? fontStyle2 : fontStyle1}
              onClick={(e) => {}}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/what"
              style={page === "/what" ? fontStyle2 : fontStyle1}
              onClick={(e) => {}}
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              style={page === "/properties" ? fontStyle2 : fontStyle1}
              onClick={(e) => {}}
            >
              Our Properties
            </Link>
          </li>
          <li>
            <button className="nav-button">Become an ESP</button>
          </li>
        </ul>
      </div>

      <div className="navigation-right">
        <Nav1 />
      </div>
    </div>
  );
}
