import React from "react"

export default function Signin(){
    return(
        <div className="signup-container">
        <div className="signupbox" id="signup-left">
            <img src='../images/signupbackground.png' className="signup-image"></img>
        </div>
        <div className="signupbox" id="signup-right">
            <div className="logo-container">
                <img src="../images/logo.png" className="logo"></img>
            </div>
            <p id="signup-paragraph">Sign In</p>

            <div className="input-field">
            <img src="../images/Mail.png" className="input-icon"></img>
                <input type='email' className="signup-input" placeholder='E-mail'></input>
            </div>
            <div className="input-field">
            <img src="../images/Lock.png" className="input-icon"></img>
                <input type='password' className="signup-input" placeholder='Password'></input>
                <img src="../images/Eye.png" className="input-icon-eye"></img>
            </div>
            <div>
                <button className="create-account-button">Sign in</button>
            </div>
            <div>
                <p className="signin-option">Don't have account, <a href="/signin">Sign up</a></p>
            </div>
        </div>
    </div>
    )
}