import React from "react";

export function Testinonials() {
  return (
    <div className="bg-dark rounded-[5px] p-[21px]">
      <div className="flex items-center gap-x-[20px] pl-[15px]">
        <div>
          <img src="./images/user.png" alt="user"></img>
        </div>
        <p className="font-fam text-mine font-bold text-[18px]">Phil</p>
      </div>
      <div className="mt-[47px]">
        <video src="./images/video1.mp4" controls className="video" />
      </div>
      <div>
        <p className="font-fam font-normal text-white text-justify mt-[25px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et{" "}
        </p>
      </div>
    </div>
  );
}
