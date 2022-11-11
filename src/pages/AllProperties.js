import React from "react";
import { ForSale, Layout } from "../components";
import axios from "axios";
import { useQuery } from "react-query";

export default function AllProperties() {
  // const { isLoading, error, data } = useQuery("properties", async () => {
  //   const allProperties = await axios.get(
  //     "https://im-properties-api.herokuapp.com/api/property/all"
  //   );
  //   return allProperties.data;
  // });

  // console.log(data)

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
        <div className="w-full">
          <h3 className="font-fam text-[18px] font-bold">
            Our Latest Properties
          </h3>
          <p className="font-fam text-[13px] font-normal text-light mt-[9px]">
            Buy a landlanded property with peace of mind
          </p>
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
          <button className="text-white">Search here</button>
        </div>
      </div>

      <div className="px-[32px] grid grid-cols-1 place-items-center bg-white gap-[25px] mb-[25px] md:grid-cols-2 lg:grid-cols-3">
        {displayProperties}
      </div>
    </Layout>
  );
}
