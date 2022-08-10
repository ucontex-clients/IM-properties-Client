import React, { useState } from "react"
import { DashboardElement, DashboardHome, DashboardSideNav,
    DashboardProperty, DashboardBooking, DashboardReferral, OneOffPayment, UserProfileModal, DashboardViewProfile, DashboardCreateProfile, DashboardBuyProperty, FundWalletCreateAccount, UploadPayment, WitdrawCash, WithdrawalAmount } from "../components"
import InspectionBooking from "../components/DashboardComponents/InspectionBooking"

export default function Dashboard({profilePicture = './images/profilePicture.png'}){

    const [activePage, setActivepage] = useState('create')
    const [showModal, setShowModal] = useState(false)
    const [availableAccount, setAvailableAccount] = useState(true)

    const myModal = () => {
        setShowModal(prevVal => !prevVal)
    }



    return(
        <div style={{backgroundColor: '#F5F5F5'}}>
            {showModal && <UserProfileModal profilePicture={profilePicture} myModal={myModal} setActivePage={setActivepage}/>}
            <div className="dashboard-nav">
                <div className="dashboard-nav-logo-holder"><a href="/"><img src="./images/logo.png"></img></a></div>
                <div className="dashboard-nav-right">
                    <div className="bell-holder"><img src="./images/bell.png"></img></div>
                    <div className="user2-holder" onClick={myModal}>
                        <img src={profilePicture}></img>
                    </div>
                </div>
            </div>

            <div className="dashboard-main-wrapper">
                <div className="dashboard-main-left">
                   <DashboardSideNav activePage={activePage} setActivePage={setActivepage} />
                </div>
                    {activePage == 'dashboard' && <DashboardHome />}
                    {activePage == 'property' && <DashboardProperty />}
                    {activePage == 'inspection' && <DashboardBooking />}
                    {activePage == 'referral' && <DashboardReferral />}
                    {activePage == 'view' && <DashboardViewProfile />}
                    {activePage == 'create' && <DashboardCreateProfile />}
                    {activePage == 'buy' && <DashboardBuyProperty />}
                    {activePage == 'method' && <FundWalletCreateAccount setActivePage={setActivepage} />}
                    {activePage == 'fund' && <UploadPayment />}
                    {activePage == 'withdraw' && !availableAccount && <WitdrawCash />}
                    {activePage == 'withdraw' && availableAccount && <WithdrawalAmount />}


            </div>
        </div>
    )
}