import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export function PropertyView({ img, name, location, para }) {
  return (
    <div className="property-main-container">
      <div className="relative">
        <div className="arrow-div" style={{ left: "12px" }}>
          <MdKeyboardArrowLeft style={{ fontSize: "24px" }} />
        </div>
        <img src={img} alt="property"></img>
      </div>
      <div className="property-bottom p-[22px]">
        <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "6px" }}>
          {name}
        </p>
        <p style={{ fontWeight: 500 }}>N300,000 - N540,000</p>
        <div className="location-bottom flex justify-between">
          <div className="flex items-center gap-x-[10px] mt-[7px]">
            <MdLocationOn />
            <p style={{ fontWeight: 400 }}>{location}</p>
          </div>
          <p style={{ fontWeight: 700, color: "#FF1212" }}>70 plots</p>
        </div>
        {para && (
          <>
            <hr
              className="my-[16px]"
              style={{ height: "1px", backgroundColor: "black" }}
            />
            <p className="property-description">
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,{" "}
              <span style={{ color: "#FF2442", cursor: "pointer" }}>
                see more
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
