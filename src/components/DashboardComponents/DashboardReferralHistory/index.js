import React from "react"
import EachReferralHistory from "../EachReferralHistory"

export default function DashboardReferralHistory(props){

const allReferralHistory = props.map((history, index) => {
    return <EachReferralHistory key={index} history={history} />
})



    return(
        <div className="referral-history-wrapper">
            <div className="referral-history-top">
                <div>
                    <p>Referral History</p>
                    <p>{Date.now()}</p>
                </div>
            </div>

            <ul className="referral-history-ul">
                <li><p>S/N</p></li>
                <li><p>Referee</p></li>
                <li><p>Level</p></li>
                <li><p>Date</p></li> 
                <li><p>Commission</p></li>
                <li><p></p></li>
            </ul>
            {allReferralHistory}
        </div>
    )
}