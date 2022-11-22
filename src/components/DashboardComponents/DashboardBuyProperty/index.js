import React from "react";
import { ForSale } from "../../ForSale";

export function DashboardBuyProperty() {
  const displayProperties = [1, 3, 4, 8, 2, 5].map((property, index) => {
    return (
      <ForSale
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
    <div className="dashboard-home-main-wrapper">
      <div className="pt-[52px] bg-white px-[42px] pb-[38px] flex gap-x-[79px] justify-between items-center">
        <div className="w-full">
          <h3 className="font-fam text-[18px] font-bold">
            Our Latest Properties
          </h3>
          <div className="md:hidden mt-[16px] mb-[25px] grid items-right">
            <input
              type="text"
              className="py-[8px] latest-property-search"
            ></input>
          </div>
        </div>
        <div className="hidden lg:flex md:block md:text-right select-property">
          <select>
            <option>Choose location</option>
          </select>
          <select>
            <option>Min Price</option>
          </select>
          <select>
            <option>Max Price</option>
          </select>
          <button className="text-white bg-mine px-[16px]">Search here</button>
        </div>
      </div>
      <div className="buy-each-property-holder">{displayProperties}</div>
    </div>
  );
}
