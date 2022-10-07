import React from "react";

export function TeamMember() {
  return (
    <div className="pb-[48px] ">
      <div style={{ height: "80%" }}>
        <img
          src="./images/aboutBottom.png"
          alt="team member"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
      </div>
      <p className="font-fam text-[20px] font-bold mt-[18px]">
        Marcellonus Chimezia
      </p>
      <p className="font-fam text-[18px] mt-[11px] font-semibold text-light">
        Managing Director
      </p>
    </div>
  );
}
