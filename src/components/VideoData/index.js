import React from "react"
import { MdRealEstateAgent } from "react-icons/md"
import { FaUsers } from "react-icons/fa"


export function VideoData({ number, category, img }) {
    return (<>
        <div className="full_ah container flex gap-x-[5px] items-center">
            <div style={{ padding: '12px', backgroundColor: '#C4CDD5', height: 'fit-content' }}>
                {img === 'landlords' && <FaUsers style={{ fontSize: '18px', color: '#6C6C6C' }} />}
                {img === 'estate' && <FaUsers style={{ fontSize: '18px', color: '#6C6C6C' }} />}
                {img === 'plots' && <MdRealEstateAgent style={{ fontSize: '18px', color: '#6C6C6C' }} />}
            </div>
            <div className="video-data" style={{ textAlign: 'center' }}>
                <p>{number}</p>
                <p>{category}</p>
            </div>
        </div>

        <div className="mobile_ah container flex gap-x-[5px] items-center">
            <div style={{ padding: '12px', backgroundColor: '#C4CDD5', height: 'fit-content' }}>
                {img === 'landlords' && <FaUsers style={{ fontSize: '18px', color: '#6C6C6C' }} />}
                {img === 'estate' && <FaUsers style={{ fontSize: '18px', color: '#6C6C6C' }} />}
                {img === 'plots' && <MdRealEstateAgent style={{ fontSize: '18px', color: '#6C6C6C' }} />}
            </div>
            <div className="video-data" style={{ textAlign: 'center' }}>
                <p>{number}</p>
                <p>{category}</p>
            </div>
        </div>
    </>
    )
}