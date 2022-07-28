import React, { useState } from "react"
import { NavigationBar, SingleProperty } from "../components"


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
                    <SingleProperty checkImage={'./images/smallImage.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/smallImage.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/smallImage.png'} setViewedImage={setViewedImage}/>
                    <SingleProperty checkImage={'./images/smallImage.png'} setViewedImage={setViewedImage}/>
                </div>
            </div>
        </div>
    )
}