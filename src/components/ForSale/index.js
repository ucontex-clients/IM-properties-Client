import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ForSale({ img, title, desc, minPrice, maxPrice, size, address, id }) {


  useEffect(() => {
    setSrc(img[0])
  }, []);
    
  var num = 0;
  let [src, setSrc] = useState(img[0]);
  const handleChange = () => {
    //console.log(i);
    //num = (num + 1 + img.length) % img.length;
    let i = num < img.length ? num++ % img.length : 0;
    setSrc(img[i]);
    console.log(i);
  };

  return (
    <div className="one-sale-wrapper">
      <div className="sale-image-wrapper">
        <div className="property-arrow-container">
          <img src="/images/propertyArrow.png" onClick={handleChange} alt="arrow"></img>
        </div>
        <img src={src} className="sale-image" width="343px" height="230px" alt="property cover" id="sale-image"></img>
      </div>

      <div className="sales-text-wrapper">
        <h3>{title}</h3>
        <div className="flex items-center justify-between">
          <p className="product-price">
            {/* {`N${minPrice}`} - {`N${maxPrice}`} */}
            {`N${minPrice}`}
          </p>
          <p className="font-fam font-bold text-[12px] text-mine">{`${size} Plot(s)`}</p>
        </div>

        <div className="office-wrapper">
          <div className="office-image-wrapper">
            <img style={{ marginTop: "-40px" }} src="/images/venue.png" alt="venue icon"></img>
          </div>
          <p style={{ height: "60px", textOverflow: "ellipsis" }}>{address}</p>
        </div>
        <hr />
        <div id="propDes_ah2">
          <h4 className="font-fam mt-[8px] mb-[6] font-medium text-[13px]" >
            About
          </h4>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="font-fam font-normal text-[13px]">
              {desc}
            </p>
            {/* <p className="font-fam font-normal text-[13px]" style={{ cursor: "pointer" }}>See More</p> */}
          </span>
        </div>
        <div className="view-product-button-wrapper">
          <Link to={"/properties/single/" + id}>
            <button className="view-product-button">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
