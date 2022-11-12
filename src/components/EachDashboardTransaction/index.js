import React from "react";

export function EachDashboardTransaction() {
  return (
    <ul className="transaction-wrapper px-[20px] py-[16px]">
      <li className="font-fam text-[15px] font-medium text-light">
        Payment CGE -005 <br />
        IM-27189-1659905498
      </li>
      <li className="font-fam text-[15px] font-medium text-light">
        Aug 8 2022. 9AM
      </li>
      <li></li>
      <li className="flex gap-x-[49px] font-fam text-[15px] font-medium">
        <p className="font-fam text-[15px] font-semibold">N200,000</p>
        <img
          src="/images/download.svg"
          alt="download"
          className="cursor-pointer"
        ></img>
      </li>
    </ul>
  );
}
