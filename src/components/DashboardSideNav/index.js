import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideNavList } from "../../config/Constants";
import Menu from "../../assets/images/menu.svg";
import Back from '../../assets/images/left-arrow.svg';

export function DashboardSideNav(props) {
  const location = useLocation().pathname;
  const navStyle = { backgroundColor: "#FF1212" };
  let [user, setUser] = useState({});
  let [shortId, setShortId] = useState("");
  useEffect(() => {
    getUser();
  }, []);

  let getUser = () => {
    let url = "https://im-property.herokuapp.com/api/user/single";
    let token = localStorage.getItem("imToken");
    console.log(token);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "GET"
    })
      .then((e) => e.json())
      .then(res => {
        console.log(res);
        setUser(res)
        let id = res?._id.length;
        setShortId(res._id?.substr(id - 5))
      })
  };
  const navigate = useNavigate();


  return (<>
    <div className="full_ah">
      <Flex flexDir="column" align="center" mt="124px">
        <Avatar src={user.pictureupload} />
        <Text className="font-fam mt-[19px] font-bold text-[15px]" style={{ textTransform: "capitalize" }}>{user.username}</Text>
        <Text className="font-fam mt-[9px] font-bold text-[15px]" style={{ textTransform: "uppercase" }}>
          IM{shortId}
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
                        alt={page.page}
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
      <div className="flex_btw_ah items-center mt-[10px] mb-[10px] justify-between">
        <div className="flex justify-center items-center" style={{flexWrap: "wrap", flexDirection: "row", gap: "20px"}}>
          <img onClick={() => navigate(-1)} src={Back} alt="Back" style={{height: "15px"}} />
          <img onClick={props.click} src={Menu} alt="menu" style={{ height: "40px" }} />
        </div>

        <div className="mt-[66px]" style={{ display: props.display, position: "absolute", background: "#b2beb5", top: "0", border: "1px solid #b2beb5" }}>
          <Flex flexDir="column" align="center" mt="0px">
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

        <div className="flex" style={{flexWrap: "wrap", flexDirection: "row"}}>
          <div className="text-center mr-[20px]">
            <Text className="font-fam mt-[5px] font-bold text-[15px]" style={{ textTransform: "capitalize" }}>{user.username}</Text>
            <Text className="font-fam mt-[0px] font-bold text-[15px]" style={{ textTransform: "uppercase" }}>
              IM{shortId}
            </Text>
          </div>
          <div><Avatar src={user.pictureupload} /></div>
        </div>
      </div>
    </div>
  </>
  );
}
