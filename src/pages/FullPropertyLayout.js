import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartItems, NavigationBar, PlotDimension } from "../components";

export default function FullPropertyLayout() {
  const [cart, setCart] = useState([]);
  const plots = [
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1,
    2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2,
    3, 4, 5, 6, 7, 8,
  ];

  const availablePlots = plots.map((plot, index) => {
    return <PlotDimension key={index} cart={cart} setCart={setCart} />;
  });

  const allCartItems = cart?.map((item, index) => {
    return <CartItems key={index} number={index + 1} />;
  });

  useEffect(() => {
    loadProperty();
  }, []);
  let id = useParams();
  const [url] = useState("https://alert-battledress-boa.cyclic.app/api/property/single/" + id.id);
  let [property, setProperty] = useState({});

  let loadProperty = () => {
    fetch(url)
      .then(e => e.json())
      .then(res => setProperty(res.data))
  };

  return (
    <div className="layout-modal-wrapper bg-white">
      <NavigationBar page="Property" />

      <div className="view-all-layout-main-wrapper">
        <div className="layout-left-container">
          <div className="layout-first-child mb-[50px]">
            <div className="layout-head-section">
              <div>
                <p
                  style={{ color: "black", fontWeight: 700, fontSize: "15px", textTransform: "uppercase" }}
                >
                  {property?.name}
                </p>
                <div
                  className="hidden md:flex items-center gap-x-[6px] py-[12px] px-[5px] rounded-[5px] cursor-pointer"
                  style={{ backgroundColor: "#FF9800" }}
                >
                  <img src="/images/cart.svg" alt="cart"></img>
                  <p className="text-white text-[15px] font-medium font-fam">
                    {!cart.length ? "Cart Empty" : `${cart.length} Items View`}
                  </p>
                </div>
              </div>
              <div>
                <p>Select plot(s) to purchase</p>
                <p
                  className="text-[15px] font-bold font-fam mt-[10px]"
                  style={{ color: "#038566" }}
                >
                  {property?.plotLayout?.length} Plots remaining
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
                    {!cart.length ? "Cart Empty" : `${cart.length} Items View`}
                  </p>
                </div>
              </div>
            </div>

            <div className="all-layout-wrapper">
              {
                property?.plotLayout?.map((e, i) => {
                  return <PlotDimension key={i}
                    area={e.width * e.length}
                    price={e.price}
                    width={e.width}
                    length={e.length}
                    setCart={setCart}
                  />;
                })
              }
            </div>

            <div className="download-layout-button-wrapper">
              <button>Download Layout</button>
              <div
                className="flex items-center gap-x-[6px] py-[12px] px-[5px]  rounded-[5px] cursor-pointer"
                style={{ backgroundColor: "#FF9800" }}
              >
                <img src="/images/cart.svg" alt="cart"></img>
                <p className="text-white text-[15px] font-medium font-fam">
                  {!cart.length ? "Cart Empty" : `${cart.length} Items View`}
                </p>
              </div>
            </div>
          </div>
          {cart[0] && (
            <div className="my-cart-wrapper">
              <div className="my-cart-logo-section-wrapper">
                <div>
                  <img src="./images/cart.png" alt="cart"></img>
                </div>
                <p className="my-cart-para">{`My Cart - ${cart.length} Items`}</p>
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
          )}
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
