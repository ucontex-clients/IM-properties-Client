import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavList } from "../../config/Constants";
export function DashboardSideNav() {
  const location = useLocation().pathname;
  console.log(sideNavList);
  const navStyle = { backgroundColor: "#FF1212" };

  return (
    <div>
      <Flex flexDir="column" align="center" mt="124px">
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
                    style={
                      location === page.link ||
                      (location === "/dashboard" && page.page === "Profile")
                        ? navStyle
                        : {}
                    }
                  >
                    <div>
                      <img
                        src={location === page.link ? page.img2 : page.img}
                        alt="dashboard icon"
                      ></img>
                    </div>
                    <p
                      style={
                        location === page.link ||
                        (location === "/dashboard" && page.page === "Profile")
                          ? { color: "white" }
                          : {}
                      }
                    >
                      {page.page}
                    </p>
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
