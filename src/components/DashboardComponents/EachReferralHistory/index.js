import React from "react"

export default function EachReferralHistory({index}){
    return(
        <div className="each-referral-wrapper">
            <ul className="each-referral-ul">
                <li><p>{index}</p></li>
                <li>
                    <div className="each-referral-image-wrapper">
                        <div><img src="./images/Ellipse.png" alt="referral icon"></img></div>
                        <p>John Doe</p>
                    </div>
                </li>
                <li><p>27/07/2022</p></li>
                <li><p>1</p></li>
                <li><p>0</p></li>
                <li><p className="view-referral">View</p></li>
            </ul>
        </div>
    )
}