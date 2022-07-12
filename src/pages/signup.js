import React from "react"

export default function Signup(){
    return (
        <div className="signup-container">
            <div className="signupbox" id="signup-left">
                <img src='../images/signupbackground.png' className="signup-image"></img>
            </div>
            <div className="signupbox" id="signup-right">
                <div className="logo-container">
                    <img src="../images/logo.png" className="logo"></img>
                </div>
                <p id="signup-paragraph">Sign Up</p>
                <div className="input-field">
                <img src="../images/UserAccount.png" className="input-icon"></img>
                    <select className="signup-input">
                        <option className="option-one" disabled>Select account type</option>
                        <option>first</option>
                        <option>second</option>
                        <option>third</option>
                    </select>
                </div>
                <div className="input-field">
                <img src="../images/Mail.png" className="input-icon"></img>
                    <input type='email' className="signup-input" placeholder='Email Address'></input>
                </div>
                <div className="input-field">
                <img src="../images/Name.png" className="input-icon"></img>
                    <input type='text' className="signup-input" placeholder='Username'></input>
                </div>
                <div className="input-field">
                <img src="../images/Lock.png" className="input-icon"></img>
                    <input type='password' className="signup-input" placeholder='Password'></input>
                    <img src="../images/Eye.png" className="input-icon-eye"></img>
                </div>
                <div className="input-field">
                <img src="../images/Handshake.png" className="input-icon"></img>
                    <input type='text' className="signup-input" placeholder='Referrer’s Username (Optional)'></input>
                </div>

                <div className="agreement">
                    <input type='checkbox' className="checkbox"></input>
                    <p id="agreement-paragraph">I agree to IM Properties Terms & Condition and Privacy Policy</p>
                </div>
                <div>
                    <button className="create-account-button">Create Account</button>
                </div>
                <div>
                    <p className="signin-option">Already have an account, <a href="/signin">Sign in</a></p>
                </div>
            </div>
        </div>
    )
}