import React from "react";
import { useState } from "react";
import { Login, Register } from "../components";


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

  return (
    <div className="md:grid grid-cols-2 h-[100vh]">
      <div className="grid place-items-center mt-[15px] md:mt-[0]">
        <div className="text-center md:text-left px-[30px] md:px-[0]">
          <img src="/images/logo.svg" alt="logo" className="m-auto"></img>
          {activeTab=== '1' && <h3 className="text-[16px] md:text-[25px] font-fam font-bold mt-[20px] md:mt-[0]">
            Become an Executive Sale Partner
          </h3>}
          {activeTab=== '0' && <h3 className="text-[16px] md:text-[25px] font-fam font-bold mt-[20px] md:mt-[0]">
          Welcome Back to <span className="text-mine">IM </span>Properties 
          </h3>}
{   activeTab==='1' &&      <p className="font-fam text-[13px] md:text-[18px] font-medium mt-[15px] text-light md:text-black">
            And unlock the gates to extra income in Real Estate.
          </p>}
          {   activeTab==='0' &&      <p className="font-fam text-[13px] md:text-[18px] font-medium mt-[15px] text-light md:text-black">
          A place of endless possiblities
          </p>}
        </div>
      </div>
      <div className="md:bg-black md:px-[100px] py-[62px] px-[36px]">
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
          {activeTab === '1' && <Register />}
          {activeTab === '0' && <Login />}
        </div>
      </div>
    </div>
  );
}
