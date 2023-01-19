import React, { useEffect, useState } from "react"
import { SiteVideo, VideoData } from ".."

export function VideoSection() {
    let [property, setProperty] = useState([]);
    let [size, setSize] = useState(0);
    const [url, setUrl] = useState("https://alert-battledress-boa.cyclic.app/api/property/all");


    useEffect(() => {
        loadProperties();
    }, []);
    let loadProperties = () => {
        fetch(url)
            .then(e => e.json())
            .then(res => {
                setProperty(res)
                res.map((e, i) => {
                    let arr = [];
                    let dd = 0;
                    dd = e.plotLayout.length;
                    arr.push(dd)
                    setSize(arr.reduce((a, b) => a + b, 1))
                })
            })
    };
    return (
        <div className="all-video-wrapper section1" style={{ backgroundColor: '#fff' }}>
            <h2 className="pl-[65px] mb-[34px]">Watch Our Video</h2>
            <div style={{ position: 'relative' }}>
                <SiteVideo videoLink="./images/video1.mp4" />
                <div className="full_ah container py-[38px] px-[41px] flex video-bottom" style={{ justifyContent: 'space-between' }}>
                    <VideoData number={property.length} category={'Total Estates'} img={'estate'} />
                    <VideoData number={size} category={'Total Plots'} img={'plots'} />
                    <VideoData number='200' category={'Landlords'} img={'landlords'} />
                </div>
                <div className="mobile_ah container py-[38px] px-[41px] flex" style={{ justifyContent: 'space-between' }}>
                    <VideoData number={property.length} category={'Total Estates'}  />
                    <VideoData number={size} category={'Total Plots'}  />
                    <VideoData number='200' category={'Landlords'} />
                </div>
            </div>
        </div>
    )
}