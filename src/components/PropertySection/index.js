import React from "react"
import { ForSale, SectionHeading} from ".."


export function PropertySection(){

const goToProperties = (e) => {
    window.location.assign('/properties')
}



    return (
        <div>
                
            <div className="section-heading-wrapper">
                <SectionHeading text={'Property'}/>
            </div>

            <div className="sample-property-wrapper">
                <ForSale img={'./images/newProperty.png'} title={'CAMPUS GARDEN ESTATE'} 
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

                <ForSale img={'./images/newProperty2.png'} title={'CAMPUS GARDEN ESTATE'} 
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

                <ForSale img={'./images/newProperty3.png'} title={'CAMPUS GARDEN ESTATE'} 
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

<               ForSale img={'./images/newProperty.png'} title={'CAMPUS GARDEN ESTATE'} 
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

                <ForSale img={'./images/newProperty2.png'} title={'CAMPUS GARDEN ESTATE'} 
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>

                <ForSale img={'./images/newProperty3.png'} title={'CAMPUS GARDEN ESTATE'} 
                minPrice={'300,000'} maxPrice={'540,000'} size={'30'}/>
            </div>

            <div className="see-more-container" onClick={goToProperties}>
                <p>See More</p>
                <div className="arrow-holder-container">
                    <div className="arrow-holder">
                        <img src="./images/arrow.png" alt="arrow"></img>
                    </div>
                    <div className="arrow-holder">
                    <img src="./images/arrow.png" alt="arrow"></img>
                </div>
                </div>
            </div>
        </div>
    )
}