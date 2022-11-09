import React from "react"
import { DashboardElement } from "../../"

export function DashboardHome(){
    return(
        <div className="dashboard-main-right bg-white">
        <div className="dashboard-logo-section">
            <div className="main-dashboard-holder"><img src="/images/dashboard.png" alt="dashboard logo"></img></div>
            <p>Dashboard</p>
        </div>
        <div className="dashboard-layout-wrapper">
                <DashboardElement logoBackground='rgba(61, 178, 255, 0.2)'
                logoURL='/images/houseLogo.png' number='0' text='My Property'/>
                <DashboardElement logoBackground='rgba(255, 152, 0, 0.2)'
                logoURL='/images/accountBalance.png' number='0' text='Account Balance'/>
                <DashboardElement logoBackground='rgba(0, 0, 0, 0.25)'
                logoURL='/images/Handshake.png' number='0' text='My Referral'/>
            <div className="dashboard-central">
                <p>Dear John Doe, we have properties available for you</p>
                <div><button>View Properties</button></div>
                <p>No property has been purchased yet</p>
            </div>
        </div>
    </div>
    )
}