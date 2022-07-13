import React from "react"
import { Button, Input, Select } from "../components"

export default function Signup(){
    return (
        <div className="signup-container">
            <div id="signup-left">
                <img src='../images/signupbackground.png' className="signup-image"></img>
            </div>
            <div id="signup-right">
                <div className="logo-container">
                    <img src="../images/logo.png" className="logo"></img>
                </div>
                <p id="signup-paragraph">Sign Up</p>
                <Select img={'../images/UserAccount.png'} />
               <Input img={'../images/Mail.png'} type={'email'} placeholder={'E-mail Address'} />
               <Input img={'../images/Name.png'} type={'text'} placeholder={'Username'} />
               <Input img={'../images/Lock.png'} type={'password'}
               placeholder={'Password'} eye={'../images/Eye.png'} />
                <Input img={'../images/Handshake.png'} type={'text'} placeholder={'Referred by Vickywealth'} />

                <div className="agreement">
                    <input type='checkbox' className="checkbox"></input>
                    <p id="agreement-paragraph">I agree to IM Properties Terms & Condition and Privacy Policy</p>
                </div>
                <Button text={'Create Account'}/>
                <div>
                    <p className="signin-option">Already have an account, <a href="/signin">Sign in</a></p>
                </div>
            </div>
        </div>
    )
}