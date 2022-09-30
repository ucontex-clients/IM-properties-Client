import React from "react"
import { NavigationBar, PropertySection, FeatureSection,
    FeedbackSection, PropertyViewSection, BlogSection, VideoSection } from "../components"

// import {IoCallOutline} from "react-icons/io"
import {AiOutlineMail, AiOutlineTwitter} from "react-icons/ai"
import {MdOutlineCall} from "react-icons/md"
import { TiLocationOutline} from "react-icons/ti"
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"

export default function HomePage(){
    return(
        <div>
            <div style={{backgroundColor:'#000000'}} className="nav-top-wrapper">
                <section style={{display:'flex'}}>
                    <MdOutlineCall style={{color:'#fff', marginRight:'5px'}}/>
                    <p>+234-806-7864-098</p>
                    <AiOutlineMail style={{color:'#fff', marginInline:'56px 10px'}} />
                    <p>improperties@gmail.com</p>
                </section>
                <section style={{display:'flex', alignItems:'cener'}}>
                    <div style={{display:'flex'}}>
                        <TiLocationOutline style={{color:'#fff', fontSize:'16px', marginRight:'5px'}}/>
                        <p>KM 37 East West Road Port Harcourt.</p>
                    </div>
                    <hr style={{marginInline:'8px 10px'}}/>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <FaFacebookF style={{color:'#fff'}} />
                        <AiOutlineTwitter style={{color:'#fff', fontSize:'20px', marginLeft:'20px'}} />
                        <BsInstagram style={{color:'#fff', fontSize:'18px', marginLeft:'20px'}} />
                    </div>
                </section>
            </div>
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