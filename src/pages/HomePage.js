import React from "react"
import { NavigationBar } from "../components"

export default function HomePage(){
    return(
        <div>
            <NavigationBar />
            <div className="home-image-wrapper">
                <img src="./images/image1.png"></img>
            </div>
        </div>
    )
}