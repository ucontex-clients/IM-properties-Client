import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Select,
} from "@chakra-ui/react";

import {
  PropertyViewSection,
  VideoSection,
  TopSide,
  Testinonials,
  News,
  PropertyView,
  Layout,
  ChooseDate,
} from "../components";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BiChevronsRight } from "react-icons/bi";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [time, setTime] = useState("");

  // const focusOnPage = () => {
  //   const papers = document.getElementById("building");
  //   papers.style.Display = "";
  //   papers.scrollIntoView();
  //   console.log(papers);
  // };

  const myStyle = {
    backgroundColor: "#FF1212",
    color: "#fff",
  };
  let [property, setProperty] = useState([]);
  const [url, setUrl] = useState("https://alert-battledress-boa.cyclic.app/api/property/all");

  useEffect(() => {
    loadProperties();
  }, []);
  let loadProperties = () => {
    fetch(url)
      .then(e => e.json())
      .then(res => setProperty(res.slice(-3)))
  };

  return (
    <div>
      <TopSide />
      <Layout>
        <div
          className="home-image-wrapper h-[50vh] md:h-[80vh]"
          style={{ overflow: "hidden" }}
        >
          <img src="./images/newHome.png" alt="home cover"></img>
          <div className="background" style={{ paddingLeft: "64px" }}>
            <h1 style={{ marginTop: "160px" }}>
              We are <span style={{ color: "#FF1212" }}>IM</span> Properties
            </h1>
            <p style={{ marginTop: "0.5em" }}>
              you can own A Property Without Stress <br />
              and become a landlord with peace of mind
            </p>
            <div
              className="flex"
              style={{ marginTop: "68px", columnGap: "39px" }}
            >
              <div className="home-button2 hidden md:block">
                <Button onClick={onOpen} className="inline-block mr-[39px]">
                  BOOK AN INSPECTION
                </Button>
                <a href="#touch">
                  <Button className="inline-block mr-[39px]">CONTACT US</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-button2 flex justify-center pt-[35px] bg-white md:hidden">
          <button className="inline-block mr-[39px]" onClick={onOpen}>
            BOOK AN INSPECTION
          </button>
          <a href="#touch">
            <button>CONTACT US</button>
          </a>
        </div>
        <div className="section-container py-[28px] px-[19px] md:px-[65px] md:py-[85px]">
          <div>
            <section className="section1">
              <h2>About IM Properties</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.{" "}
              </p>
              <Link
                to="/about"
                className="p-2 rounded text-white text-[15px] px-[16px] py-[10px] mt-[30px]"
                style={{ backgroundColor: "#FF1212" }}
              >
                LEARN MORE
              </Link>
            </section>
            <section className="section1 mt-[71px]">
              <h2>What we do</h2>
              <div className="flex mt-[31px] doings-wrapper">
                <div>
                  <div className="our-doings">
                    <div className="flex items-center gap-x-[3px]">
                      <div
                        style={{
                          padding: "5px",
                          border: "1px dashed black",
                          borderRadius: "2px",
                        }}
                      >
                        <FaUsers style={{ color: "#6C6C6C" }} />
                      </div>
                      <p className="doings">Estate Development</p>
                    </div>
                    <p className="mt-[20px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus.{" "}
                      <Link to="/about#estate">Read More</Link>
                    </p>
                  </div>

                  <div className="our-doings">
                    <div className="flex items-center gap-x-[3px] mt-[22px]">
                      <div
                        style={{
                          padding: "5px",
                          border: "1px dashed black",
                          borderRadius: "2px",
                        }}
                      >
                        <FaUsers style={{ color: "#6C6C6C" }} />
                      </div>
                      <p className="doings">Property Management</p>
                    </div>
                    <p className="mt-[20px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus.{" "}
                    </p>
                    <Link to="/about#property">Read More</Link>
                  </div>
                </div>
                <div className="ml-[34px] pl-[34px] second-container">
                  <div className="our-doings">
                    <div className="flex items-center gap-x-[3px]">
                      <div
                        style={{
                          padding: "5px",
                          border: "1px dashed black",
                          borderRadius: "2px",
                        }}
                      >
                        <FaUsers style={{ color: "#6C6C6C" }} />
                      </div>
                      <p className="doings">Buy & Sell Properties</p>
                    </div>
                    <p className="mt-[20px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus.{" "}
                      <Link to="/about#buy">Read More</Link>
                    </p>
                  </div>

                  <div className="our-doings">
                    <div className="flex items-center gap-x-[3px] mt-[22px]">
                      <div
                        style={{
                          padding: "5px",
                          border: "1px dashed black",
                          borderRadius: "2px",
                        }}
                      >
                        <FaUsers style={{ color: "#6C6C6C" }} />
                      </div>
                      <p className="doings">Building Construction</p>
                    </div>
                    <p className="mt-[20px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus.{" "}
                      <Link to="/about#building">Read More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="doings-images">
            <div className="doings1">
              <img src="./images/doings1.png" alt="what we do"></img>
            </div>
            <div className="doings2">
              <img src="./images/doings2.png" alt="what we do"></img>
            </div>
          </div>
        </div>

        <VideoSection />

        <div className="section1  pt-[132px] p-[22px] md:p-[65px] bg-white">
          <h2 style={{ marginBottom: "10px" }}>Our Latest Properties</h2>
          <p>Buy a landlanded property with peace of mind</p>
          <PropertyViewSection />
          <div className="grid place-items-center mt-[56px]">
            <button
              className="p-2 rounded text-white text-[15px] px-[16px] py-[10px]"
              style={{ backgroundColor: "#FF1212" }}
            >
              <Link to="/properties">VIEW MORE</Link>
            </button>
          </div>
        </div>

        <div className="grid px-[22px] md:px-[65px] gap-x-[59px] items-center py-[76px] residual-container">
          <div
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
            className="hidden md:block"
          >
            <img
              src="./images/laptop.png"
              alt="customer"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div className="residual">
            <h2>Earn residual income from real estate</h2>
            <h3 className="mt-[20px]">Become An Executive Sales Partner</h3>
            <div
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              className="md:hidden"
            >
              <img
                src="./images/laptop.png"
                alt="customer"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              ></img>
            </div>
            <p className="mt-[47px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.{" "}
            </p>
            <p className="mt-[47px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.{" "}
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="./images/testimonial.png"
            alt="testimonial"
            style={{ width: "100%", height: "100%", zIndex: "-10" }}
            className="absolute"
          ></img>
          <div
            className="py-[57px] px-[19px] md:px-[138px] top-0 left-0 w-full h-full text-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <h2 className="text-[25px] text-white font-fam font-bold">
              Testimonials
            </h2>
            <div className="nav-div md:hidden" style={{ left: "40px" }}>
              <MdKeyboardArrowLeft style={{ fontSize: "24px" }} />
            </div>
            <div className="nav-div md:hidden" style={{ right: "40px" }}>
              <MdKeyboardArrowRight style={{ fontSize: "24px" }} />
            </div>

            <div className="md:grid gap-y-[13px] md:grid-cols-3 gap-x-[26px] mt-[93px]">
              <Testinonials />
              <Testinonials />
              <Testinonials />
            </div>

            <div className="hidden md:block">
              <button
                className="font-fam bg-mine text-white text-[15px] px-[16px] py-[10px] rounded font-medium mt-[79px]"
                style={{ fontFamily: "Montserrat" }}
              >
                VIEW MORE
              </button>
            </div>
          </div>
        </div>

        <div className="px-[22px] md:px-[60px] py-[76px] bg-white">
          <h2 className="font-bold text-[18px] md:text-[25px] font-fam md:text-center">
            Latest News Feeds
          </h2>
          <div className="latest-news gap-[43px] mt-[43px]">
            <News />
            <News />
            <News />
          </div>
          <p className="font-fam font-medium text-mine text-[15px] cursor-pointer text-center news-read">
            READ MORE
          </p>
        </div>

        <div className="pb-[56px]">
          <h2 className="font-bold text-[25px] font-fam bg-white px-[22px] md:px-[60px] pb-[52px]">
            See More Properties
          </h2>
          <div className="prop-view-wrapper gap-x-[43px] p-[29px]">
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
                  />
                </>
              })
            }
          </div>
          <div
            className="flex items-center rounded-[8px] bg-mine py-[6px] px-[9px] gap-x-[5px] mt-[21px] cursor-pointer"
            style={{ width: "fit-content", margin: "auto" }}
          >
            <Link
              to={"/properties"}
              className="font-fam text-white text-[18px] font-semibold text-center"
            >
              EXPLORE PROPERTY
            </Link>
            <BiChevronsRight style={{ fontSize: "30px", color: "#fff" }} />
          </div>
        </div>

        <div className="px-[22px] md:px-[48px] py-[67px] bg-white" id="touch">
          <h2 className="font-fam text-[25px] text-center font-bold">
            Get in Touch
          </h2>
          <div className="grid grid-cols-3 gap-x-[120px] mt-[48px] touch-wrapper">
            <div>
              <p className="font-fam text-[15px] font-bold">IM Properties</p>
              <div className="mt-[18px]">
                <p className="font-fam text-[15px] font-medium flex gap-x-[5px]">
                  <GrLocation style={{ fontSize: "22px" }} />
                  KM 37 East West Road Port Harcourt.
                </p>
              </div>
            </div>

            <div>
              <p className="font-fam text-[15px] font-bold">Give us a call</p>
              <div className="mt-[18px]">
                <p className="font-fam text-[15px] font-medium flex items-center gap-x-[5px]">
                  <MdOutlineCall style={{ fontSize: "22px" }} />
                  +234-806-7864-098
                </p>
              </div>
            </div>

            <div>
              <p className="font-fam text-[15px] font-bold">Opening Hours:</p>
              <div className="mt-[18px] opening">
                <p className="font-fam text-[15px] font-medium flex items-center gap-x-[5px]">
                  <AiOutlineFieldTime style={{ fontSize: "22px" }} />
                  Mon - Sat 9am - 5pm
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-x-[55px] grid-cols-2 mt-[54px] drop-message">
            <div className="user-input">
              <div>
                <label
                  htmlFor="name"
                  className="font-fam text-[18px] font-semibold text-light"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block mt-[9px]"
                ></input>
              </div>
              <div className="mt-[18px]">
                <label
                  htmlFor="name"
                  className="font-fam text-[18px] font-semibold text-light"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="name"
                  name="name"
                  className="block mt-[9px]"
                ></input>
              </div>
              <div className="mt-[18px]">
                <label
                  htmlFor="name"
                  className="font-fam text-[18px] font-semibold text-light"
                >
                  Phone:
                </label>
                <input
                  type="tel"
                  id="name"
                  name="name"
                  className="block mt-[9px]"
                ></input>
              </div>
            </div>
            <div className="user-input">
              <div>
                <label
                  htmlFor="name"
                  className="font-fam text-[18px] font-semibold text-light"
                >
                  Message:
                </label>
                <textarea
                  id="name"
                  name="name"
                  className="block mt-[9px]"
                  style={{ minHeight: "215px" }}
                ></textarea>
              </div>
              <button className="font-fam bg-mine text-white text-[20px] font-medium block mt-[36px] px-[15px] py-[10px] rounded-[5px] message-button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-white">Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                      <img
                        src="/images/chooseLocation.png"
                        alt="location"
                      ></img>
                    </div>
                    <p>Select Location</p>
                  </div>
                  <div className="select-location-select">
                    <Select placeholder="Select Location" w="160px">
                      <option value="option1">Port Harcourt</option>
                      <option value="option2">Owerri</option>
                      <option value="option3">Uyo</option>
                    </Select>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
