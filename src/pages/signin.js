import React, { useState } from "react";
import { Input, Button } from "../components";
const axios = require('axios')

export default function Signin() {

  const [body, setBody] = useState({email:'', password:''})

  const takeInputData = (e) => {
    setBody(prevValue => {
      return {...prevValue, [e.target.name]: e.target.value}
    })
  }

const login = async () => {
  console.log(body)
  const response = await axios.post('https://im-properties-api.herokuapp.com/api/auth/login', body)
  const data = response.data
  console.log(data)
}



  return (
    <div className="signin-container">
      <div className="signupbox" id="signin-left">
        <img
          src="../images/signupbackground.png"
          className="signup-image"
          alt="signup background"
        ></img>
      </div>
      <div className="signupbox" id="signin-right">
        <div className="logo-container">
          <img src="../images/logo.png" className="logo" alt="logo"></img>
        </div>
        <p id="signup-paragraph">Sign In</p>

        <Input img="../images/Mail.png" type={'email'} placeholder={'E-mail'}
        name='email' value={body.email} takeInputData={takeInputData}/>
        <Input img={"../images/Lock.png"} type={'password'} takeInputData={takeInputData}
        placeholder={'Password'} eye={'../images/Eye.png'} name='password' value={body.password}/>

        <div className="forgot-password-container"><a href="#">Forgot Password</a></div>

        <Button text={'Login'} run={login}/>
        <div>
          <p className="signin-option">
            Don't have account, <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
