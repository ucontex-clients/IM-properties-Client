import React from "react";
import { Link } from "react-router-dom";
export function AdminDashboardProfileView({ setPage }) {
  return (
    <div className="admin-dashboard-right" style={{ backgroundColor: "#fff" }}>
      <div
        className="dashboard-layout-wrapper"
        id="view-profile-right"
        style={{ marginTop: "100px" }}
      >
        <p className="profile-update-buyer">Update Profile</p>
        <div className="update-profile-main">
          <div className="profile-update-row">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name"></input>
            </div>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name"></input>
            </div>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name"></input>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>Gender</label>
              <select value="*choose*">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label>Phone 1</label>
              <input type="text" placeholder="Phone Number"></input>
            </div>
            <div>
              <label>Phone 2</label>
              <input type="text" placeholder="Phone Number"></input>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>Date of Birth (DD-MM-YY)</label>
              <input type="date" placeholder="DD-MM-YY"></input>
            </div>
            <div>
              <label>Occupation</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Country</label>
              <select>
                <option>Nigeria</option>
              </select>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>State</label>
              <select value="*choose*">
                <option>Rivers</option>
              </select>
            </div>
            <div>
              <label>City</label>
              <input type="text" placeholder="City"></input>
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Address"></input>
            </div>
          </div>

          <div className="profile-update-row">
            <div>
              <label>Email</label>
              <input type="email" placeholder="vestcoing23@gmail.com"></input>
            </div>
            <div>
              <label>Upload a photograph</label>
              <input type="file"></input>
            </div>
            <div>
              <label>Upload Valid ID </label>
              <input type="file"></input>
            </div>
          </div>

          <p className="next-of-kin-data">Next of kin</p>

          <div className="profile-update-row">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name"></input>
            </div>
            <div>
              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number"></input>
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Address"></input>
            </div>
          </div>

          <div className="save-profile-button-container">
            <button onClick={() => setPage("2")}>Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
