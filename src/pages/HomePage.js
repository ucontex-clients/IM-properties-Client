import React from "react"
import { Category, ForSale, NavigationBar, SectionHeading, SectionTab } from "../components"

export default function HomePage(){
    return(
        <div>
            <NavigationBar />
            <div className="home-image-wrapper">
                <img src="./images/image1.png"></img>
            </div>

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

            <div className="see-more-container">
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

            <div className="features-tab-wrapper">
                <SectionTab text={"Features"}/>
            </div>

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

            <div className="contact-info-wrapper">
                <p>Contact Us</p>
                <h2>+234-90-9088-8801</h2>
                <div className="contact-info-button-wrapper">
                    <button>Email Us</button>
                    <button>Call Us</button>
                </div>
            </div>
        </div>
    )
}