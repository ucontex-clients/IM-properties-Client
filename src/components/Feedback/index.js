import React from "react";

export function Feedback({img1, img2}) {
  return (
        <div className="feedback-wrapper">
            <div className="feedback-image-container">
                <img src={img1} alt='feedback cover'></img>
            </div>
            <div className="feedback-white">
                <p className='user-feedback'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                </p>
                <div className='user-feedback-image-container'>
                    <div className="user-image-wrapper">
                        <img src={img2} alt='user icon'></img>
                    </div>
                    <h3>John Doe</h3>
                </div>
            </div>
        </div>
  );
}
