import React from "react"

export function DashboardElement({ logoURL, logoBackground, text, number }) {
    return (<>
        <div className="full_ah dashboard-element">
            <div className="property-home-logo" style={{ backgroundColor: logoBackground }}>
                <img src={logoURL} alt='dashboard logo'></img>
            </div>
            <div className="dashboard-element-text">
                <p>{number}</p>
                <p>{text}</p>
            </div>
        </div>

        <div className="mobile_ah dashboard-element" style={{width:"30%"}}>
            <div className="property-home-logo" style={{ backgroundColor: logoBackground }}>
                <img src={logoURL} alt='dashboard logo'></img>
            </div>
            <div className="dashboard-element-text">
                <p>{number}</p>
                <p>{text}</p>
            </div>
        </div>
    </>
    )
}