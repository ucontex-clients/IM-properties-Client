import React, { useState } from "react"
import { NavigationBar, PropertyDetailBottom, SingleProperty } from "../components"


export default function PropertyDetails(){

    const [viewedImage, setViewedImage] = useState('./images/largeImage.png')


    return (
        <div>
            <NavigationBar />

            <div className="property-detail-image-main-wrapper">
                <div className="single-large-image-wrapper">
                    <img src={viewedImage}></img>
                </div>
                <div className="single-small-image-wrapper">
                    <SingleProperty checkImage={'./images/smallImage.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/smallImage.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/testImage2.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/testImage2.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/testImage3.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/testImage3.png'} setViewedImage={setViewedImage}/>
                </div>
            </div>

            <div className="detail-property-options-and-price">
                <div>
                    <p style={{background:'rgba(61, 178, 255, 0.2)', color: '#3DB2FF' }}>Inspection</p>
                    <p style={{background:'rgba(3, 192, 56, 0.2)', color: '#038566' }}>View Layout</p>
                    <p style={{background:'rgba(255, 18, 18, 0.2)', color: '#FF1212' }}>Buy Property</p>
                </div>
                <div><p>N350,000 - N500,000</p></div>
            </div>

            <PropertyDetailBottom />
           
        </div>
    )
}