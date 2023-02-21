import React, { useEffect, useState } from "react";
import { Text, Avatar, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ViewCustomer() {
  const propertyStyle = {
    background: "rgba(255, 18, 18, 0.2)",
    color: "#F80F0F",
  };

  const [userInfo, setUserInfo] = useState("property");
  const [user, setUser] = useState({});
  const [shortId, setShortId] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, [])


  let getUser = () => {
    setLoading(false);
    let url = "https://alert-battledress-boa.cyclic.app/api/user/single";
    let token = localStorage.getItem("imToken");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "GET"
    })
      .then((e) => e.json())
      .then(res => {
        setUser(res)
        let id = res._id.length;
        setShortId(res._id.substr(id - 5))
      })
      setLoading(true);
  };

  return (
    <div
      className="admin-dashboard-right"
      style={{
        backgroundColor: "#fff",
        marginTop: "8px",
        marginBottom: "104px",
        paddingBottom: "104px"
      }}
    >
      <div className="dashboard-input-wrapper" style={{ padding: "21px 20px" }}>
        <p className="cursor-pointer">Profile</p>

        <Link
          to="/dashboard/profile/edit"
          className="text-backblue cursor-pointer text-[15px] font-medium"
        >
          Edit
        </Link>
      </div>

      <div className="view-customers-top mt-[71px]">
        <div>
          <Flex columnGap="36px">
            <Avatar src={user.pictureupload}/>
            <Box>
              <Text className="font-fam font-bold text-[20px]" style={{ textTransform: "capitalize" }}>{user.firstname} {" "} {user.lastname}</Text>
              <Text className="font-fam font-medium text-[15px] text-light mt-[3px]" style={{ textTransform: "uppercase" }}>
                IM{shortId}
              </Text>
            </Box>
          </Flex>
          <table className="mt-[41px]">
            <tr>
              <td>Username:</td>
              <td style={{ textTransform: "capitalize" }}>{user.username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{user.phone1 ? user.phone1 : "- - - -"}</td>
            </tr>
            {/* <tr>
              <td></td>
              <td>+2347034192605</td>
            </tr> */}
            <tr>
              <td>Gender:</td>
              <td>{user.gender ? user.gender : "- - - -"}</td>
            </tr>
            <tr>
              <td>Occupation:</td>
              <td>{user.occupation ? user.occupation : "- - - -"}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{user.address ? user.address : "- - - -"}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{user.country ? user.country : "- - - -"}</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>{user.state ? user.state : "- - - -"}</td>
            </tr>
            <tr>
              <td>LGA:</td>
              <td>{user.lga ? user.lga : "- - - -"}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{user.city ? user.city : "- - - -"}</td>
            </tr>
          </table>
        </div>
        <div className="id-side">
          <p className="mb-[24px] font-medium text-[15px]">Valid ID</p>
          <img src={user.idupload} alt="user id"></img>
          <p className="mt-[24px] font-fam text-[15px] font-semibold">
            Next of Kin
          </p>
          <table>
            <tr>
              <td>Name:</td>
              <td>{loading ? user?.kin?.nextofkin : "Name"}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{loading ? user?.kin?.kin_phone : "Phone"}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{loading ? user?.kin?.kin_address : "Address"}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
