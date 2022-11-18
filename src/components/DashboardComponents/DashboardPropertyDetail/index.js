import React from "react";
import { DashboardLayout } from "../DashboardLayout";
import { DashboardPropertyDetailData } from "../DashboardPropertyDetailData";
import { MdKeyboardArrowRight } from "react-icons/md";

export function DashboardPropertyDetail() {
  return (
    <DashboardLayout>
      <div className="px-[10px]">
        <section className="flex gap-x-[10px] py-[21px] items-center">
          <p className="text-[18px] font-bold text-light">My Property</p>
          <MdKeyboardArrowRight className="text-light text-[25px]" />
          <p className="text-[18px] font-bold">Property Detail</p>
        </section>
        <table className="w-full">
          <thead className="my-property-table-head">
            <th className="flex items-center gap-x-[24.5px]">
              <input type="checkbox"></input>
              <p>Property</p>
            </th>
            <th>No. of Plots</th>
            <th>Plots Codes</th>
            <th>Dimension</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Amount Paid</th>
            <th>Allocation letter</th>
            <th>Payment Status</th>
          </thead>
          <tbody className="detail-table-body">
            <DashboardPropertyDetailData />
            <DashboardPropertyDetailData />
            <DashboardPropertyDetailData />
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
