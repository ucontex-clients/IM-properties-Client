import React from "react"
import { DashboardElement } from "../../"
import DashboardReferralHistory from "../DashboardReferralHistory"

export function DashboardReferral(){
    return(
        <div className="dashboard-home-main-wrapper">
            <div className="dashboard-referral-logo-wrapper">
                <div><img src="/images/Handshake.png" alt="handshake"></img></div>
                <p>Referral</p>
            </div>

            <div className="referral-main-container">
                <DashboardElement logoBackground='rgba(61, 178, 255, 0.2)'
                logoURL='/images/houseLogo.png' number='0' text='Total Referral'/>
                <DashboardElement logoBackground='rgba(255, 152, 0, 0.2)'
                logoURL='/images/accountBalance.png' number='0' text='Total Earning'/>
                <div className="referral-link-container">
                    <p>Referral Link</p>
                    <p className="referral-link">https://improperties.com/register?u=IM1234509</p>
                    <div className="copy-image-wrapper">
                        <div><img src="/images/Copy.png" alt="copy"></img></div>
                        <p>Copy</p>
                    </div>
                </div>
            </div>
            <div className="referral-commission-wrapper">
                <div className="item4">
                    <p>Starter</p>
                    <p>1 - 5 Downlines</p>
                </div>
                <div className="item5">
                    <p>Team Leader</p>
                    <p>25+ Downlines</p>
                </div>
                <div className="item4">
                    <p>Super Partner</p>
                    <p>50+ Downlines</p>
                </div>
                <div className="item5">
                    <p>Diamond Director</p>
                    <p>100+ Downlines</p>
                </div>
            </div>

            <DashboardReferralHistory />
        </div>
    )
}