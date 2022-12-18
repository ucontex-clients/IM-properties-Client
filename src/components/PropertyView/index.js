import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export function PropertyView({ img, name, location, para, about, plots, highPrice, lowPrice }) {
  return (
    <div className="property-main-container">
      <div className="relative">
        <div className="arrow-div" style={{ left: "12px" }}>
          <MdKeyboardArrowLeft style={{ fontSize: "24px" }} />
        </div>
        <img src={img} alt="property"></img>
      </div>
      <div className="property-bottom p-[22px]">
        <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "6px", textTransform: "capitalize" }}>
          {name}
        </p>
        {/* <p style={{ fontWeight: 500 }}>N{lowPrice}- N{highPrice}</p> */}
        <p style={{ fontWeight: 500 }}>N{lowPrice}</p>
        <div className="location-bottom flex justify-between">
          <div className="flex items-center gap-x-[10px] mt-[7px]">
            <MdLocationOn />
            <p style={{ fontWeight: 400, textTransform: "capitalize" }}>{location}</p>
          </div>
          <p style={{ fontWeight: 700, color: "#FF1212" }}>{plots} plot(s)</p>
        </div>
        {para && (
          <>
            <hr
              className="my-[16px]"
              style={{ height: "1px", backgroundColor: "black" }}
            />
            <div id="propDes_ah" style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="property-description">
                {about} {" "}
              </p>
              <span className="property-description" style={{ color: "#FF2442", cursor: "pointer" }}>
                See More
              </span>

            </div>

          </>
        )}
      </div>
    </div>
  );
}
