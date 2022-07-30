import React from "react"

export function DashboardSideNav(){
    return(
        <ul className="side-nav-ul">
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/dashboard.png"></img></div>
                    <a href="/dashboard">Dashboard</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/ShoppingCart.png"></img></div>
                    <a href="/dashboard">Buy Property</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/Property.png"></img></div>
                    <a href="/dashboard">My Property</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/inspection.png"></img></div>
                    <a href="/dashboard">Inspection Booking</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div style={{width: '20px', height: '16px'}}><img src="./images/payment.png"></img></div>
                    <a href="/dashboard">Payment</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div style={{width: '20px', height: '18.5px'}}><img src="./images/wallet.png"></img></div>
                    <a href="/dashboard">Wallet</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/user2.png"></img></div>
                    <a href="/dashboard">My Account</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/Handshake.png"></img></div>
                    <a href="/dashboard">Referrals</a>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper">
                    <div><img src="./images/chat.png"></img></div>
                    <a href="/dashboard">Chat with Admin</a>
                </div>
            </li>
        </ul>
    )
}