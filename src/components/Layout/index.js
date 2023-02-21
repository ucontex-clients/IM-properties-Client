import React, { useState } from "react";
import { NavigationBar } from "../NavigationBar";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMdRocket} from "react-icons/io";

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

        <div className="flex justify-center relative">
          <div className="flex items-center gap-x-[26px] icons-wrap1">
            <FaFacebookF style={{ fontSize: "24px", color: "#fff" }} />
            <AiOutlineTwitter style={{ fontSize: "24px", color: "#fff" }} />
            <BsInstagram style={{ fontSize: "24px", color: "#fff" }} />
          </div>
          <div
            style={{
              width: "50px",
              height: "50px",
              marginTop: "auto",
              marginLeft: "auto",
              position: "absolute",
              right: "0px",
            }}
            className="bg-mine rounded"
          >
            <a href="#top">
              <IoMdRocket style={{ fontSize: "50px", color: "#fff", paddingTop: "5px", paddingBottom: "5px"}} />
            </a>
          </div>
        </div>

        <div
          style={{
            gridColumn: "1/-1",
            display: "flex",
            marginTop: "120px",
            justifyContent: "space-between",
            borderTop: "1px solid #C4CDD5",
            paddingTop: "20px",
          }}
        >
          <div>
            <p>@ 2022 IM Properties</p>
          </div>
          <div className="flex items-center gap-x-[26px] icons-wrap2">
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
