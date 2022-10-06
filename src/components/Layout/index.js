import React from "react";
import { NavigationBar } from "../NavigationBar";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
      <footer className="footer-wrapper grid grid-cols-4 gap-x-[100px]">
        <div>
          <h3>About Us</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
          </p>
        </div>

        <div>
          <h3>Helpful Link</h3>
          <ul>
            <li>What we do</li>
            <li>Our Properties</li>
            <li>Become an ESP</li>
          </ul>
        </div>

        <div>
          <h3>Latest Posts</h3>
          <ul>
            <li>How to buy Property</li>
            <li>How to make money</li>
            <li>How to make money</li>
          </ul>
        </div>

        <div className="flex items-end">
          <div
            style={{
              width: "50px",
              height: "50px",
              marginTop: "auto",
              marginLeft: "auto",
            }}
            className="bg-mine rounded"
          ></div>
        </div>

        <div
          style={{
            gridColumn: "1/-1",
            display: "flex",
            marginTop: "170px",
            justifyContent: "space-between",
            borderTop: "1px solid #C4CDD5",
            paddingTop: "25px",
          }}
        >
          <div>
            <p>@ 2022 IM Properties</p>
          </div>
          <div className="flex items-center gap-x-[26px]">
            <FaFacebookF style={{ fontSize: "24px", color: "#fff" }} />
            <AiOutlineTwitter style={{ fontSize: "24px", color: "#fff" }} />
            <BsInstagram style={{ fontSize: "24px", color: "#fff" }} />
          </div>
          <div>
            <p>Design: Hifertech</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
