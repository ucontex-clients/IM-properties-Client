import React from "react";
import { MyProperty } from "../../";

export function DashboardProperty() {
  const allMyProperties = [1, 2].map((property, index) => {
    return (
      <MyProperty
        key={index}
        img={"/images/newProperty.png"}
        title={"CAMPUS GARDEN ESTATE"}
        minPrice={"300,000"}
        maxPrice={"540,000"}
        size={"30"}
      />
    );
  });

  return (
    <div className="dashboard-home-main-wrapper pb-[150px]">
      <div className="each-property-holder">{allMyProperties}</div>
    </div>
  );
}
