import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function DashboardSideNav() {
  const location = useLocation().pathname;

  const navStyle = { backgroundColor: "#FF1212" };

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

  return (
    <div>
      <Flex marginTop="124px" flexDir="column" align="center">
        <Avatar src="/images/buyer.png" />
        <Text className="font-fam mt-[19px] font-bold text-[15px]">Elvis</Text>
        <Text className="font-fam mt-[9px] font-bold text-[15px]">
          IM1234509
        </Text>
      </Flex>
      <ul className="side-nav-ul">
        {sideNavList.map((page, idx) => {
          return (
            <li key={idx}>
              <Link to={page.link}>
                <div style={{ paddingInline: "16px" }}>
                  <div
                    className="sidenav-item-wrapper"
                    style={location === page.link ? navStyle : {}}
                  >
                    <div>
                      <img src={page.img} alt="dashboard icon"></img>
                    </div>
                    <p>{page.page}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
