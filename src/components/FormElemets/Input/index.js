import React from "react";

export function Input({ img }) {
  return (
    <div className="input-field">
      <div className="input-icon-wrapper">
        <img src={img} className="input-ico"></img>
      </div>
      <input type="email" className="signup-input" placeholder="E-mail"></input>
    </div>
  );
}
