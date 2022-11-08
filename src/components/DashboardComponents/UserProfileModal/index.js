import React from "react";

export function UserProfileModal({ profilePicture, myModal, setActivePage }) {
  return (
    <div className="user-profile-modal" onClick={myModal}>
      <div className="user-profile-white">
        <div className="user-profile-top">
          <div className="user-profile-top-image-holder">
            <img src={profilePicture} alt="profile"></img>
          </div>
          <div className="user-name-holder">
            <p>Vickywealth</p>
            <p style={{ fontWeight: "400" }}>IM1234509</p>
          </div>
        </div>

        <ul className="user-profile-ul">
          <li
            className="user-profile-li"
            style={{ paddingTop: "18px" }}
            onClick={() => setActivePage("view")}
          >
            <a href="/edit-profile">Edit Profile</a>
            <div>
              <img src="/images/arrowRight.png" alt="arrow right"></img>
            </div>
          </li>
          <li
            className="user-profile-li"
            onClick={() => setActivePage("create")}
          >
            <a href="/update-picture">Update Profile Picture</a>
            <div>
              <img src="./images/arrowRight.png" alt="arrow right"></img>
            </div>
          </li>
          <li className="user-profile-li">
            <a href="/view-profile">View Profile</a>
            <div>
              <img src="./images/arrowRight.png" alt="arrow right"></img>
            </div>
          </li>
          <li className="user-profile-li">
            <a href="change-password">Change Password</a>
            <div>
              <img src="./images/arrowRight.png" alt="arrow right"></img>
            </div>
          </li>
          <li className="user-profile-li">
            <a href="change-email">Change Email</a>
            <div>
              <img src="./images/arrowRight.png" alt="arrow right"></img>
            </div>
          </li>
          <li className="user-profile-li" style={{ paddingBottom: "17px" }}>
            <a href="/logout">Logout</a>
            <div>
              <img src="./images/arrowRight.png" alt="arrow right"></img>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
