import React from "react";
import { EachDashboardTransaction } from "../..";

export function DashboardTransactions() {
  const allTransactions = [1, 1, 1, 1].map((transaction, index) => {
    return <EachDashboardTransaction key={index} />;
  });

  return (
    <div className="pt-[30px] px-[30px] bg-white all-transaction-wrapper">
      {allTransactions}
    </div>
  );
}
