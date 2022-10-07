import React from "react"

export function News(){
    return(
        <div className="news-main-wrapper">
            <div className="news-image-holder">
                <img src="./images/aboutBottom.png" alt="news cover"></img>
            </div>
            <div className="py-[10px] px-[19px]">
                <p className="text-[13px] font-normal font-fam text-light">June 10, 2022</p>
                <p className="font-semibold text-[15px] font-fam mt-[19px] mb-[6px]">Latest News in Real Estate</p>
                <p className="font-fam text-light text-[13px] font-normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut </p>
                <p className="font-fam text-[13px] font-semibold mt-[18px] cursor-pointer">Read More</p>
            </div>
        </div>
    )
}