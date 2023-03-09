import React from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Text,
} from "@chakra-ui/react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

export function DashboardSettings() {
  const [activeTab, setActiveTab] = useState("password");

  const style1 = { fontWeight: "700", color: "#05540D" };

  let [currentEmail, setCurrentEmail] = useState("");
  let [newEmail, setNewEmail] = useState("");
  let [pass, setPass] =  useState("");
  let [oldPass, setOldPass] = useState("");
  let [newPass, setNewPass] = useState("");
  let [rePass, setRePass] = useState("");
  let [successMessage, setSuccessMessage] = useState("");
  let [success, setSuccess] = useState("");

  
  let token = localStorage.getItem("imToken");
  let url = "";

  const changeEmail = async () => {
    let data = {
      oldEmail: currentEmail,
      newEmail: newEmail,
      pass: pass
    };
    console.log(data);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "PATCH",
      body: JSON.stringify(data)
    })
      .then((e) => e.json())
      .then(res => {
        if(res.status === 200){
          setSuccessMessage("Email Changed Successfully");
        }
        else{
          setSuccessMessage(res.status);
        }
      })
  }
  const changePassword = async () => {
    if(newPass !== rePass){
      alert("Password didnt match");
      return;
    }else{
      let data2 = {
        oldPass: oldPass,
        newPass: newPass
      };
      console.log(data2);
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        method: "PATCH",
        body: JSON.stringify(data2)
      })
        .then((e) => e.json())
        .then(res => {
          if(res.status === 200){
            setSuccess("Password Changed Successfully");
          }
          else{
            setSuccess(res.status);
          }
        })
    }
  }

  return (
    <Box className="pt-[80px] bg-white">
      <Flex
        mb="96px"
        pb="10px"
        className="change-password-heading gap-x-[35px] pl-[40px]"
      >
        <Text
          className="text-[15px] font-medium font-fam cursor-pointer"
          style={activeTab === "password" ? style1 : {}}
          onClick={() => setActiveTab("password")}
        >
          Change Password
        </Text>
        <Text
          className="text-[15px] font-medium font-fam cursor-pointer"
          style={activeTab === "email" ? style1 : {}}
          onClick={() => setActiveTab("email")}
        >
          Change Email
        </Text>
      </Flex>
      {activeTab === "password" && (
        <Flex flexDir="column" className="md:w-[60%] px-[50px]">
          <FormControl>
            <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
              Current Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="Enter your old password" onChange={(e) => setOldPass(e.target.value)}/>
              <InputRightElement
                pointerEvents="cursor"
                children={
                  <BsFillEyeFill
                    cursor="pointer"
                    fontSize={"20px"}
                    color="#6C6C6C"
                  />
                }
              />
            </InputGroup>
          </FormControl>

          <FormControl mt="20px">
            <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
              New Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="New Password" onChange={(e) => setNewPass(e.target.value)}/>
              <InputRightElement
                pointerEvents="cursor"
                children={
                  <BsFillEyeFill
                    cursor={"pointer"}
                    fontSize={"20px"}
                    color="#6C6C6C"
                  />
                }
              />
            </InputGroup>
          </FormControl>

          <FormControl mt="20px">
            <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
              Re-type Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="Re-type New Password" onChange={(e) => setRePass(e.target.value)}/>
              <InputRightElement
                pointerEvents="cursor"
                children={
                  <BsFillEyeFill
                    cursor="pointer"
                    fontSize={"20px"}
                    color="#6C6C6C"
                  />
                }
              />
            </InputGroup>
          </FormControl>
          <Button
            className="font-fam text-white mt-[44px] mx-auto"
            backgroundColor="#FF1212"
            _hover="none"
            px="86px"
            onClick={changePassword}
          >
            Save
          </Button>
        </Flex>
      )}

      {activeTab === "email" && (
        <Flex flexDir="column" className="md:w-[60%] px-[50px]">
          <FormControl>
            <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
              Current Email
            </FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Johndoe@example.com" onChange={(e) => setCurrentEmail(e.target.value)} />
            </InputGroup>
          </FormControl>

          <FormControl mt="20px">
            <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
              New Email
            </FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Johndoe@example.com" onChange={(e) => setNewEmail(e.target.value)} />
            </InputGroup>
          </FormControl>

          <FormControl mt="20px">
            <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
              Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="***********" onChange={(e) => setPass(e.target.value)}/>
              <InputRightElement
                pointerEvents="cursor"
                children={
                  <BsFillEyeFill
                    cursor={"pointer"}
                    fontSize={"20px"}
                    color="#6C6C6C"
                  />
                }
              />
            </InputGroup>
          </FormControl>
          <Button
            className="font-fam text-white mt-[44px] mx-auto"
            backgroundColor="#FF1212"
            _hover="none"
            px="86px"
            onClick={changeEmail}
          >
            Save
          </Button>
        </Flex>
      )}
    </Box>
  );
}
