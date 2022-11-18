import React from "react";
import { Link } from "react-router-dom";

export function DashboardUpdateProfile() {
  return (
    <div>
      <div
        className="px-[43px] py-[16px]"
        style={{ borderBottom: "1px solid #D9D9D9" }}
      >
        <p className="text-[15px] font-semibold">Update Profile</p>
      </div>
      <div>
        <div
          className="w-[80px] h-[80px] p-[15px] m-auto rounded-[50%] mt-[85px]"
          style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <img src="/images/Done.png" alt="done"></img>
        </div>
        <p className="text-[15px] font-medium text-center mt-[42px]">
          Hi <span className="font-bold">John Doe</span>
        </p>
        <p className="text-center mt-[360x]">
          Your personal contact and details has been updated successfully{" "}
        </p>
        <div className="flex gap-x-[64px] justify-center mt-[50px]">
          <Link to="/dashboard/profile">
            <p className="font-bold text-[20px] text-mine cursor-pointer">
              View Profile
            </p>
          </Link>
          <Link to="/dashboard/home">
            <p className="font-bold text-[20px] text-backblue cursor-pointer">
              Continue to Dashboard
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
