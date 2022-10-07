import React from "react";

export function ForSale({ img, title, desc, minPrice, maxPrice, size }) {
  const checkOut = () => {
    window.location.assign("/property");
  };

  return (
    <div className="one-sale-wrapper">
      <div className="sale-image-wrapper">
        <div className="property-arrow-container">
          <img src="./images/propertyArrow.png" alt="arrow"></img>
        </div>
        <img src={img} className="sale-image" alt="property cover"></img>
      </div>

      <div className="sales-text-wrapper">
        <h3>{title}</h3>
        <div className="flex items-center justify-between">
          <p className="product-price">
            {`N${minPrice}`} - {`N${maxPrice}`}
          </p>
          <p className="font-fam font-bold text-[12px] text-mine">{`${size} Plots`}</p>
        </div>

        <div className="office-wrapper">
          <div className="office-image-wrapper">
            <img src="./images/venue.png" alt="venue icon"></img>
          </div>
          <p>Owerri, Imo, Nigeria</p>
        </div>
        <hr />
        <div>
          <h4 className="font-fam mt-[8px] mb-[6] font-medium text-[13px]">
            About
          </h4>
          <p className="font-fam font-normal text-[13px]">
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
          </p>
        </div>
        <div className="view-product-button-wrapper">
          <button className="view-product-button" onClick={checkOut}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
