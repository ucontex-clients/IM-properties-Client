import React from "react"
<<<<<<< Updated upstream
import { SiteVideo, VideoData } from ".."

export function VideoSection(){
    return(
            <div className="all-video-wrapper section1" style={{backgroundColor:'#fff'}}>
                <h2 className="pl-[65px] mb-[34px]">Watch Our Video</h2>
                <div style={{position:'relative'}}>
                    <SiteVideo videoLink="./images/video1.mp4" />
                    <div className="py-[38px] px-[41px] flex video-bottom" style={{justifyContent:'space-between'}}>
=======
import { SiteVideo } from "../SiteVideo"
import {VideoData } from "../VideoData"

export function VideoSection(){
    return(
            <div className="all-video-wrapper section1 pt-[30px]" style={{backgroundColor:'#fff'}}>
                <h2 className="pl-[65px] mb-[34px]">Watch Our Video</h2>
                <div style={{position:'relative'}}>
                    <SiteVideo videoLink="./images/video1.mp4" />
                    <div className="bg-white video-bottom absolute py-[38px] px-[41px] flex bottom-0" style={{justifyContent:'space-between'}}>
>>>>>>> Stashed changes
                        <VideoData number='10' category={'Total Estates'} img={'estate'}/>
                        <VideoData number='1000' category={'Total Plots'} img={'plots'}/>
                        <VideoData number='200' category={'Landlords'} img={'landlords'}/>
                    </div>
                </div>
            </div>    
    )
}