import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartItems, NavigationBar, PlotDimension } from "../components";
const axios = require("axios");

export default function FullPropertyLayout() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("imcart")));
  const [total, setTotal] = useState(0);
  let navigate = useNavigate();
  let arr = [];
  let num;

  useEffect(() => {
    loadProperty();
    getTotal();
  }, []); 

  let id = useParams();
  const [url] = useState("https://nice-tan-harp-seal-wrap.cyclic.app/api/property/single/" + id.id);
  let [property, setProperty] = useState({});

  let loadProperty = () => {
    axios({
      url: url,
      method: "GET"
    })
    .then((res) => {
      setProperty(res.data.message.data)
      localStorage.setItem("improperty", JSON.stringify(res.data.message.data))
    })
  };
  let addCart = (e) => {
    if (cart !== null) {
      cart.push(e)
      localStorage.setItem("imcart", JSON.stringify(cart))
      loadCart();
      getTotal();
    } else {
      let cartt = [];
      cartt.push(e)
      localStorage.setItem("imcart", JSON.stringify(cartt))
      loadCart();
      getTotal();
    }
  };
  let loadCart = () => {
    setCart(JSON.parse(localStorage.getItem("imcart")));
  };
  let removeItem = (i) => {
    let cartt = JSON.parse(localStorage.getItem("imcart"));
    cartt.splice(i, 1)
    localStorage.setItem("imcart", JSON.stringify(cartt))
    getTotal();
    loadCart();
  };

  let getTotal = () => {
    if(num){
      setTotal(num)
    }
    else{
      let carttt = JSON.parse(localStorage.getItem("imcart"));
      carttt?.map((e, i) => {
        arr.push(e.price)
      })
      num = arr.reduce((a, b) => a + b, 0);
      setTotal(num)
    }
    
  };

  let makePayment = () => {
    let data = {
      property:property,
      total:total
    }
    localStorage.setItem("imData", JSON.stringify(data));
    localStorage.setItem("impay", total)
    navigate("/payment")
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
                    {!cart?.length ? "Cart Empty" : `${cart?.length} Items View`}
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
                    {!cart?.length ? "Cart Empty" : `${cart?.length} Items View`}
                  </p>
                </div>
              </div>
            </div>

            <div className="all-layout-wrapper">
              {
                property?.plotLayout?.map((e, i) => {
                  console.log(e);
                  return <PlotDimension key={i}
                    area={e.width * e.length}
                    price={e.price}
                    width={e.width}
                    length={e.length}
                    addCart={() => addCart(e)}
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
                  {!cart?.length ? "Cart Empty" : `${cart?.length} Items View`}
                </p>
              </div>
            </div>
          </div>
          {/* {cart[0] && ( */}
          <div className="my-cart-wrapper">
            <div className="my-cart-logo-section-wrapper">
              <p className="my-cart-para">{`My Cart - ${cart ? cart?.length : 0} Items`}</p>
            </div>
            {cart?.length === 0 ?
              <div className="my-cart-para">Empty Cart</div> :
              <ul className="cart-top-ul">
                <li className="number-plot">
                  <p>#</p>
                  <p>Plot</p>
                </li>
                <li>
                  <p>Amount</p>
                </li>
              </ul>
            }

            {/* {allCartItems} */}

            {cart?.map((e, i) => {
              return <CartItems
                key={i}
                number={i + 1}
                area={e.width * e.length}
                length={e.length}
                width={e.width}
                price={e.price}
                remove={() => removeItem(i)}
              />
            })}
            <ul className="cart-top-ul">
              <li className="number-plot">
                <p>Total</p>
              </li>
              <li>
                <p>N{cart?.length === 0 ? 0 : total}</p>
              </li>
            </ul>

            <div
              className="download-layout-button-wrapper"
            // style={{ marginBottom: "247px" }}
            >
              <button onClick={() => makePayment()}>Make Payment</button>
            </div>
          </div>
          {/* // )} */}
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
            {/* <img src="./images/Capture.png" alt="capture"></img> */}
            <img src="https://cdn.pixabay.com/photo/2017/11/07/20/43/christmas-tree-2928142__480.jpg" alt="capture"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
