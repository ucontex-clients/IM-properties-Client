import React from "react"

export function SiteVideo({videoLink}){
    return(
        <video src={videoLink} controls className="video"/>
    )
}