import React from "react";

export function Select({img, handleInputChange, value, name, takeInputData}) {
  return (
  <div className="input-field">
      <div className="input-icon-wrapper">
        <img src={img} className="input-ico" alt="input icon"></img>
      </div>
      <select className="signup-input" value='' name={name} onChange={takeInputData}>
        <option className="option-one" value='' >--Choose Type--</option>
        <option className="option-one" value='admin' >Admin</option>
        <option className="option-one" value='user' >User</option>
      </select>
</div>
  );
}


