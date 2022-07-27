import React from "react"

export function SingleProperty({checkImage, setViewedImage}){

    const changeView = () => {
        setViewedImage(checkImage)
    }
    
    return (
        <div className="small-image-wrapper" onClick={changeView}>
            <div className="small-image-view-show"><p>View</p></div>
            <img src={checkImage}></img>
        </div>
    )
}