import React from "react"

export default function EachReferralHistory({history}){
    return(
        <div className="each-referral-wrapper">
            <ul className="each-referral-ul">
                <li><p>{history._id}</p></li>
                <li>
                    <div className="each-referral-image-wrapper">
                        <div><img src="./images/Ellipse.png" alt="referral icon"></img></div>
                        <p>{history.referer}</p>
                    </div>
                </li> 
                <li><p>{history.level}</p></li>
                <li><p>27/07/2022</p></li>
                <li><p>0</p></li>
                <li><p className="view-referral">View</p></li>
            </ul>
        </div>
    )
}