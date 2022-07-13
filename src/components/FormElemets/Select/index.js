import React from "react";

export function Select({img}) {
  return (
  <div className="input-field">
      <div className="input-icon-wrapper">
        <img src={img} className="input-ico"></img>
      </div>
      <select className="signup-input">
        <option className="option-one" disabled>Select account type</option>
      </select>
</div>
  );
}


