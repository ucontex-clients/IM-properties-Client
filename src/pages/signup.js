import React from "react";
import { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function Signup() {
  const [activeTab, setActiveTab] = useState("0");

  const style1 = {
    fontWeight: 500,
    fontSize: "18px",
  };

  const style2 = {
    fontWeight: 700,
    fontSize: "20px",
  };

  console.log(activeTab);
  return (
    <div className="md:grid grid-cols-2 h-[100vh]">
      <div className="grid place-items-center">
        <div className="text-center">
          <img src="/images/logo.svg" alt="logo" className="m-auto"></img>
          <h3 className="text-[25px] font-fam font-bold">
            Become an Executive Sale Partner
          </h3>
          <p className="font-fam text-[18px] font-medium mt-[15px]">
            And unlock the gates to extra income in Real Estate.
          </p>
        </div>
      </div>
      <div className="bg-black px-[100px] py-[62px]">
        <div>
          <header className="flex gap-x-[47px] justify-center">
            <p
              className="font-fam text-white cursor-pointer"
              style={activeTab === "0" ? style2 : style1}
              onClick={() => setActiveTab("0")}
            >
              LOGIN
            </p>
            <p
              className="font-fam text-white cursor-pointer"
              value={"1"}
              style={activeTab === "1" ? style2 : style1}
              onClick={() => setActiveTab("1")}
            >
              REGISTER
            </p>
          </header>
          <form className="mt-[23px]">
            <section className="w-full">
              <InputGroup py="9px" items-center>
                <InputLeftElement
                  pointerEvents="none"
                  children={<img src="/images/black-user.svg" alt="user" />}
                />
                <Input
                  type="text"
                  placeholder="Executive Sales Partners"
                  bg={"white"}
                />
              </InputGroup>
              <InputGroup py="9px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<img src="/images/black-email.svg" alt="user" />}
                />
                <Input type="email" placeholder="E-mail Address" bg={"white"} />
              </InputGroup>
              <InputGroup py="9px">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <img src="/images/black-username.svg" alt="email" />
                  }
                />
                <Input
                  type="text"
                  placeholder="Password"
                  bg={"white"}
                  width="100%"
                />
              </InputGroup>
              <InputGroup py="9px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<img src="/images/black-password.svg" alt="user" />}
                />
                <Input type="password" placeholder="Password" bg={"white"} />
              </InputGroup>
              <InputGroup py="9px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<img src="/images/black-user.svg" alt="user" />}
                />
                <Input
                  type="text"
                  placeholder="Referrer's (Optional)"
                  bg={"white"}
                />
              </InputGroup>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
