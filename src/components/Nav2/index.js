import React from "react"


export function Nav2(){
    return(
        <div className="user-right-wrapper">
            <div className="nav2-image-holder" onClick={()=> window.location.assign('/dashboard')}>
                <div><img src="./images/use.png"></img></div>
                <p>Esther</p>
            </div>
            <p>Logout</p>
        </div>
    )
}