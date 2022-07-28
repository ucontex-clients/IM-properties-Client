import React from "react"
import { SiteVideo } from ".."

export function VideoSection(){
    return(
        <div>
            <div className="video-bottom">
                <div className="video-container">
                    <SiteVideo videoLink="./images/video1.mp4" />
                </div>
            </div>
            
        </div>
    )
}