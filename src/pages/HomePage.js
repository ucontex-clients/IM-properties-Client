import React from "react"
import { NavigationBar, PropertySection, FeatureSection,
    FeedbackSection, PropertyViewSection, BlogSection, VideoSection, TopSide } from "../components"

// import {IoCallOutline} from "react-icons/io"

export default function HomePage(){
    return(
        <div>
            <TopSide />
            <NavigationBar />
            <div className="home-image-wrapper" style={{marginTop: '132px', overflow:'hidden'}}>
                <img src="./images/newHome.png" alt="home cover"></img>
                <div className="background" style={{paddingLeft:'64px'}}>
                    <h1 style={{marginTop:'160px'}}>WE ARE <span style={{color:'#FF1212'}}>IM</span> PROPERTIES</h1>
                    <p style={{marginTop:'7px'}}>you can own A Property Without Stress <br/> 
                    and become a landlord with peace of mind</p>
                    <div className="flex" style={{marginTop:'68px', columnGap:'39px'}}>
                        <button>BOOK AN INSPECTION</button>
                        <button>CONTACT US</button>
                    </div>
                </div>
            </div>

           <PropertySection />

            <FeatureSection />

            <div className="contact-info-wrapper">
                <p>Contact Us</p>
                <h2>+234-90-9088-8801</h2>
                <div className="contact-info-button-wrapper">
                    <button>Email Us</button>
                    <button>Call Us</button>
                </div>
            </div>

            <VideoSection />

            <FeedbackSection />
            
            <PropertyViewSection />
            <BlogSection />

            <div className="explore-blue">
                <div className="explore-red">
                    <div className="explore-red-left">
                        <h3>Looking for a dream property?</h3>
                        <p>We can help you realize your dream of a new property</p>
                    </div>
                    <div className="explore-red-right" onClick={() => window.location.assign('/properties')}>
                        <p>Explore Property</p>
                        <div className="arrow-container">
                            <img src="./images/exploreArrow.png" alt="explore"></img>
                            <img src="./images/exploreArrow.png" alt="explore"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}