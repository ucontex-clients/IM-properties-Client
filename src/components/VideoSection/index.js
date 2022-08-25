import React from "react"
import { SiteVideo } from ".."

export function VideoSection(){
    return(
            <div className="all-video-wrapper">
                <div><SiteVideo videoLink="./images/video1.mp4" /></div>
                <div><SiteVideo videoLink="./images/video1.mp4" /></div>
                <div><SiteVideo videoLink="./images/video1.mp4" /></div>
            </div>    
    )
}