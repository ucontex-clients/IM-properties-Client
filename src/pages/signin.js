import React, { useState } from "react";
import { Input, Button } from "../components";

export default function Signin() {

  const [body, setBody] = useState({email:'', password:''})

  const takeInputData = (e) => {
    setBody(prevValue => {
      return {...prevValue, [e.target.name]: e.target.value}
    })
  }

console.log(body)


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

        <Input img="../images/Mail.png" type={'email'} placeholder={'E-mail'}
        name='email' value={body.email} takeInputData={takeInputData}/>
        <Input img={"../images/Lock.png"} type={'password'} takeInputData={takeInputData}
        placeholder={'Password'} eye={'../images/Eye.png'} name='password' value={body.password}/>

        <div className="forgot-password-container"><a href="#">Forgot Password</a></div>

        <Button text={'Create Account'} />
        <div>
          <p className="signin-option">
            Don't have account, <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
