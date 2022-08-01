import React from "react"
import { DashboardElement, DashboardHome, DashboardSideNav, DashboardProperty, DashboardBooking } from "../components"

export default function({profilePicture = './images/profilePicture.png'}){
    return(
        <div style={{backgroundColor: '#F5F5F5'}}>
            <div className="dashboard-nav">
                <div className="dashboard-nav-logo-holder"><a href="/"><img src="./images/logo.png"></img></a></div>
                <div className="dashboard-nav-right">
                    <div className="bell-holder"><img src="./images/bell.png"></img></div>
                    <div className="user2-holder"><img src={profilePicture}></img></div>
                </div>
            </div>

            <div className="dashboard-main-wrapper">
                <div className="dashboard-main-left">
                   <DashboardSideNav />
                </div>
                    <DashboardBooking />
            </div>
        </div>
    )
}