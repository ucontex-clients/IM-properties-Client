import React, { useContext } from "react";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export function TopSide() {
  return (
    <div
      style={{ backgroundColor: "#000000" }}
      className="nav-top-wrapper hidden md:flex"
    >
      <section style={{ display: "flex" }}>
        <MdOutlineCall style={{ color: "#fff", marginRight: "5px" }} />
        <p>+234-806-7864-098</p>
        <AiOutlineMail style={{ color: "#fff", marginInline: "56px 10px" }} />
        <p>improperties@gmail.com</p>
      </section>
      <section style={{ display: "flex", alignItems: "cener" }}>
        <div style={{ display: "flex" }}>
          <TiLocationOutline
            style={{ color: "#fff", fontSize: "16px", marginRight: "5px" }}
          />
          <p>KM 37 East West Road Port Harcourt.</p>
        </div>
        <hr style={{ marginInline: "8px 10px" }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul style={{ display: "flex", alignItems: "center" }}>
            <li>
              <a href="https://facebook.com">
                <FaFacebookF style={{ color: "#fff" }} />
              </a>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <a href="https://twitter.com">
                <AiOutlineTwitter style={{ color: "#fff", fontSize: "20px" }} />
              </a>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <a href="https://instagram.com">
                <BsInstagram style={{ color: "#fff", fontSize: "18px" }} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
