import React from "react";
import { Link } from "react-router-dom";

export function MyProperty({ img, title, desc, minPrice, maxPrice, size }) {
  return (
    <Link to="/dashboard/my-property/detail">
      <div className="one-sale-wrapper">
        <div className="sale-image-wrapper">
          <div className="property-arrow-container">
            <img src="/images/propertyArrow.png" alt="arrow"></img>
          </div>
          <img src={img} className="sale-image" alt="property cover"></img>
        </div>

        <div className="sales-text-wrapper">
          <h3>{title}</h3>
          <div className="office-wrapper">
            <div className="office-image-wrapper">
              <img src="/images/venue.png" alt="venue icon"></img>
            </div>
            <p>Owerri, Imo, Nigeria</p>
          </div>
          <hr />

          <div className="flex gap-x-[12px] justify-between items-center mt-[32px]">
            <p className="text-[15px] font-medium">
              1911.56SQ.M 141.2m x 71.2m{" "}
            </p>
            <p className="text-[12px] font-bold text-green">4 Plots</p>
          </div>
          <p className="text-[15px] font-medium mt-[16px] text-green">
            N1,840,000 of N2,400,000
          </p>
          <div className="flex items-center gap-x-[10px] mt-[29px]">
            <img src="/images/pull.svg" alt="download"></img>
            <p className="text-[15px] text-backblue font-medium">
              Download allocation letter
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
