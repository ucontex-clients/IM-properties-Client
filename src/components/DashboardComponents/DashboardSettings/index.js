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
            <FormLabel className="mb-[12px] font-fam text-light text-[15px]">
              Current Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="Enter your old password" />
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
            <FormLabel className="mb-[12px] font-fam text-light text-[15px]">
              New Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="New Password" />
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
            <FormLabel className="mb-[12px] font-fam text-light text-[15px]">
              Re-type Password
            </FormLabel>
            <InputGroup>
              <Input type="tel" placeholder="Re-type New Password" />
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
          >
            Save
          </Button>
        </Flex>
      )}

      {activeTab === "email" && (
        <Flex flexDir="column" className="md:w-[60%] px-[50px]">
          <FormControl>
            <FormLabel className="mb-[12px] font-fam text-light text-[15px]">
              Current Email
            </FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Johndoe@example.com" />
            </InputGroup>
          </FormControl>

          <FormControl mt="20px">
            <FormLabel className="mb-[12px] font-fam text-light text-[15px]">
              New Email
            </FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Johndoe@example.com" />
            </InputGroup>
          </FormControl>

          <FormControl mt="20px">
            <FormLabel className="mb-[12px] font-fam text-light text-[15px]">
              Password
            </FormLabel>
            <InputGroup>
              <Input type="password" placeholder="***********" />
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
          >
            Save
          </Button>
        </Flex>
      )}
    </Box>
  );
}
