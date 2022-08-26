import React from "react"

export function Nav1({signIn, signUp}){
    return(
        <div className="navigation-buttons-wrapper">
            <div className="signup-icon"><img src="./images/userSignup.png" alt="user icon"></img></div>
            <span className="signBtn" onClick={signIn}>Sign In</span>
            <span className="signBtn" onClick={signUp}>/</span>
            <span className="signBtn" onClick={signUp}>Sign Up</span>
        </div>
    )
}