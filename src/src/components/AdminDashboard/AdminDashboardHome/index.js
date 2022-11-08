import React from "react"
import { AdminDashboardBox } from "../AdminDashboardBox"


export function AdminDashboardHome(){
    return(
        <div className="admin-dashboard-right">
            <div className="dashboard-input-wrapper">
                <p>Dashboard</p>
                <div>
                    <input type='text'></input>
                </div>
            </div>

            <div className='all-admin-box-wrapper'>
                <AdminDashboardBox title='Total Revenue' color='rgba(255, 18, 18, 0.1)' 
                img='./images/adminRevenue.png' amount='N1,045,090' />

                <AdminDashboardBox title='Total Property' color='rgba(255, 152, 0, 0.2)' 
                img='./images/adminProperty.png' amount='20' />

                <AdminDashboardBox title='Total Client' color='rgba(6, 130, 211, 0.2)' 
                img='./images/adminClient.png' amount='500' />

                <AdminDashboardBox title='Total Bookings' color='rgba(255, 87, 34, 0.2)' 
                img='./images/adminBooking.png' amount='200' />
            </div>

            <div className="graph-container" style={{marginBottom:'300px'}}>
                <img src="./images/graph.png" alt="admin graph"></img>
            </div>
        </div>
    )
}