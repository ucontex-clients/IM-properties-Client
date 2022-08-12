import React from "react"
import { NavigationBar, News } from "../components"

export default function BlogPage(){

    const allNews = [...Array(6).keys()].map((news, index) => {
        return <News key={index} />
    })


    return(
        <div style={{backgroundColor:'#fff'}}>
            <NavigationBar page='Blog' />
            <div className="about-image" style={{marginTop:'79px'}}>
                <div className="who-we-are"><p>See Latest News on <br/>IM Properties</p></div>
                <div><img src="./images/BlogImage1.png"></img></div>
            </div>
            <div className="latest-news">
                <p>Latest News</p>
            </div>

            <div className="all-news-holder">
                {allNews}
            </div>
        </div>
    )
}