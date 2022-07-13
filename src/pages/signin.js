import React from "react";
import { Input, Button } from "../components";

export default function Signin() {
  return (
    <div className="signin-container">
      <div className="signupbox" id="signin-left">
        <img
          src="../images/signupbackground.png"
          className="signup-image"
        ></img>
      </div>
      <div className="signupbox" id="signin-right">
        <div className="logo-container">
          <img src="../images/logo.png" className="logo"></img>
        </div>
        <p id="signup-paragraph">Sign In</p>

        <Input img="../images/Mail.png" type={'email'} placeholder={'E-mail'} />
        <Input img={"../images/Lock.png"} type={'password'}
        placeholder={'Password'} eye={'../images/Eye.png'} />

        <Button text={'Create Account'} />
        <div>
          <p className="signin-option">
            Don't have account, <a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
