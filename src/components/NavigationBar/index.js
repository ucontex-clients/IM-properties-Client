import React, { useState } from "react";
import { Nav1 } from "../Nav1";
import { Nav2 } from "../Nav2";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavigationBar() {
  const page = useLocation().pathname;
  console.log(page);

  const fontStyle1 = {
    fontWeight: 500,
  };
  const fontStyle2 = {
    fontWeight: 800,
    color: "#FF2442",
  };

  const signIn = () => {
    window.location.assign("/signin");
  };

  const signUp = () => {
    window.location.assign("/signup");
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
              to="/our-services"
              style={page === "WhatWeDo" ? fontStyle2 : fontStyle1}
              onClick={(e) => {}}
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              to="/property"
              style={page === "Property" ? fontStyle2 : fontStyle1}
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
        {page === "Home" ? <Nav1 signIn={signIn} signUp={signUp} /> : <Nav2 />}
      </div>
    </div>
  );
}
