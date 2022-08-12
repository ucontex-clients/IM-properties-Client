import React from "react"
import { NavigationBar } from "../components"

export default function ContactUs(){
    return(
        <div>
            <NavigationBar page='ContactUs' />
            <div className="about-image" style={{marginTop:'79px'}}>
                <div className="who-we-are">
                    <p>Looking for a property?</p>
                    <p className="get-support" style={{marginTop: '23px'}}>Get Support From Our Team</p>
                    <div className="support-contact-wrapper">
                        <div className="support-contact">
                            <div><img src="./images/Support.png"></img></div>
                            <p className="customer-care">Contact Our Customer Care</p>
                            <p className="care-email">care@improperties.com</p>
                            <p className="care-number">+234 8065-349-908</p>
                        </div>

                        <div className="support-contact">
                            <div><img src="./images/Support.png"></img></div>
                            <p className="customer-care">Contact Our Marketing Team</p>
                            <p className="care-email">marketing@improperties.com</p>
                            <p className="care-number">+234 8065-349-908</p>
                        </div>
                    </div>
                </div>
                <div><img src="./images/BlogImage1.png"></img></div>
            </div>
            <div className="my-contact-bottom">
                <div className="contact-bottom-wrapper">
                    <p>Fill this form</p>
                    <div className="name-email-holder">
                        <div className="contact-input-wrapper">
                            <label>Full Name</label>
                            <input type='text'></input>
                        </div>
                        <div className="contact-input-wrapper">
                            <label>Email</label>
                            <input type='email'></input>
                        </div>
                    </div>
                    <div className="contact-input-wrapper">
                            <label>Subject</label>
                            <input type='text'></input>
                        </div>
                        <div className="contact-input-wrapper" style={{position: 'relative'}}>
                            <label>Message</label>
                            <textarea type='text' style={{minHeight: '160px'}}></textarea>
                            <div className="text-image-wrapper"><img src="./images/textIm.png"></img></div>
                        </div>
                    <div className="submit-request-wrapper">
                        <button>Submit Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}