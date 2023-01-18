import React from "react"
import { SectionHeading, Category } from ".."

export function FeatureSection(){
    return (
        <div>
            <div className="section-heading-wrapper-features">
                <SectionHeading text={'Core Feature'}/>
            </div>

            <div className="categories-wrapper">
                <Category img={'./images/smartLiving.png'} title={'Smart Living'}
                desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>

                <Category img={'./images/ecoConstruction.png'} title={'Eco Construction'}
                desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>

                <Category img={'./images/attractiveLocation.png'} title={'Attractive Location'}
                desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>

                <Category img={'./images/modernTechnology.png'} title={'Modern Technology'}
                desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
            </div>
        </div>
    )
}