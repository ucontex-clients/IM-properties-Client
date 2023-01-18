import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardSideNav } from "../../DashboardSideNav";
import { UserProfileModal } from "../UserProfileModal";
import MobileTop from "./mobile_topbar";

export function DashboardLayout({
  profilePicture = "/images/profilePicture.png",
  children,
}) {
  const sideNavList = [
    {
      page: "Dashboard",
      link: "/dashboard/home",
      img: "/images/dashboard.svg",
    },
    {
      page: "Buy Property",
      link: "/dashboard/buy-property",
      img: "/images/buy-property.svg",
    },
    {
      page: "My Property",
      link: "/dashboard/my-property",
      img: "/images/my-property.svg",
    },
    {
      page: "Bookings",
      link: "/dashboard/bookings",
      img: "/images/bookings.svg",
    },
    { page: "Payment", link: "/dashboard/payment", img: "/images/payment.svg" },
    {
      page: "Transactions",
      link: "/dashboard/transactions",
      img: "/images/transaction.svg",
    },
    { page: "Wallet", link: "/dashboard/wallet", img: "/images/wallet.svg" },
    { page: "Network", link: "/dashboard/network", img: "/images/network.svg" },
    { page: "Profile", link: "/dashboard/profile", img: "/images/profile.svg" },
    { page: "Support", link: "/dashboard/support", img: "/images/support.svg" },
    {
      page: "Settings",
      link: "/dashboard/settings",
      img: "/images/settings.svg",
    },
    { page: "Logout", link: "/dashboard/logout", img: "/images/logout.svg" },
  ];
  const location = useLocation().pathname;

  let position;
  let img;

  sideNavList.forEach((element) => {
    if (element.link.includes(location)) {
      position = element.page;
      img = element.img;
    }
  });

  return (<>
    <div className="full_ah container" style={{ backgroundColor: "#fff" }}>
      <div className="dashboard-nav justify-between bg-white">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[64px] h-[64px]"
            ></img>
          </a>
          <div className="flex items-center gap-x-[10px] ml-[194px]">
            <img src={img} alt="profile"></img>
            <p className="font-bold text-[18px]">{position}</p>
          </div>
        </div>
        <Link to="/account/register" className="bg-mine p-[9px] rounded-[50px]">
          <button className="text-[15px] text-white font-medium">
            Become an ESP
          </button>
        </Link>
      </div>

      <div className="dashboard-main-wrapper">
        <div className="dashboard-main-left">
          <DashboardSideNav />
        </div>
        <div className="right-second mt-[85px]">{children}</div>
      </div>
    </div>

    <div className="mobile_ah container">
      <MobileTop
        table={
          <div className="">{children}</div>
        }
      />
    </div>
  </>
  );
}
