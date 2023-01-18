import React from "react"
import { PropertyView } from ".."
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"

export function PropertyViewSection(){
    return(
        <div className="property-view-main-wrapper">
            <div className="arrow-div" style={{right: '12px'}}>
                <MdKeyboardArrowRight style={{fontSize:'24px'}}/>
            </div>

            <div className="arrow-div" style={{left: '12px'}}>
                <MdKeyboardArrowLeft  style={{fontSize:'24px'}}/>
            </div>
            

            <PropertyView img={'./images/view1.png'}
            name={'Campus Garden Estate'} location={'Jabi, Abuja, Nigeria'}/>

            <PropertyView img={'./images/view1.png'}
            name={'Campus Garden Estate'} location={'Jabi, Abuja, Nigeria'}/>
        </div>
    )
}