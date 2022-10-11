import React from "react";
import { PropertyView } from "..";

export function PropertyViewSection() {
  return (
    <div className="property-view-main-wrapper">
      <PropertyView
        img={"./images/view1.png"}
        name={"Campus Garden Estate"}
        location={"Jabi, Abuja, Nigeria"}
        para={true}
      />

      <PropertyView
        img={"./images/view1.png"}
        name={"Campus Garden Estate"}
        location={"Jabi, Abuja, Nigeria"}
        para={true}
      />
    </div>
  );
}
