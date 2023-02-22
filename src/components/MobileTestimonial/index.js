import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export function MobileTestimonial() {
    return (
    <div>
        <div className="flex items-center gap-x-[20px] pl-[15px] mb-[20px]">
                <div>
                  <img src="./images/user.png" alt="user"></img>
                </div>
                <p className="font-fam text-white font-bold text-[18px]">Phil</p>
        </div>
        <Carousel fade interval={5000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/newHome.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/newHome.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/newHome.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/newHome.png"
                    alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/newHome.png"
                    alt="Fifth slide"
                />
            </Carousel.Item>
        </Carousel>
        <div className="flex justify-center text-center">
            <p className="font-fam font-normal text-[15px] lh-[1.5] text-white mt-[20px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et{" "}
            </p>
        </div>
        <div className="block">
            <button
                  className="font-fam bg-mine text-white text-[15px] px-[16px] py-[10px] rounded font-medium mt-[50px]"
                  style={{ fontFamily: "Montserrat" }}
            >
                VIEW MORE
            </button>
        </div>
    </div>
    
    );
}