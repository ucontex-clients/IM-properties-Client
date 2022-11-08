import React from "react"

export function PropertiesNav(){
    return(
        <div className="all-properties-nav-wrapper">
            <div className="all-properties-nav-logo-container">
                <a href="/"><img src="./images/logo.png" alt="logo"></img></a>
            </div>
            <div className="all-properties-right-wrapper">
                <div className="all-properties-home-wrapper">
                    <div className="all-properties-home-image-container">
                        <img src="./images/Home.png" alt="home"></img>
                    </div>
                    <p><a href="/">Home</a></p>
                </div>
                <div className="all-properties-account-image-container">
                    <img src="./images/Account.png" alt="account"></img>
                </div>
            </div>
        </div>
    )
}