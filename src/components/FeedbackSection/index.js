import React from "react"
import { SectionTab, SectionHeading, Feedback } from ".."

export function FeedbackSection(){
    return(
        <div>
            <div className="property-tab-wrapper"
            style={{justifyContent: 'left', marginTop: '123px', marginBottom: '49px', paddingLeft: '57px'}}>
                <SectionTab text={"Testimonials"}/>
            </div>
                
            <div className="section-heading-wrapper"
            style={{justifyContent: 'space-between', fontStyle: 'italic',
            marginBottom: '70px', paddingLeft: '57px', paddingRight: '70px'}}>
                <SectionHeading text={'Clients Feedbacks'}/>
                <div className="nav-arrow-wrapper">
                    <div className="nav-arrow-container" style={{backgroundColor: 'red'}}>
                        <img src="./images/navArrow2.png"></img>
                    </div>
                    <div className="nav-arrow-container" style={{backgroundColor: 'black'}}>
                        <img src="./images/navArrow.png"></img>
                    </div>
                </div>
            </div>

            <div className="feedback-main-wrapper">
                <Feedback img1={'./images/feedbackImage1.png'} img2={'./images/userFeedback.png'} />
                <Feedback img1={'./images/feedbackImage1.png'} img2={'./images/userFeedback.png'} />
                <Feedback img1={'./images/feedbackImage1.png'} img2={'./images/userFeedback.png'} />
            </div>
        </div>
    )
}