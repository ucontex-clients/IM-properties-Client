import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavList } from "../../config/Constants";
import Menu from "../../assets/images/menu.svg";
export function DashboardSideNav(props) {
  const location = useLocation().pathname;
  const navStyle = { backgroundColor: "#FF1212" };

  return (<>
    <div className="full_ah">
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

    <div className="mobile_ah">
      <div className="flex_btw_ah justify-between mx-3">
        <div onClick={props.click}>
          <img src={Menu} alt="menu" style={{ height: "50px" }} />
        </div>

        <div style={{ display: props.display }}>
          <Flex flexDir="column" align="center" mt="124px">
            <a href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-[94px] h-[64px]"
              ></img>
            </a>
          </Flex>
          <ul className="">
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

        <Flex flexDir="column" align="center" mt="">
          <Avatar src="/images/buyer.png" />
          <Text className="font-fam mt-[19px] font-bold text-[15px]">Elvis</Text>
          <Text className="font-fam mt-[9px] font-bold text-[15px]">
            IM1234509
          </Text>
        </Flex>
      </div>
    </div>
  </>
  );
}
