import React from "react";

export function CartItems(props) {
  return (
    <ul className="cart-item-ul">
      <li className="number-plot">
        <p>{props.number}</p>
        <p>{props.area}SQ.M {props.length}m x {props.width}m</p>
      </li>
      <li className="amount-remove">
        <p>N{props.price}</p>
        <p className="hidden md:block text-mine cursor-pointer" onClick={props.remove}>Remove</p>
        <img
          src="/images/remove.svg"
          alt="remove"
          className="md:hidden cursor-pointer"
        ></img>
      </li>
    </ul>
  );
}
