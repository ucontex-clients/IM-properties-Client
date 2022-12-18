import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PlotDimension,
  PlotButtons,
  SimilarProperty,
  BuyerReviews,
  ChooseDate,
} from "..";
import { BsFillShareFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
const axios = require("axios");

export function PropertyDetailBottom() {
  useEffect(() => {
    loadProperty();
  }, []);
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  // const [, set] = useState("");

  const myStyle = {
    backgroundColor: "#FF1212",
    color: "#fff",
  };

  const [review, setReview] = useState({
    name: "",
    date: "",
    message: "",
  });

  const handleReviewChange = (e) => {
    setReview((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const plotDimensions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (plot, index) => {
      return <PlotDimension key={index} />;
    }
  );

  const allSimilarProperty = [1, 2, 3].map((property, index) => {
    return <SimilarProperty key={index} />;
  });

  const allBuyerReviews = [1, 2, 3].map((review, index) => {
    return <BuyerReviews key={index} />;
  });

  let id = useParams();
  const submitReview = async () => {
    let url = "https://alert-battledress-boa.cyclic.app/api/review/create/" + id.id;
    let data = { message }
    if (message.length >= 8) {
      await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhmNzVhOWE1MGJmNjNlZDNjNTExNjUiLCJyb2xlIjoibm9ybWFsQWRtaW4iLCJpYXQiOjE2NzA1NDU2MDgsImV4cCI6MTY3MzEzNzYwOH0.xopzgQH16saT9xJLxRVhtAhoDo26s3NQNY2lgd0Gttk`
        },
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((e) => e.json())
        .then(res => {
          setMessage("");
          setName("");
          loadProperty();
        })
    }


  };

  const [url] = useState("https://alert-battledress-boa.cyclic.app/api/property/single/" + id.id);
  let [property, setProperty] = useState({});

  let loadProperty = () => {
    fetch(url)
      .then(e => e.json())
      .then(res => setProperty(res.data))
  };

  return (
    <div className="property-detail-bottom-main-wrapper bg-white md:bg-transparent">
      <div className="property-detail-bottom">
        <div className="detail-bottom-top-section">
          <div className="detail-top-section">
            <p style={{ textTransform: "uppercase" }}>{property?.name}</p>
            <div style={{ marginTop: "5px" }} className="location-two-wrapper">
              <div className="location-two-holder">
                <img src="/images/Location2.png" alt="location"></img>
              </div>
              <p>{property?.location?.address}, {property?.location?.LGA}, {property?.location?.city}, {property?.location?.state}</p>
            </div>
            <p style={{ fontSize: "18px" }}>N350,000 - N500,000</p>
          </div>
          <div className="share-location-wrapper">
            <div>
              <p
                style={{
                  background: "rgba(61, 178, 255, 0.2)",
                  color: "#3DB2FF",
                }}
              >
                Book
              </p>
              <p
                style={{
                  background: "rgba(3, 192, 56, 0.2)",
                  color: "#038566",
                }}
              >
                View Layout
              </p>
              <p
                style={{
                  background: "rgba(255, 18, 18, 0.2)",
                  color: "#FF1212",
                }}
              >
                Buy
              </p>
            </div>
            <div className="share-love">
              <div className="icon-2">
                <BsFillShareFill className="imported-icon" />
              </div>
              <div className="icon-2">
                <FiHeart className="imported-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-property-wrapper">
          <p>About Property</p>
          <p>
            {property?.about}
          </p>
        </div>

        <div className="property-features-wrapper flex flex-col gap-y-[25px] md:grid md:grid-cols-2">
          <div>
            <p>Estate Features</p>
            {property?.estateFeatures?.map((e, i) => {
              return (
                <p>{e}</p>
              )
            })}

          </div>
          <div>
            <p>Property Features</p>
            {property?.propertyFeatures?.map((e, i) => {
              return (
                <p>{e}</p>
              )
            })}
          </div>
        </div>

        <div className="watch-video-wrapper">
          <p>Watch Video</p>
          <div className="watch-video-container">
            <video src="./images/video1.mp4" controls alt="watch"></video>
          </div>
        </div>

        <div className="buyer-review-wrapper">
          <div className="flex items-center justify-between">
            <p className="font-fam font-bold text-[15px]">{property?.reviews?.length} Review(s)</p>
            <p className="flex items-center gap-x-[2px] md:hidden cursor-pointer">
              <img src="/images/write.svg" alt="write"></img>
              <p className="font-fam text-skyblue text-[12px]">Write Review</p>
            </p>
          </div>
          <div>

            {property.length == 0 ? <div className="hidden md:block">No Review On This Property Yet</div> :
              property?.reviews?.map((e, i) => {
                return <BuyerReviews key={i} review={e.message} />
              })
            }

          </div>
          {/* <div className="buyer-review-button">
            <p className="font-fam font-bold text-[15px]">10 more Review</p>
          </div> */}
        </div>

        <div className="create-review-wrapper hidden md:block">
          <p>Write a review</p>
          <div className="write-reviews">
            <div className="review-label-input">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            {/* <div className="review-label-input">
              <label>Name</label>
              <input
                type="text"
                name="date"
                value={review.date}
                onChange={handleReviewChange}
              ></input>
            </div> */}
            <div className="review-label-input" id="textarea-side">
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div
            className="buyer-review-button"
            style={{ marginBlock: "57px 45px" }}
          >
            <button
              style={{ backgroundColor: "#FF1212", color: "#fff" }}
              onClick={() => submitReview()}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
        <div className="property-layout-wrapper" style={{ marginTop: "10px" }}>
          <div className="property-layout-head">
            <p>Property Layout</p>
            <p>0 of {property?.plotLayout?.length} Sold</p>
          </div>

          <div className="property-layout-main">
            {
              property?.plotLayout?.slice(0, 6).map((e, i) => {
                return <PlotDimension key={i}
                  area={e.width * e.length}
                  price={e.price}
                  width={e.width}
                  length={e.length}
                />;
              })
            }</div>

          <div className="plot-button-wrapper">
            <PlotButtons id={id.id} />
          </div>
        </div>
        <div className="property-layout-wrapper">
          <div className="date-picker-head">
            <p>Book Physical Inspection</p>
          </div>

          <div className="date-picker-main">
            <div className="select-date-wrapper">
              <div>
                <img src="/images/Calendar2.png" alt="calendar"></img>
              </div>
              <p>Select Date</p>
            </div>

            <div>
              <ChooseDate />
            </div>

            <div className="select-time-wrapper">
              <div className="select-date-wrapper">
                <div>
                  <img src="/images/Time.png" alt="time"></img>
                </div>
                <p>Select time</p>
              </div>
              <div
                style={{ display: "flex", columnGap: "25px" }}
                className="time-picker"
              >
                <button
                  style={time === "10AM" ? myStyle : {}}
                  onClick={() => setTime("10AM")}
                >
                  10AM
                </button>
                <button
                  style={time === "1PM" ? myStyle : {}}
                  onClick={() => setTime("1PM")}
                >
                  1PM
                </button>
              </div>
            </div>

            <div className="select-location-wrapper">
              <div className="select-location-logo-side">
                <div>
                  <img src="/images/chooseLocation.png" alt="location"></img>
                </div>
                <p>Select Location</p>
              </div>
              <div className="select-location-select">
                <select>
                  <option>Port Harcourt</option>
                </select>
                {/* <div className="fill-drop-wrapper"><img src="./images/fillDrop.png"></img></div> */}
              </div>
            </div>
            <div
              style={{ marginBlock: "78px 21px", textAlign: "center" }}
              className="book-inspection-container"
            >
              <button>Book Inspection</button>
            </div>
          </div>
        </div>

        <div
          className="similar-property-wrapper"
          style={{ marginBottom: "50px" }}
        >
          <p className="similar-property">Similar Property</p>
          {allSimilarProperty}
        </div>
      </div>
    </div>
  );
}
