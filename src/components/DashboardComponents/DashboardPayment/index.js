import React from "react";

export function DashboardPayment() {
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
        <li className="flex gap-x-[10px] items-center">
          <p>History</p>
          <button
            className="px-[13px] py-[4px] font-fam font-bold text-[12px]"
            style={{
              background: "rgba(61, 178, 255, 0.25)",
              borderRadius: "20px",
              color: "#0682D3",
            }}
          >
            Pay Now
          </button>
        </li>
      </ul>
    </div>
  );
}
