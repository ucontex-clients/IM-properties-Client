import React from "react"
import { ForSale } from "../../ForSale"

export function DashboardProperty(){

const allMyProperties = [1,2].map((property, index) => {
    return (<ForSale
    key={index}
    img={"/images/newProperty.png"}
    title={"CAMPUS GARDEN ESTATE"}
    minPrice={"300,000"}
    maxPrice={"540,000"}
    size={"30"}
  />)
})

    return(
        <div className="dashboard-home-main-wrapper">
            <div className="dashboard-property-logo-wrapper">
                <div><img src="/images/Property.png" alt="property logo"></img></div>
                <p>My Property</p>
                <p>4</p>
            </div>
            <div className="each-property-holder">
                {allMyProperties}
            </div>
        </div>
    )
}