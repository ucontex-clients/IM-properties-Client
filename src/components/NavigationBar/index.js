import React, { useState } from "react";
import { Nav1 } from "../Nav1";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavigationBar() {
  const page = useLocation().pathname;

  const fontStyle1 = {
    fontWeight: 500,
  };
  const fontStyle2 = {
    fontWeight: 800,
    color: "#FF2442",
  };

  const [show, setShow] = useState("none");
  let hide = () => {
    if (show == "none") {
      setShow("block")
    } else {
      setShow("none")
    }
  };

  return (
<<<<<<< Updated upstream
    <div className="navigation-wrapper">
      <div className="navigation-left">
        <div className="navigation-logo-wrapper">
          <Link to="/">
            <img src="/images/logo.png" alt="logo"></img>
          </Link>
=======
    <div className="navigation-wrapper bg-white">
        <div className="navigation-left">
            <div className="navigation-logo-wrapper">
                <a href="/"><img src="./images/logo.png" alt="logo"></img></a>
            </div>
            <ul>
                    <li><a href="/"
                    style={tab==='Home'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('Home')
                    }}>Home</a></li>
                    <li><a href="/about"
                    style={tab==='AboutUs'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('AboutUs')
                    }}>About Us</a></li>
                    <li><a href="/our-services"
                    style={tab==='WhatWeDo'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('WhatWeDo')
                    }}>What we do</a></li>
                    <li><a href="/property"
                    style={tab==='Property'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('Property')
                    }}>Our Properties</a></li>
                    <li>
                        <button className="nav-button">Become an ESP</button>
                    </li>
                </ul>
>>>>>>> Stashed changes
        </div>
        <ul className="navigation-wrapper-ul">
          <li>
            <Link
              to="/"
              style={page === "/" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={page === "/about" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/what"
              style={page === "/what" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              to="/properties"
              style={page === "/properties" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              Our Properties
            </Link>
          </li>
        </ul>
      </div>

      <button className="nav-button">Become an ESP</button>

      <div className="">
        <div className="mobile_ah container">
          <GiHamburgerMenu style={{ fontSize: "40px" }} onClick={() => hide()} />

          <div className="" style={{
            display: show, position: "absolute", background: "white",
            marginLeft: "-50px", padding: "20px", fontSize: "12px"
          }}>
            <Link
              to="/"
              style={page === "/" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              Home
            </Link>
            <br />
            <br />
            <Link
              to="/about"
              style={page === "/about" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              About Us
            </Link>
            <br />
            <br />
            <Link
              to="/what"
              style={page === "/what" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              What we do
            </Link>
            <br />
            <br />
            <Link
              to="/properties"
              style={page === "/properties" ? fontStyle2 : fontStyle1}
              onClick={(e) => { }}
            >
              Our Properties
            </Link>

          </div>
        </div>
      </div>

      <div className="navigation-right">
        <Nav1 />
      </div>
    </div>
  );
}
