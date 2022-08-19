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

            <li onClick={toggleShowProperties}>
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
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>All Clients</p>
            </li>

            <li>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Payments</p>
            </li>

            <li style={{marginBottom: '300px'}}>
                <div className="admin-side-icons"><img src="./images/dashboardLayout.png"></img></div>
                <p>Wallet</p>
            </li>
        </ul>
    )
}