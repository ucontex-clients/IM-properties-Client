import React from "react";
import { CartItems, NavigationBar, PlotDimension } from "../components";

export default function FullPropertyLayout() {
  const plots = [
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1,
    2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2,
    3, 4, 5, 6, 7, 8,
  ];

  const availablePlots = plots.map((plot, index) => {
    return <PlotDimension key={index} />;
  });

  const allCartItems = [1, 2, 3, 4].map((item, index) => {
    return <CartItems key={index} number={index + 1} />;
  });

  return (
    <div className="layout-modal-wrapper bg-white">
      <NavigationBar page="Property" />

      <div className="view-all-layout-main-wrapper">
        <div className="layout-left-container">
          <div className="layout-first-child">
            <div className="layout-head-section">
              <div>
                <p
                  style={{ color: "black", fontWeight: 700, fontSize: "15px" }}
                >
                  CAMPUS GARDEN ESTATE PORT HARCOURT
                </p>
                <div
                  className="hidden md:flex items-center gap-x-[6px] py-[12px] px-[5px] rounded-[5px] cursor-pointer"
                  style={{ backgroundColor: "#FF9800" }}
                >
                  <img src="/images/cart.svg" alt="cart"></img>
                  <p className="text-white text-[15px] font-medium font-fam">
                    Cart Empty
                  </p>
                </div>
              </div>
              <div>
                <p>Select plot(s) to purchase</p>
                <p
                  className="text-[15px] font-bold font-fam mt-[10px]"
                  style={{ color: "#038566" }}
                >
                  30 Plots remaining
                </p>
              </div>

              <div className="flex justify-center items-center md:hidden mt-[21px]">
                <div
                  className="layout-last-child md:hidden"
                  onClick={() => {
                    window.location.assign("/add");
                  }}
                >
                  <div className="preview-text-holder">
                    <p>Preview</p>
                  </div>
                  <div className="layout-last-child-image-wrapper">
                    <img src="./images/Capture.png" alt="capture"></img>
                  </div>
                </div>
                <div
                  className="flex items-center gap-x-[6px] py-[12px] px-[5px] md:hidden rounded-[5px] cursor-pointer"
                  style={{ backgroundColor: "#FF9800" }}
                >
                  <img src="/images/cart.svg" alt="cart"></img>
                  <p className="text-white text-[15px] font-medium font-fam">
                    Cart Empty
                  </p>
                </div>
              </div>
            </div>

            <div className="all-layout-wrapper">{availablePlots}</div>

            <div className="download-layout-button-wrapper">
              <button>Download Layout</button>
              <div
                className="flex items-center gap-x-[6px] py-[12px] px-[5px]  rounded-[5px] cursor-pointer"
                style={{ backgroundColor: "#FF9800" }}
              >
                <img src="/images/cart.svg" alt="cart"></img>
                <p className="text-white text-[15px] font-medium font-fam">
                  Cart Empty
                </p>
              </div>
            </div>
          </div>
          <div className="my-cart-wrapper hidden md:block">
            <div className="my-cart-logo-section-wrapper">
              <div>
                <img src="./images/cart.png" alt="cart"></img>
                <p className="my-cart-number">4</p>
              </div>
              <p className="my-cart-para">My Cart</p>
            </div>
            <ul className="cart-top-ul">
              <li className="number-plot">
                <p>#</p>
                <p>Plot</p>
              </li>
              <li>
                <p>Amount</p>
              </li>
            </ul>
            {allCartItems}
            <ul className="cart-top-ul">
              <li className="number-plot">
                <p>Total</p>
                <p>1911.56SQ.M 141.2m x 71.2m </p>
              </li>
              <li>
                <p>N1,840,000</p>
              </li>
            </ul>

            <div
              className="download-layout-button-wrapper"
              style={{ marginBottom: "247px" }}
            >
              <button>Make Payment</button>
            </div>
          </div>
        </div>

        <div
          className="layout-last-child1 hidden md:block"
          onClick={() => {
            window.location.assign("/add");
          }}
        >
          <div className="preview-text-holder">
            <p>Preview</p>
          </div>
          <div className="layout-last-child-image-wrapper">
            <img src="./images/Capture.png" alt="capture"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
