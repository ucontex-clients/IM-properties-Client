import React from "react";

export function DashboardPropertyDetailData() {
  return (
    <tr className="property-detail-table">
      <td className="flex gap-x-[17px]">
        <input type="checkbox"></input>
        <section className="flex items-center gap-x-[5px]">
          <img src="/images/property-detail.svg" alt="detail"></img>
          <p>Norah's Court</p>
        </section>
      </td>
      <td>4</td>
      <td>
        NCE-003 <br />
        NCE-004 <br /> NCE-009 <br /> NCE-010
      </td>
      <td>464.89 SQ.M</td>
      <td>27/08/2022 3pm</td>
      <td>N1,890,098</td>
      <td>N1,890,098</td>
      <td>
        <img
          src="/images/pull.svg"
          alt="download"
          className="m-auto cursor-pointer"
        ></img>
      </td>
      <td>Completed</td>
    </tr>
  );
}
