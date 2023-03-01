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

        <div className="mobile_ah dashboard-element" style={{width:"auto", padding: "10px 12px 5px 12px"}}>
            {/*<div className="property-home-logo" style={{ backgroundColor: logoBackground }}>
                <img src={logoURL} alt='dashboard logo'></img>
            </div>*/}
            <div className="dashboard-element-text flex justify-center items-center" style={{flexWrap: "wrap", flexDirection: "column"}}>
                <div><p>{number}</p></div>
                <div><p>{text}</p></div>
            </div>
        </div>
    </>
    )
}