import React from "react"

export function DashboardPayment(){
    return (
        <div className="dashboard-main-right bg-white">
        <ul className="payment-grids">
            <li>Trans. ID</li>
            <li>Property</li>
            <li>Amount</li>
            <li>Mode</li>
            <li>Paid</li>
            <li>Balance</li>
            <li>Duration</li>
            <li>Next Payment</li>
            <li>Action</li>
        </ul>
        <ul className="payment-grids">
            <li>IM 0023</li>
            <li>Campus Gardens Estate</li>
            <li>N1,865,000</li>
            <li>Outright</li>
            <li>1,865,000</li>
            <li>Completed</li>
            <li>None</li>
            <li>Nil</li>
            <li className="flex items-center">
                <p>History</p>
                <button>Pay Now</button>
            </li>
        </ul>
        </div>

    )
}