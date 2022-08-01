import React from "react"

export function SimilarProperty(){
    return (
        <div className="similar-property-container">
            <div className="similar-property-image"><img src="./images/similar.png"></img></div>
            <div className='similar-property-right'>
                <p>Savana Estate</p> 
                <div className="similar-location-wrapper">
                    <div><img src="./images/redLocation.png"></img></div>
                    <p>Abuja</p>
                </div>
                <p>N350,000 - N500,000</p>
            </div>
        </div>
    )
}