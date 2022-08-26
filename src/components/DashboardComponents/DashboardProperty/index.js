import React from "react"
import { EachProperty } from "../EachProperty"

export function DashboardProperty(){

const allMyProperties = [1,2,3,4].map((property, index) => {
    return <EachProperty key={index} />
})

    return(
        <div className="dashboard-home-main-wrapper">
            <div className="dashboard-property-logo-wrapper">
                <div><img src="./images/Property.png" alt="property logo"></img></div>
                <p>My Property</p>
                <p>4</p>
            </div>
            <div className="each-property-holder">
                {allMyProperties}
            </div>
        </div>
    )
}