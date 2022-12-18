import React from "react";

export function BuyerReviews(props) {
  return (
    <div style={{ paddingBlock: "25px" }} className="each-review-wrapper">
      <div className="buyer-picture">
        <img
          src="/images/buyer.png"
          alt="buyer"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <div className="review-text-side">
        <p className="first">Savana Estate</p>
        <p className="second">12 JUNE 2022</p>
        <p className="third">
          {props.review}
        </p>
      </div>
    </div>
  );
}
