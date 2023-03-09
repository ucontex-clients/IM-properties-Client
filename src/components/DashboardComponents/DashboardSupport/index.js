import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";

export function DashboardSupport() {
  let [email, setEmail] = useState("");
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  let [success, setSuccess] = useState("");

  let url = ""
  let token = localStorage.getItem("imToken");

  let sendSupport = async () => {
    let data = {
      email: email,
      title: title,
      desciption: desc
    };
    console.log(data);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((e) => e.json())
      .then(res => {
        if (res.status === 200) {
          setSuccess("Email Changed Successfully");
        }
        else {
          setSuccess(res.status);
        }
      })
  }

  return (
    <Box className="pt-[80px] bg-white px-[40px]">
      <Flex flexDir="column" className="md:w-[60%]">
        <FormControl>
          <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
            Email
          </FormLabel>
          <Input type="email" backgroundColor="#F5F5F5" required onChange={(e) => setEmail(e.target.value)}/>
        </FormControl>
        <FormControl className="mt-[52px]">
          <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
            Message Title
          </FormLabel>
          <Input type="text" backgroundColor="#F5F5F5" required onChange={(e) => setTitle(e.target.value)}/>
        </FormControl>

        <FormControl className="mt-[52px]">
          <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
            Description
          </FormLabel>
          <Textarea
            placeholder="Write your message here"
            height="200px"
            backgroundColor="#F5F5F5"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormControl>
        <Button
          className="font-fam text-white mt-[44px] mx-auto"
          backgroundColor="#FF1212"
          _hover="none"
          px="86px"
          onClick={sendSupport}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}
