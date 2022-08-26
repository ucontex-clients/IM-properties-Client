import React from "react"

export function PropertyView({img, name, location}){
    return(
        <div className="property-main-container">
                <div className="main-view-image">
                    <img src={img} alt='view estate'></img>
                </div>
                <div className="property-fade"></div>
                <div className="property-view-bottom">
                    <div>
                        <p>{name}</p>
                        <div className="location-wrapper">
                            <div className="location-holder">
                                <img src="./images/Location.png" alt="location"></img>
                            </div>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div>
                        <button>View</button>
                    </div>
                </div>
        </div>
    )
}