import React from "react"
import { ForSale, SectionHeading, SectionTab } from ".."


export function PropertySection(){

const goToProperties = (e) => {
    window.location.assign('/properties')
}



    return (
        <div>
             <div className="property-tab-wrapper">
                <SectionTab text={"Property"}/>
            </div>
                
            <div className="section-heading-wrapper">
                <SectionHeading text={'Featured Property'}/>
            </div>

            <div className="sample-property-wrapper">
                <ForSale img={'./images/saleImage.png'} title={'CAMPUS GARDEN ESTATE'} 
                desc={'Beautiful and well planned estate with a serene environment suitable for both ...'}
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

                <ForSale img={'./images/saleImage.png'} title={'CAMPUS GARDEN ESTATE'} 
                desc={'Beautiful and well planned estate with a serene environment suitable for both ...'}
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

                <ForSale img={'./images/saleImage.png'} title={'CAMPUS GARDEN ESTATE'} 
                desc={'Beautiful and well planned estate with a serene environment suitable for both ...'}
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>
            </div>

            <div className="see-more-container" onClick={goToProperties}>
                <p>See More</p>
                <div className="arrow-holder-container">
                    <div className="arrow-holder">
                        <img src="./images/arrow.png"></img>
                    </div>
                    <div className="arrow-holder">
                    <img src="./images/arrow.png"></img>
                </div>
                </div>
            </div>
        </div>
    )
}