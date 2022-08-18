import React from "react"
import { Nav2 } from "../../"


export function AdminNav(){
    return(
        <div className="admin-nav-wrapper">
            <div className="navigation-logo-wrapper">
                <a href="/"><img src="./images/logo.png"></img></a>
            </div>
            <Nav2 />
        </div>
    )
}