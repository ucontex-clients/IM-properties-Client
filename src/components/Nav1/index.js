import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AccountModal } from "../Modals/AccountModal";

export function Nav1({ signIn, signUp }) {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

  return (
    <>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      <div
        className="navigation-buttons-wrapper"
        onClick={() => setShowModal(true)}
      >
        <BiUserCircle style={{ fontSize: "30px" }} />
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
          Account
        </p>
      </div>
    </>
  );
}
