import React from "react";

export function MobileTestimonial() {
    return (
    <div>
        <div className="flex items-center gap-x-[20px] pl-[22px] mb-[20px]">
                <div>
                  <img src="./images/user.png" alt="user"></img>
                </div>
                <p className="font-fam text-white font-bold text-[18px]">Phil</p>
        </div>
            <div id="carouselExampleIndicators" className="carousel slide carouselContainer" data-ride="carousel">
                
                <div class="carousel-inner flex">
                    <div class="carousel-item active">
                        <img src="./images/newHome.png" class="d-block w-100" alt="First Slide" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/build1.png" class="d-block w-100" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/build2.png" class="d-block w-100" alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/build3.png" class="d-block w-100" alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/build4.png" class="d-block w-100" alt="Fifth slide" />
                    </div>
                </div>
                <div className="">
                    <p className="font-fam font-normal text-[15px] lh-[1.5] text-white px-[10px] mt-[20px]">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et{" "}
                    </p>
                </div>
                <div className="forCarousel flex hidden mt-[50px]">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                </div>
            </div>
            
    </div>
    
    );
}