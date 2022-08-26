import React from "react"
import { PropertyView } from ".."

export function PropertyViewSection(){
    return(
        <div className="property-view-main-wrapper">
            <div className="arrow-div" style={{right: '12px'}}>
                <img src="./images/viewfront.png" alt="view front"></img>
            </div>

            <div className="arrow-div" style={{left: '12px'}}>
                <img src="./images/viewback.png" alt="view back"></img>
            </div>
            

            <PropertyView img={'./images/view.png'}
            name={'Savana Estate'} location={'Abuja'}/>

            <PropertyView img={'./images/view.png'}
            name={'Savana Estate'} location={'Abuja'}/>

            <PropertyView img={'./images/view.png'}
            name={'Savana Estate'} location={'Abuja'}/>

            <PropertyView img={'./images/view.png'}
            name={'Savana Estate'} location={'Abuja'}/>
        </div>
    )
}