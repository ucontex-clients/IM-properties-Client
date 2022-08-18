import React from "react"


export function AdminDashboardBox({title, color, img, amount}){
    return(
        <div className="admin-box-wrapper">
            <div className="revenue-image-wrapper">
                <p>{title}</p>
                <div style={{backgroundColor:{color}}}><img src={img}></img></div>
            </div>
            <p>{amount}</p>
        </div>
    )
}