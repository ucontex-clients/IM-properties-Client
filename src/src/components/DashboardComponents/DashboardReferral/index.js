import React from "react"
import { DashboardElement } from "../../"
import DashboardReferralHistory from "../DashboardReferralHistory"

export function DashboardReferral(){
    return(
        <div className="dashboard-home-main-wrapper">
            <div className="dashboard-referral-logo-wrapper">
                <div><img src="./images/Handshake.png" alt="handshake"></img></div>
                <p>Referral</p>
            </div>

            <div className="referral-main-container">
                <DashboardElement logoBackground='rgba(61, 178, 255, 0.2)'
                logoURL='./images/houseLogo.png' number='0' text='Total Referral'/>
                <DashboardElement logoBackground='rgba(255, 152, 0, 0.2)'
                logoURL='./images/accountBalance.png' number='0' text='Total Earning'/>
                <div className="referral-link-container">
                    <p>Referral Link</p>
                    <p className="referral-link">https://improperties.com/register?u=IM1234509</p>
                    <div className="copy-image-wrapper">
                        <div><img src="./images/Copy.png" alt="copy"></img></div>
                        <p>Copy</p>
                    </div>
                </div>
                <div className="referral-commission-wrapper">
                    <div className="item4">
                        <p>Level 1 Commission</p>
                        <p>Refer someone to purchase any property and get 10% commision </p>
                    </div>
                    <div className="item5">
                        <p>Level 2 Commission</p>
                        <p>The person you referred, gets someone to purchase a property you get 
                            2% of the  level 1 commission</p>
                    </div>
                </div>
            </div>

            <DashboardReferralHistory />
        </div>
    )
}