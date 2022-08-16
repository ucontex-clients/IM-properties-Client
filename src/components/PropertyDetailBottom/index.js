import React, { useState } from "react"
import { PlotDimension, PlotButtons, SimilarProperty, BuyerReviews, ChooseDate} from ".."

import {BsFillShareFill} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"


export function PropertyDetailBottom(){

    const [active, setActive] = useState('')

    const [time, setTime] = useState('')

    const myStyle = {
        backgroundColor: '#FF1212',
        color: '#fff'
    }







const plotDimensions = [1,2,3,4,5,6,7,8,9,10,11,12].map((plot, index) => {
    return <PlotDimension key={index} />
})

const allSimilarProperty = [1,2,3].map((property, index) => {
    return <SimilarProperty />
})

const allBuyerReviews = [1,2,3].map((review, index) => {
    return <BuyerReviews key={index} />
})



    return(
       <div className="property-detail-bottom-main-wrapper">
         <div className="property-detail-bottom">
            <div className="detail-bottom-top-section">
                <div className="detail-top-section">
                    <p>CAMPUS GARDEN ESTATE</p>
                    <div style={{marginTop: '5px'}} className='location-two-wrapper'>
                        <div className="location-two-holder"><img src="./images/Location2.png"></img></div>
                        <p>Obinze Umuokanne road, Owerri, Imo State</p>
                    </div>
                </div>
                <div className="share-location-wrapper">
                    <div><BsFillShareFill className="imported-icon"/></div>
                    <div><FiHeart className="imported-icon"/></div>
                </div>
            </div>

            <div className="about-property-wrapper">
                <p>About Property</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>

            <div className="property-features-wrapper">
                <p>Property Features</p>
                <p></p>
            </div>

            <div className="watch-video-wrapper">
                <p>Watch Video</p>
                <div className="watch-video-container"><video src="./images/video1.mp4" controls></video></div>
            </div>

            <div className="buyer-review-wrapper">
                <p>10 Reviews</p>
                {allBuyerReviews}
                <div className="buyer-review-button"><button>10 more Review</button></div>
            </div>

            <div className="create-review-wrapper">
                    <p>Write a review</p>
                    <div className="write-reviews">
                        <div className="review-label-input">
                            <label>Name</label>
                            <input type='text'></input>
                        </div>
                        <div className="review-label-input">
                            <label>Name</label>
                            <input type='text'></input>
                        </div>
                        <div className="review-label-input" id="textarea-side">
                            <label>Message</label>
                            <textarea type='text'></textarea>
                        </div>
                    </div>

                    <div className="buyer-review-button" style={{marginBlock: '57px 45px'}}>
                        <button style={{backgroundColor: '#FF1212', color: '#fff'}}>Submit Review</button>
                        </div>                    
            </div>
        </div>

        <div style={{display:'flex', flexDirection: 'column', rowGap: '40px'}}>
            <div className="property-layout-wrapper">
                <div className="property-layout-head">
                    <p>Property Layout</p>
                    <p>30 of 30 Sold</p>
                </div>

                <div className="property-layout-main">
                        {plotDimensions}
                </div>

                <div className="plot-button-wrapper">
                    <PlotButtons/>
                </div>
            </div>
            <div className='property-layout-wrapper'>
                    <div className="date-picker-head">
                        <p>Book Physical Inspection</p>
                    </div>

                    <div className="date-picker-main">
                        <div className="select-date-wrapper">
                            <div><img src="./images/Calendar2.png"></img></div>
                            <p>Select Date</p>
                        </div>

                        <div>
                            <ChooseDate />
                        </div>

                        <div className="select-time-wrapper">
                            <div className="select-date-wrapper">
                                <div><img src="./images/Time.png"></img></div>
                                <p>Select time</p>
                            </div>
                           <div style={{display:'flex', columnGap: '25px'}} className='time-picker'>
                                <button style={time=='10AM' ? myStyle : {}} onClick={() => setTime('10AM')}>10AM</button>
                                <button style={time=='1PM' ? myStyle : {}} onClick={() => setTime('1PM')}>1PM</button>
                           </div>
                        </div>

                        <div className="select-location-wrapper">
                                <div className="select-location-logo-side">
                                    <div><img src="./images/chooseLocation.png"></img></div>
                                    <p>Select Location</p>
                                </div>
                                <div className="select-location-select">
                                    <select>
                                        <option>Port Harcourt</option>
                                    </select>
                                </div>
                        </div>
                        <div style={{marginBlock: '78px 21px', textAlign: 'center'}} className='book-inspection-container'><button>Book Inspection</button></div>
                    </div>

            </div>

            <div className='similar-property-wrapper' style={{marginBottom: '50px'}}>
                <p className="similar-property">Similar Property</p>
                {allSimilarProperty}
            </div>
        </div>

       </div>
    )
}