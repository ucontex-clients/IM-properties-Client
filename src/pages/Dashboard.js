import React from "react"
import { DashboardElement, DashboardSideNav } from "../components"

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
                <div className="dashboard-main-right">
                    <div className="dashboard-logo-section">
                        <div className="main-dashboard-holder"><img src="./images/dashboard.png"></img></div>
                        <p>Dashboard</p>
                    </div>
                    <div className="dashboard-layout-wrapper">
                            <DashboardElement logoBackground='rgba(61, 178, 255, 0.2)'
                            logoURL='./images/houseLogo.png' number='0' text='My Property'/>
                            <DashboardElement logoBackground='rgba(255, 152, 0, 0.2)'
                            logoURL='./images/accountBalance.png' number='0' text='Account Balance'/>
                            <DashboardElement logoBackground='rgba(0, 0, 0, 0.25)'
                            logoURL='./images/Handshake.png' number='0' text='My Referral'/>
                        <div className="dashboard-central">
                            <p>Dear John Doe, we have properties available for you</p>
                            <div><button>View Properties</button></div>
                            <p>No property has been purchased yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}