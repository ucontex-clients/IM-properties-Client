import React, { useState, useEffect } from "react";
import { Layout, PropertyDetailBottom, SingleProperty } from "../components";
import { AiFillCamera } from "react-icons/ai";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
  const [viewedImage, setViewedImage] = useState("/images/main1.png");
  let [property, setProperty] = useState([]);
  let id = useParams();
  const [url, setUrl] = useState("https://im-property.herokuapp.com/api/property/single/" + id.id);


  useEffect(() => {
    loadProperties();
  }, []);
  let loadProperties = () => {
    fetch(url)
      .then(e => e.json())
      .then(res => setProperty(res))
  };

  return (
    <Layout>
      <div
        className="property-detail-image-main-wrapper bg-white"
        style={{ paddingTop: "39px" }}
      >
        <div className="single-large-image-wrapper">
          <div
            className="all-property-arrow-container"
            style={{ right: "18px" }}
          >
            <img src="/images/propertyArrow.png" alt="arrow"></img>
          </div>
          <div
            className="all-property-arrow-container"
            style={{ left: "18px" }}
            id="face-left"
          >
            <img src="/images/propertyArrow.png" alt="arrow"></img>
          </div>
          <div className="camera-wrapper">
            <AiFillCamera
              style={{ width: "24.44px", height: "21.59px", color: "#fff" }}
            />
            <p>6</p>
          </div>
          <img src={viewedImage} alt="view"></img>
        </div>
        <div className="single-small-image-wrapper">
          <SingleProperty
            checkImage={"/images/main2.png"}
            setViewedImage={setViewedImage}
          />
          <SingleProperty
            checkImage={"/images/main3.png"}
            setViewedImage={setViewedImage}
          />
          <SingleProperty
            checkImage={"/images/main4.png"}
            setViewedImage={setViewedImage}
          />
          <SingleProperty
            checkImage={"/images/main1.png"}
            setViewedImage={setViewedImage}
          />
          <SingleProperty
            checkImage={"/images/main5.png"}
            setViewedImage={setViewedImage}
          />
          <SingleProperty
            checkImage={"/images/main2.png"}
            setViewedImage={setViewedImage}
          />
        </div>
      </div>

      <PropertyDetailBottom />
    </Layout>
  );
}
