import React from "react"

export default function({profilePicture = './images/profilePicture.png'}){
    return(
        <div>
            <div className="dashboard-nav">
                <div className="dashboard-nav-logo-holder"><img src="./images/logo.png"></img></div>
                <div className="dashboard-nav-right">
                    <div className="bell-holder"><img src="./images/bell.png"></img></div>
                    <div className="user2-holder"><img src={profilePicture}></img></div>
                </div>
            </div>


        </div>
    )
}