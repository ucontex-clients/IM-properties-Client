import React from "react"

export function News(){
    return(
        <div className="news-main-wrapper">
            <div className="news-image-holder"><img src="./images/aboutBottom.png"></img></div>
            <div className="news-text-holder">
                <p>About Us - Who We Are?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="news-bottom-wrapper">
                <div className="news-bottom-image-container"><img src="./images/userFeedback.png"></img></div>
                <div className="news-admin-sign">
                    <p>Admin</p>
                    <p>Sept5, 2022</p>
                </div>
            </div>
        </div>
    )
}