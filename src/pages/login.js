import React from "react";
import { useState } from "react";
import { Login, Register } from "../components";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [activeTab, setActiveTab] = useState("0");
  const [success, setSuccess] = useState("");

  let navigate = useNavigate()
  const { handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
  });

  const style1 = {
    fontWeight: 500,
    fontSize: "18px",
  };

  const style2 = {
    fontWeight: 700,
    fontSize: "20px",
  };

  let login = async () => {
    let data = values;
    let url = "https://nice-tan-harp-seal-wrap.cyclic.app/api/auth/login";
    const response = await fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    });
    if (response.status === 200) {
      await response.json()
        .then((e) => {
          localStorage.setItem("imUserId", e.id)
          localStorage.setItem("imToken", e.token)
          localStorage.setItem("imUserName", e.username)
        })
      setSuccess("Login Successful.")
      const t1 = setTimeout(() => {
        setSuccess("");
        navigate("/");
        clearTimeout(t1);
      }, 1500);
    } else {
      setSuccess("Invalid Email or Password!")
      const t1 = setTimeout(() => {
        setSuccess("");
        clearTimeout(t1);
      }, 1500);
    }
  };


  return (
    <div className="md:grid grid-cols-2 md:h-[100vh]">
      <div className="grid place-items-center mt-[15px] md:mt-[0] h-fit md:h-full">
        <div className="text-center md:text-left px-[30px] md:px-[0]">
          <Link to="/" >
            <img src="/images/logo.svg" alt="logo1" className="m-auto"></img>
          </Link>
          {activeTab === "1" && values.role === "ESP" && (
            <h3 className="text-[16px] md:text-[25px] font-fam font-bold mt-[20px] md:mt-[0]">
              Become an Executive Sale Partner
            </h3>
          )}

          {activeTab === "1" && values.role === "Buyer" && (
            <h3 className="text-[16px] md:text-[25px] font-fam font-bold mt-[20px] md:mt-[0]">
              Buy a Property with <span className="text-mine">IM </span>
              Properties
            </h3>
          )}

          {activeTab === "0" && (
            <h3 className="text-[16px] md:text-[25px] font-fam font-bold mt-[20px] md:mt-[0]">
              Welcome Back to <span className="text-mine">IM </span>Properties
            </h3>
          )}
          {activeTab === "1" && values.role === "ESP" && (
            <p className="font-fam text-[13px] md:text-[18px] font-medium mt-[15px] text-light md:text-black">
              And unlock the gates to extra income in Real Estate.
            </p>
          )}
          {activeTab === "1" && values.role === "Buyer" && (
            <p className="font-fam text-[13px] md:text-[18px] font-medium mt-[15px] text-light md:text-black">
              And have peace of mind
            </p>
          )}
          {activeTab === "0" && (
            <p className="font-fam text-[13px] md:text-[18px] font-medium mt-[15px] text-light md:text-black">
              A place of endless possiblities
            </p>
          )}
        </div>
      </div>
      <div className="md:bg-black md:px-[100px] md:py-[62px] px-[36px]">
        <div>
          <header className="flex gap-x-[47px] justify-center">
            <Link to="/account/login">
              <p
                className="font-fam text-white cursor-pointer"
                style={activeTab === "0" ? style2 : style1}
              >
                LOGIN
              </p>
            </Link>
            <Link to="/account/register">
              <p
                className="font-fam text-white cursor-pointer"
                value={"1"}
                style={activeTab === "1" ? style2 : style1}
              >
                REGISTER
              </p>
            </Link>
          </header>
          <h3 style={{ color: "black", textAlign: "center", background: "whitesmoke" }}>{success}</h3>
          {activeTab === "1" && (
            <Register
              handleChange={handleChange}
              values={values}
              setActiveTab={setActiveTab}
            />
          )}
          {activeTab === "0" && (
            <Login
              handleChange={handleChange}
              values={values}
              setActiveTab={setActiveTab}
              login={() => login()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
