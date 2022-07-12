import React from "react";

export function Select() {
  return (
    <div className="input-field">
      <div className="input-icon-wrapper">
        <img src="../images/Mail.png" className="input-ico"></img>
      </div>
      <input type="email" className="signup-input" placeholder="E-mail"></input>
    </div>
  );
}
