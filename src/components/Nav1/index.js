import React from "react"

export function Nav1({signIn, signUp}){
    return(
        <div className="navigation-buttons-wrapper">
            <button className="signBtn" onClick={signIn}>Sign In</button>
            <button className="signBtn" onClick={signUp}>Sign Up</button>
        </div>
    )
}