import React from "react"


export function Category({img, title, desc}){
    return (
        <div className="one-category-wrapper">
            <div className="category-top">
                <div className="category-image-wrapper">
                    <img src={img}></img>
                </div>
                <p>{title}</p>
            </div>
            <div className="category-bottom">
                <p>{desc}</p>
            </div>
    </div>
    )
}