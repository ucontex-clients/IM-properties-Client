import React from "react"
import { PropertyView } from ".."

export function PropertyViewSection(){
    return(
        <div className="property-view-main-wrapper">
            <div className="arrow-div" style={{right: '0'}}>
                <img src="./images/viewfront.png" style={{color: 'red'}}></img>
            </div>

            <div className="arrow-div">
                <img src="./images/viewback.png" style={{color: 'red'}}></img>
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