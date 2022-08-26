import React from "react"
import { SectionHeading, Feedback } from ".."

export function FeedbackSection(){
    return(
        <div>
            <div className="section-heading-wrapper" id="feedback-section-heading-wrapper">
                <SectionHeading text={'Clients Feedbacks'}/>
                <div className="nav-arrow-wrapper">
                    <div className="nav-arrow-container" style={{backgroundColor: 'red'}}>
                        <img src="./images/navArrow2.png" alt="nav arrow"></img>
                    </div>
                    <div className="nav-arrow-container" style={{backgroundColor: 'black'}}>
                        <img src="./images/navArrow.png" alt="nav arrow"></img>
                    </div>
                </div>
            </div>

            <div className="feedback-main-wrapper">
                <Feedback img1={'./images/feedback1.png'} img2={'./images/userFeedback.png'} />
                <Feedback img1={'./images/feedback2.png'} img2={'./images/userFeedback.png'} />
                <Feedback img1={'./images/feedback3.png'} img2={'./images/userFeedback.png'} />
            </div>
        </div>
    )
}