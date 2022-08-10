import React from "react"
import { ForSale } from "../../ForSale"


export function DashboardBuyProperty(){

    const displayProperties = [1, 3, 4, 8, 2,5].map((property, index) => {
        return (
            <ForSale key={index} img={'./images/saleImage.png'} title={'CAMPUS GARDEN ESTATE'} 
            desc={'Beautiful and well planned estate with a serene environment suitable for both ...'}
            minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>
        )
    })
    




    return(
        <div className="dashboard-home-main-wrapper">
            <div className="dashboard-buy-property-logo-wrapper">
                <div><img src="./images/Dashboard.png"></img></div>
                <p>Buy Property</p>
            </div>
            <p className="buy-plots">30 Properties available for you</p>
            <div className="buy-each-property-holder">
                    {displayProperties}
            </div>
    </div>
    )
}