import React, { useState, useEffect } from "react";
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
    if (show === "none") {
      setShow("block")
    } else {
      setShow("none")
    }
  };

  const [found, setFound] = useState(true);
  useEffect(() => {
    checkUser();
  }, [found]);

  let checkUser = () => {
    if (localStorage.getItem("imToken") == null) {
      setFound(true)
    } else {
      setFound(false)
    }
  };

  let logoutUser = () => {
    setShow("none")
    localStorage.removeItem("imToken")
    localStorage.removeItem("imUserId")
    checkUser();
  };

  let logout = () => {
    window.confirm("Do you want to Logout?") ? logoutUser() : console.log("")
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-left">
        <div className="navigation-logo-wrapper">
          <Link to="/">
            <img src="/images/logo.png" alt="logo"></img>
          </Link>
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

      <button className="nav-button item-center">Become an ESP</button>

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
              onClick={(e) => { setShow("none") }}
            >
              Home
            </Link>
            <br />
            <br />
            <Link
              to="/about"
              style={page === "/about" ? fontStyle2 : fontStyle1}
              onClick={(e) => { setShow("none") }}
            >
              About Us
            </Link>
            <br />
            <br />
            <Link
              to="/what"
              style={page === "/what" ? fontStyle2 : fontStyle1}
              onClick={(e) => { setShow("none") }}
            >
              What we do
            </Link>
            <br />
            <br />
            <Link
              to="/properties"
              style={page === "/properties" ? fontStyle2 : fontStyle1}
              onClick={(e) => { setShow("none") }}
            >
              Our Properties
            </Link>
            <br />
            <br />
            {
              found ? <div>
                <Link
                  to="/account/login"
                  style={page === "/account/login" ? fontStyle2 : fontStyle1}
                  onClick={(e) => { setShow("none") }}
                >
                  Login
                </Link>
                <br />
                <br />
                <Link
                  to="/account/register"
                  style={page === "/account/register" ? fontStyle2 : fontStyle1}
                  onClick={(e) => { setShow("none") }}
                >
                  Register
                </Link>
              </div> : <div>
                <Link
                  to="/dashboard/home"
                  style={page === "/dashboard/home" ? fontStyle2 : fontStyle1}
                  onClick={(e) => { setShow("none") }}
                >
                  Dashboard
                </Link>
                <br />
                <br />
                <Link
                  to="/"
                  onClick={() => logout()}
                >
                  Logout
                </Link>
              </div>
            }


          </div>
        </div>
      </div>

      <div className="navigation-right">
        <Nav1 />
      </div>
    </div>
  );
}
