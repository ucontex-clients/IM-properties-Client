import React, { useState } from "react"
import { PlotDimension, PlotButtons } from ".."


export function PropertyDetailBottom(){

    const [active, setActive] = useState('')

const plotDimensions = [1,2,3,4,5,6,7,8,9,10,11,12].map((plot, index) => {
    return <PlotDimension key={index} />
})



    return(
       <div className="property-detail-bottom-main-wrapper">
         <div className="property-detail-bottom">
            <div className="detail-bottom-top-section">
                <div className="detail-top-section">
                    <p>CAMPUS GARDEN ESTATE</p>
                    <div style={{marginTop: '5px'}} className='location-two-wrapper'>
                        <div className="location-two-holder"><img src="./images/Location2.png"></img></div>
                        <p>Obinze Umuokanne road, Owerri, Imo State</p>
                    </div>
                </div>
                <div className="share-location-wrapper">
                    <div><img src="./images/Share.png"></img></div>
                    <div><img src="./images/Love.png"></img></div>
                </div>
            </div>

            <div className="about-property-wrapper">
                <p>About Property</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>

            <div className="property-features-wrapper">
                <p>Property Features</p>
                <p></p>
            </div>

            <div className="watch-video-wrapper">
                <p>Watch Video</p>
                <div className="watch-video-container"><video src="./images/video1.mp4" controls></video></div>
            </div>
        </div>

        <div className="property-layout-wrapper">
            <div className="property-layout-head">
                <p>Property Layout</p>
                <p>30 of 30 Sold</p>
            </div>

            <div className="property-layout-main">
                    {plotDimensions}
            </div>

            <div className="plot-button-wrapper">
                <PlotButtons/>
            </div>

        </div>
       </div>
    )
}