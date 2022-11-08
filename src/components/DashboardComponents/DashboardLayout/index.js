import React, { useState } from "react";
import {
  DashboardHome,
  DashboardSideNav,
  DashboardProperty,
  DashboardBooking,
  DashboardReferral,
  UserProfileModal,
  DashboardViewProfile,
  DashboardCreateProfile,
  DashboardBuyProperty,
  FundWalletCreateAccount,
  UploadPayment,
  WithdrawCash,
  WithdrawalAmount,
  MyTransactions,
} from "../components";

export default function Dashboard({
  profilePicture = "/images/profilePicture.png",
  children,
}) {
  const [activePage, setActivepage] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [availableAccount, setAvailableAccount] = useState(false);

  const myModal = () => {
    setShowModal((prevVal) => !prevVal);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {showModal && (
        <UserProfileModal
          profilePicture={profilePicture}
          myModal={myModal}
          setActivePage={setActivepage}
        />
      )}
      <div className="dashboard-nav">
        <div className="dashboard-nav-logo-holder">
          <a href="/">
            <img src="./images/logo.png" alt="logo"></img>
          </a>
        </div>
        <div className="dashboard-nav-right">
          <div className="bell-holder">
            <img src="./images/bell.png" alt="notification icon"></img>
          </div>
          <div className="user2-holder" onClick={myModal}>
            <img src={profilePicture} alt="profile"></img>
          </div>
        </div>
      </div>

      <div className="dashboard-main-wrapper">
        <div className="dashboard-main-left">
          <DashboardSideNav
            activePage={activePage}
            setActivePage={setActivepage}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
