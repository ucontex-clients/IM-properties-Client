import React, { useState } from "react";
import { useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
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

  return (
    <>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      <div
        className="navigation-buttons-wrapper"
        onClick={() => setShowModal(true)}
      >
        <BiUserCircle style={{ fontSize: "30px" }} />
        {found ? <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
          Account
        </p> :
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: "500",
              fontSize: "15px",
            }}
            onClick={() => logoutUser()}
          >
            Logout
          </p>}

      </div>
    </>
  );
}
