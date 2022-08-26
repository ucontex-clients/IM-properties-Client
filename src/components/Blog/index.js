import React from "react";

export function Blog({img1, img2, img3, poster, date, blogTitle}){
    return(
        <div>
            <div className="blog-image-container">
                <img src={img1} alt='blog cover'></img>
            </div>
            
            <div className="blog-white-part">
                <div className="manager-icon-wrapper">
                    <div className="manager-icon-container">
                        <img src={img2} alt='owner icon'></img>
                    </div>

                    <p>By {poster}</p>
                </div>

                <h3>{blogTitle}</h3>

                <div className="calendar-icon-wrapper">
                    <div className="calendar-date-container">
                        <div className="calendar-icon-container">
                            <img src={img3} alt='calendar icon'></img>
                        </div>
                        <p>By {date}</p>
                    </div>

                    <p className="read-more-blog">READ MORE</p>

                </div>
            </div>

        </div>
    )
}