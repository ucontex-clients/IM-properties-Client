import React from "react"
import { PropertiesNav, ForSale } from "../components"

export default function AllProperties(){

const displayProperties = [1, 3, 4, 8, 2,5].map((property, index) => {
    return (
        <ForSale key={index} img={'./images/saleImage.png'} title={'CAMPUS GARDEN ESTATE'} 
        desc={'Beautiful and well planned estate with a serene environment suitable for both ...'}
        minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>
    )
})

    return(
        <div>
            <PropertiesNav />

            <div className="property-top-image-wrapper">
                <img src="./images/propertyTop.png"></img>
            </div>

            <div className="buy-property-heading-container">
                <div>
                    <h3>Buy Property</h3>
                    <p>10 Properties 3000 plots</p>
                </div>
                <div className="buy-property-search">
                    <input type='text' placeholder='Search'></input>
                    <div className="search-icon-holder"></div>
                </div>
            </div>

            <div className="display-property-wrapper">
                {displayProperties}
            </div>
        </div>
    )
}