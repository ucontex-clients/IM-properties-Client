import React, { useState } from "react";
import { Text, Avatar, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export function ViewCustomer() {
  const propertyStyle = {
    background: "rgba(255, 18, 18, 0.2)",
    color: "#F80F0F",
  };

  const [userInfo, setUserInfo] = useState("property");

  return (
    <div
      className="admin-dashboard-right"
      style={{
        backgroundColor: "#fff",
        marginTop: "85px",
        marginBottom: "104px",
        overflow: "hidden",
      }}
    >
      <div className="dashboard-input-wrapper" style={{ padding: "21px 20px" }}>
        <p className="cursor-pointer">View Profile</p>

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
            <Avatar />
            <Box>
              <Text className="font-fam font-bold text-[20px]">John Doe</Text>
              <Text className="font-fam font-medium text-[15px] text-light mt-[3px]">
                IM1230945
              </Text>
            </Box>
          </Flex>
          <table className="mt-[41px]">
            <tr>
              <td>Username:</td>
              <td>Elvis</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>Johndoe@gmail.com</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>+2348064178607</td>
            </tr>
            <tr>
              <td></td>
              <td>+2347034192605</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Occupation:</td>
              <td>Civil Servant</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>25 Stadium road Port Harcourt</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>Nigeria</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>Rivers</td>
            </tr>
            <tr>
              <td>LGA:</td>
              <td>Obio/Akpor</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>Port Harcourt</td>
            </tr>
          </table>
        </div>
        <div className="id-side">
          <p className="mb-[24px] font-medium text-[15px]">Valid ID</p>
          <img src="/images/id.png" alt="user id"></img>
          <p className="mt-[24px] font-fam text-[15px] font-semibold">
            Next of Kin
          </p>
          <table>
            <tr>
              <td>Name:</td>
              <td>Emmanuel John</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>+2347034192605</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>25 Stadium road Port Harcourt</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
