import React from "react"
import { Category, Feedback,
    ForSale, NavigationBar, SectionHeading,
    SectionTab, PropertySection, FeatureSection,
    FeedbackSection, PropertyViewSection, BlogSection } from "../components"

export default function HomePage(){
    return(
        <div>
            <NavigationBar />
            <div className="home-image-wrapper">
                <img src="./images/image1.png" alt="home image"></img>
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

            <FeedbackSection />
            
            <PropertyViewSection />
            <BlogSection />

            <div className="explore-blue">
                <div className="explore-red">
                    <div className="explore-red-left">
                        <h3>Looking for a dream property?</h3>
                        <p>We can help you realize your dream of a new property</p>
                    </div>
                    <div className="explore-red-right">
                        <p>Explore Property</p>
                        <div className="arrow-container">
                            <img src="./images/exploreArrow.png" ></img>
                            <img src="./images/exploreArrow.png" ></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}