import React from "react";
import Img from '../../assets/images/user.svg'

export function BuyerReviews(props) {
  return (
    <div style={{ paddingBlock: "25px" }} className="each-review-wrapper">
      <div className="buyer-picture">
        <img
          src={Img}
          alt="buyer"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <div className="review-text-side">
        <p className="first">{props.name}</p>
        <p className="second">{props.date}</p>
        <p className="third">
          {props.review}
        </p>
      </div>
    </div>
  );
}
