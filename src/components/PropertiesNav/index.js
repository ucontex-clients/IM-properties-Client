import React from "react"

export function PropertiesNav(){
    return(
        <div className="all-properties-nav-wrapper">
            <div className="all-properties-nav-logo-container">
                <a href="/"><img src="./images/logo.png"></img></a>
            </div>
            <div className="all-properties-right-wrapper">
                <div className="all-properties-home-wrapper">
                    <div className="all-properties-home-image-container">
                        <img src="./images/Home.png"></img>
                    </div>
                    <p><a href="/">Home</a></p>
                </div>
                <div className="all-properties-account-image-container">
                    <img src="./images/Account.png"></img>
                </div>
            </div>
        </div>
    )
}