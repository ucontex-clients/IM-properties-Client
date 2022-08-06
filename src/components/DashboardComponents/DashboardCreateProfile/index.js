import React from "react"


export function DashboardCreateProfile(){
    return(
        <div className="dashboard-main-right">
            <div className="dashboard-logo-section">
                <div className="main-dashboard-holder"><img src="./images/dashboard.png"></img></div>
                <p>Dashboard</p>
                <div className="arrow-right2-container"><img src="./images/arrowRight2.png"></img></div>
                <p>Profile</p>
            </div>
            <div className="dashboard-layout-wrapper" id="view-profile-right">
                <p className="profile-update-buyer">Profile Update for Buyer</p>
                <div className="create-profile-main">
                    <div className="done-wrapper"><img src="./images/Done.png"></img></div>
                    <p className="hi-name">Hi, <span>John Doe</span></p>
                    <p className="confirm-update">Your personal contact and details has been updated successfully</p>
                    <div className="view-profile-button-container">
                        <button>View Profile</button>
                        <button>Continue to dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}