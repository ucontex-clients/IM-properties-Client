import React from "react";
import InspectionBooking from "../InspectionBooking";

export function DashboardBooking() {

  return (
    <div className="dashboard-home-main-wrapper bg-white">
      <div className="inspection-booking-holder">
        <ul className="inspection-heading-ul">
          <li>
            <p>Booking ID</p>
          </li>
          <li>
            <p>Property</p>
          </li>
          <li>
            <p>Location</p>
          </li>
          <li>
            <p>Date/Time</p>
          </li>
          <li>
            <p>Status</p>
          </li>
          <li>
            <p>Action</p>
          </li>
        </ul>
        {<InspectionBooking />}
        <div className="inspection-booking-bottom"></div>
      </div>
    </div>
  );
}
