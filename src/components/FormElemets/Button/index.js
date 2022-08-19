import React from "react";

export function Button({ text, run, registerUser }) {
  return (
    <div>
        <button className="create-account-button" onClick={run}>{text}</button>
  </div>
  );
}
