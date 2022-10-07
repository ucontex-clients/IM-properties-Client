import React from "react";
import { ForSale, Layout } from "../components";

export default function AllProperties() {
  const displayProperties = [...Array(12).keys()].map((property, index) => {
    return (
      <ForSale
        key={index}
        img={"./images/newProperty.png"}
        title={"CAMPUS GARDEN ESTATE"}
        minPrice={"300,000"}
        maxPrice={"540,000"}
        size={"30"}
      />
    );
  });

  return (
    <Layout>
      <div className="property-top-image-wrapper bg-blue-100">
        <img src="./images/newBuy.png" alt="all property"></img>
      </div>

      <div className="pt-[52px] bg-white px-[42px] pb-[38px] flex justify-between items-center">
        <div>
          <h3 className="font-fam text-[18px] font-bold">
            Our Latest Properties
          </h3>
          <p className="font-fam text-[13px] font-normal text-light mt-[9px]">
            Buy a landlanded property with peace of mind
          </p>
        </div>
        <div className=" select-property">
          <select>
            <option>Choose location</option>
          </select>
          <select>
            <option>Min Price</option>
          </select>
          <select>
            <option>Max Price</option>
          </select>
          <button>Search here</button>
        </div>
      </div>

      <div className="display-property-wrapper">{displayProperties}</div>
    </Layout>
  );
}
