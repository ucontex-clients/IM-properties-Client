import React, { useState } from "react"
import { DashboardElement, DashboardHome, DashboardSideNav, DashboardProperty, DashboardBooking } from "../components"
import InspectionBooking from "../components/DashboardComponents/InspectionBooking"

export default function({profilePicture = './images/profilePicture.png'}){

    const [activePage, setActivepage] = useState('dashboard')


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
                   <DashboardSideNav activePage={activePage} setActivePage={setActivepage} />
                </div>
                    {activePage == 'dashboard' && <DashboardHome />}
                    {activePage == 'property' && <DashboardProperty />}
                    {activePage == 'inspection' && <DashboardBooking />}
            </div>
        </div>
    )
}