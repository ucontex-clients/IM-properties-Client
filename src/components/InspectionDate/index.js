import React, { useState } from "react";
import { ChooseDate } from "../Calendar";

export function InspectionDate() {
  const [time, setTime] = useState("");

  const myStyle = {
    backgroundColor: "#FF1212",
    color: "#fff",
  };
  return (
    <div
      className="fixed grid place-items-center h-[100vh] w-[100vw] top-0 left-0 bg-blue-300"
      style={{ zIndex: 10 }}
    >
      <div
        className="property-layout-wrapper"
        style={{ width: "50%", height: "70%" }}
      >
        <div className="date-picker-head">
          <p>Book Physical Inspection</p>
        </div>

        <div className="date-picker-main">
          <div className="select-date-wrapper">
            <div>
              <img src="/images/Calendar2.png" alt="calendar"></img>
            </div>
            <p>Select Date</p>
          </div>

          <div>
            <ChooseDate />
          </div>

          <div className="select-time-wrapper">
            <div className="select-date-wrapper">
              <div>
                <img src="/images/Time.png" alt="time"></img>
              </div>
              <p>Select time</p>
            </div>
            <div
              style={{ display: "flex", columnGap: "25px" }}
              className="time-picker"
            >
              <button
                style={time === "10AM" ? myStyle : {}}
                onClick={() => setTime("10AM")}
              >
                10AM
              </button>
              <button
                style={time === "1PM" ? myStyle : {}}
                onClick={() => setTime("1PM")}
              >
                1PM
              </button>
            </div>
          </div>

          <div className="select-location-wrapper">
            <div className="select-location-logo-side">
              <div>
                <img src="/images/chooseLocation.png" alt="location"></img>
              </div>
              <p>Select Location</p>
            </div>
            <div className="select-location-select">
              <select>
                <option>Port Harcourt</option>
              </select>
              {/* <div className="fill-drop-wrapper"><img src="./images/fillDrop.png"></img></div> */}
            </div>
          </div>
          <div
            style={{ marginBlock: "78px 21px", textAlign: "center" }}
            className="book-inspection-container"
          >
            <button>Book Inspection</button>
          </div>
        </div>
      </div>
    </div>
  );
}
