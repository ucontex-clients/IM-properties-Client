import React from "react"
import { NavigationBar, PropertySection, FeatureSection,
    FeedbackSection, PropertyViewSection, BlogSection, VideoSection, TopSide } from "../components"

// import {IoCallOutline} from "react-icons/io"

export default function HomePage(){
    return(
        <div>
            <TopSide />
            <NavigationBar />
            <div className="home-image-wrapper" style={{marginTop: '79px'}}>
                <img src="./images/newHome.png" alt="home cover"></img>
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