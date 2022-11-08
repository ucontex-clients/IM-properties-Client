import React from "react"
import { SiteVideo, VideoData } from ".."

export function VideoSection(){
    return(
            <div className="all-video-wrapper section1" style={{backgroundColor:'#fff'}}>
                <h2 className="pl-[65px] mb-[34px]">Watch Our Video</h2>
                <div style={{position:'relative'}}>
                    <SiteVideo videoLink="./images/video1.mp4" />
                    <div className="py-[38px] px-[41px] flex video-bottom" style={{justifyContent:'space-between'}}>
                        <VideoData number='10' category={'Total Estates'} img={'estate'}/>
                        <VideoData number='1000' category={'Total Plots'} img={'plots'}/>
                        <VideoData number='200' category={'Landlords'} img={'landlords'}/>
                    </div>
                </div>
            </div>    
    )
}