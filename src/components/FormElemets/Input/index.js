import React, { useRef } from "react";

export function Input({ img, type, placeholder, eye, name, value,takeInputData }) {

const eyeInput = useRef()

const toggleInputType = () => {
  if (eyeInput.current.type == 'password'){
    eyeInput.current.type = 'text'
  }else{
    eyeInput.current.type = 'password'
  }
}

  return (
    <div className="input-field">
      <div className="input-icon-wrapper">
        <img src={img} className="input-ico"></img>
      </div>
      <input type={type} className="signup-input" ref={eyeInput}
      placeholder={placeholder} name={name} value={value} onChange={takeInputData}></input>
      <div className="input-icon-wrapper2" onClick={toggleInputType}>
        <img src={eye} className='password-eye'></img>
      </div>
    </div>
  );
}
