import React from "react";
import { NavigationBar, PlotDimension } from "../components";

export default function AddPlot() {
  const plotDimensions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map(
    (plot, index) => {
      return <PlotDimension key={index} />;
    }
  );

  return (
    <div
      style={{
        paddingInline: "25px",
        paddingBottom: "15px",
        backgroundColor: "white",
      }}
    >
      <NavigationBar page="Property" />
      <div className="add-property-wrapper md:grid">
        <div className="add-property-left">
          <div className="add-left-head" style={{ padding: "22px 43px" }}>
            <p>CAMPUS GARDEN ESTATE PORT HARCOURT</p>
            <div>
              <p>Select plot(s) to purchase</p>
              <p className="font-fam text-green text-[13px] font-bold">
                30 Plots remaining
              </p>
            </div>
            <p className="w-fit ml-auto text-[13px] font-bold text-backblue mt-[30px] cursor-pointer">
              View Layout
            </p>
          </div>
          <div className="add-property-picture-wrapper">
            <img src="./images/Capture1.png" alt="capture"></img>
          </div>
          <div className="zoom-holder">
            <div style={{ display: "flex", columnGap: "29px" }}>
              <div className="out-in-holder">
                <img src="./images/zoomOut.png" alt="zoom"></img>
              </div>
              <div className="out-in-holder">
                <img src="./images/zoomIn.png" alt="zoom"></img>
              </div>
            </div>
          </div>
          <div className="add-plot-bottom md:grid">
            <div className="text-center">
              <button className="add-plot-button">Download Layout</button>
            </div>
            <div className="property-bottom-right w-fit mx-auto mt-[20px] md:mt-[0]">
              <label>Enter Plot Number</label>
              <div>
                <input type="text" placeholder="E.g CG-004"></input>
                <button className="add-plot-button mt-[10px]">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}
        >
          <div className="property-layout-wrapper mt-[25px] md:mt-0 hidden md:block">
            <div className="property-layout-head">
              <span>Property Layout</span>
            </div>

            <div className="property-layout-main">
              {plotDimensions}
              <div className="view1 text-center">
                <button className="py-[10px] px-[21px] font-fam text-[16px] font-bold text-white rounded-[5px] bg-backblue">
                  View Layout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
