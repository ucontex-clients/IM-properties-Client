import React from "react";
import { Link } from "react-router-dom";

export function AccountModal({ setShowModal }) {
  return (
    <div className="account-modal" onClick={() => setShowModal(false)}>
      <ul className="account-modal-content block">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
