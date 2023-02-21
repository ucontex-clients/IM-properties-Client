import React, { useEffect, useState } from "react";
import { ForSale } from "../../ForSale";

export function DashboardBuyProperty() {
  let [property, setProperty] = useState([]);
  let url = "https://im-property.herokuapp.com/api/property/all";  //im-property.herokuapp.com

  useEffect(() => {
    loadProperties();
  }, []);

  let loadProperties = () => {
    fetch(url)
      .then(e => e.json())
      .then(res => setProperty(res))
  };
  
  /*const displayProperties = [1, 3, 4, 8, 2, 5].map((property, index) => {
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
  });*/

  return (
    <div className="dashboard-home-main-wrapper">
      <div className="pt-[25px] bg-white px-[0px] pb-[38px] flex gap-x-[79px] justify-between items-center">
        <div className="w-full">
          <div className="md:hidden mt-[16px] mb-[25px] grid items-right">
            <input
              type="text"
              className="py-[8px] latest-property-search"
            ></input>
          </div>
          <h3 className="font-fam text-[20px] font-bold">
            Our Latest Properties
          </h3>
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
      <div className="px-[0px] grid grid-cols-1 place-items-center bg-white gap-[25px] mb-[25px] md:grid-cols-2 lg:grid-cols-3">
        {property.map((e, i) => {
          let numberOfPlot = e.plotLayout.length;
          let address = e.location?.address + " " + e.location?.LGA + " " + e.location?.city + " " + e.location?.state;
          let price;
          let price2;
          let img = e.imagesURLs;
          e.plotLayout.map((a, b) => {
            let arr = [];
            arr.push(a.price)
            price = Math.max(...arr)
            price2 = Math.min(arr)
          });
          return (
            <ForSale
              key={i}
              img={img} //"./images/newProperty.png"}
              title={e.name}
              minPrice={price2}
              // maxPrice={price}
              size={numberOfPlot}
              desc={e.about}
              address={address}
              id={e._id}
            />
          )
        })}
      </div>
    </div>
  );
}
