import React from "react";

export function Input({ img, type, placeholder, eye }) {
  return (
    <div className="input-field">
      <div className="input-icon-wrapper">
        <img src={img} className="input-ico"></img>
      </div>
      <input type={type} className="signup-input" placeholder={placeholder}></input>
      <div className="input-icon-wrapper2">
        <img src={eye}></img>
      </div>
    </div>
  );
}
