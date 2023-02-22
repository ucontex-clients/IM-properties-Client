import React, { useState } from "react";
import { useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AccountModal } from "../Modals/AccountModal";

export function Nav1({ signIn, signUp }) {
  const [showModal, setShowModal] = useState(false);
  const [found, setFound] = useState(true);
  useEffect(() => {
    checkUser();
  }, [found]);

  let checkUser = () => {
    if (localStorage.getItem("imToken") == null) {
      setFound(true)
    } else {
      setFound(false)
    }
  };

  let logoutUser = () => {
    localStorage.removeItem("imToken")
    localStorage.removeItem("imUserId")
    checkUser();
  };

  let logout = () => {
    window.confirm("Do you want to Logout?") ? logoutUser() : console.log("")
  };

  return (
    <>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      <div
        className="navigation-buttons-wrapper"
        onClick={() => setShowModal(true)}
      >
        <BiUserCircle style={{ fontSize: "30px", color:"#fff" }} />
        {found ? <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "15px",
            color: "#fff"
          }}
        >
          Account
        </p> :
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "30px" }}>
            <Link to="/dashboard/home">
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#fff"
                }}
              >
                Dashboard
              </p>
            </Link>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "15px",
                color: "#fff"
              }}
              onClick={() => logout()}
            >
              Logout
            </p>
          </div>

        }

      </div>
    </>
  );
}
