import React, { useState } from "react"


export function AdminSideNav({setAdminPage}){

    const [showProperties, setShowProperties] = useState(true)


    const toggleShowProperties = () => {
        setShowProperties(prevVal => !prevVal)
    }

    return(
        <ul className="admin-dashboard-ul">
            <li onClick={() => setAdminPage('home')}>
                <div className="admin-side-icons">
                    <img src="./images/dashboardLayout.png"></img>
                </div>
                <p>Dashboard</p>
            </li>

            <li onClick={() => {
                toggleShowProperties()
                setAdminPage('all')}}>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Property</p>
                <div className="admin-side-arrow-down"><img src={showProperties ? "./images/arrowUp.png" : "./images/arrowDown.png"}></img></div>
            </li>

            { showProperties && <div>
                <li style={{paddingLeft: '50px'}} onClick={() => setAdminPage('all')}>
                    <p>All Properties</p>
                </li>

                <li style={{paddingLeft: '50px'}} onClick={() => setAdminPage('add')}>
                    <p>Add Property</p>
                </li>
            </div>}
            <li onClick={() => setAdminPage('edit')}>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Add Client</p>
            </li>

            <li onClick={() => setAdminPage('customers')}>
                <div className="admin-side-icons"><img src="./images/whiteClient.png"></img></div>
                <p>All Clients</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Payments</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/whiteWallet.png"></img></div>
                <p>Wallet</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Transaction</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Referral</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/whiteCart.png"></img></div>
                <p>Cart</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Booking</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/whiteMessage.png"></img></div>
                <p>Message</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Chat</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Allocation Letter</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Blog</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Settings</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Support</p>
            </li>

            <li style={{marginBottom: '300px'}}>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Clients Feedback</p>
            </li>
        </ul>
    )
}