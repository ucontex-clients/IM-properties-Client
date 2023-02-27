import React, { useState, useEffect } from "react";

export function PlotDimension({ addCart, setCart, width, length, price, area }) {
  const [selected, setSelected] = useState(false);

  const borderStyle1 = {
    border: "1px solid #C6C5C5",
  };

  const borderStyle2 = {
    border: "1px solid #FF1212",
  };

  useEffect(() => {
    if(typeof addCart === "function"){
      console.log("initialized");
    }else console.log("Not yet");
  }, []);

  //let e = width;
  const addToCart = () => {
    console.log("clicked");
    setSelected((prevValue) => !prevValue);
    // setCart((prevCart) => {
    //   return [...prevCart, 1];
    // });
    addCart();
  };

  return (
    <div style={{ textAlign: "center" }} className="plot-dimension">
      <div
        className="plot-dimension-main-wrapper"
        style={selected ? borderStyle2 : borderStyle1}
        onClick={addToCart}
      >
        <p className="dimension1">{width}m</p>
        <p className="dimension2">{length}m</p>
        <p className="dimension3">N{price}</p>
        <p className="dimension4">{area} SQ.M</p>
      </div>
      <p>School</p>
    </div>
  );
}
