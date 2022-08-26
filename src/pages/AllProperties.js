import React from "react"
import { PropertiesNav, ForSale, NavigationBar } from "../components"

export default function AllProperties(){

const displayProperties = [...Array(12).keys()].map((property, index) => {
    return (
        <ForSale key={index} img={'./images/newProperty.png'} title={'CAMPUS GARDEN ESTATE'} 
        minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>
    )
})

    return(
        <div style={{backgroundColor: '#fff', paddingBottom:'356px'}}>
            <NavigationBar page='Property' />

            <div className="property-top-image-wrapper" style={{marginTop:'79px'}}>
                <img src="./images/newBuy.png" alt="all property image"></img>
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