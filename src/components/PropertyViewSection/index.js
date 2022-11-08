<<<<<<< Updated upstream
import React from "react";
import { PropertyView } from "..";

export function PropertyViewSection() {
  return (
    <div className="property-view-main-wrapper">
      <PropertyView
        img={"./images/view1.png"}
        name={"Campus Garden Estate"}
        location={"Jabi, Abuja, Nigeria"}
        para={true}
      />

      <PropertyView
        img={"./images/view1.png"}
        name={"Campus Garden Estate"}
        location={"Jabi, Abuja, Nigeria"}
        para={true}
      />
    </div>
  );
}
=======
import React from "react"
import { PropertyView } from ".."
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"

export function PropertyViewSection(){
    return(
        <div className="property-view-main-wrapper grid gap-x-[65px]">
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
>>>>>>> Stashed changes
