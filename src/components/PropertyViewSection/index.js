import React, { useEffect, useState } from "react";
import { PropertyView } from "..";

export function PropertyViewSection() {
  let [property, setProperty] = useState([]);
  const [url, setUrl] = useState("https://alert-battledress-boa.cyclic.app/api/property/all");

  useEffect(() => {
    loadProperties();
  }, []);
  let loadProperties = () => {
    fetch(url)
      .then(e => e.json())
      .then(res => setProperty(res.slice(-2)))
  };


  return (
    <div className="property-view-main-wrapper">
      {
        property.map((e, i) => {
          let numberOfPlot = e.plotLayout.length;
          let address = e.location.address + " " + e.location.LGA + " " + e.location.city + " " + e.location.state;
          let price;
          let price2;
          e.plotLayout.map((a, b) => {
            let arr = [];
            arr.push(a.price)
            price = Math.max(...arr)
            price2 = Math.min(arr)
          });
          return <>
            <PropertyView
              img={"./images/view1.png"}
              name={e.name}
              location={address}
              para={true}
              about={e.about}
              plots={numberOfPlot}
              highPrice={price}
              lowPrice={price2}
              id={e._id}
            />
          </>
        })
      }
    </div>
  );
}
