import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Nav1({ signIn, signUp }) {
  return (
    <div className="navigation-buttons-wrapper">
      <div className="account-modal">
        <ul className="p-[15px]">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <BiUserCircle style={{ fontSize: "30px" }} />
      <p
        style={{
          fontFamily: "Montserrat",
          fontWeight: "500",
          fontSize: "15px",
        }}
      >
        Account
      </p>
    </div>
  );
}
