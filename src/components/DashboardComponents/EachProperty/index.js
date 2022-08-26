import React from "react"


export function EachProperty(){
    return(
        <div className="each-property-wrapper">
                <div className="each-property-image-holder"><img src="./images/eachProperty.png" alt="property cover"></img></div>
                <div className="each-property-right">
                    <p className="title">CAMPUS GARDEN ESTATE</p>
                    <p className="location">Obinze Umuokanne road, Owerri, Imo State</p>
                    <p className="size">1911.56SQ.M 141.2m x 71.2m </p>
                    <p className="price">N1,840,000 of N2,400,000</p>
                    <div className="each-property-download-container">
                        <div className="each-property-download-wrapper"><img src="./images/downloadImage.png" alt="download icon"></img></div>
                        <p>Download allocation  letter</p>
                    </div>
                </div>
        </div>
    )
}