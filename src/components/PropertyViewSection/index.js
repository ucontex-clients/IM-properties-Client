import React from "react"
import { PropertyView } from ".."

export function PropertyViewSection(){
    return(
        <div className="property-view-main-wrapper">
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