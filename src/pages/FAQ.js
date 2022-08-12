import React from "react"
import { EachFAQ, NavigationBar } from "../components"

export default function FAQ(){

const allFAQ = [...Array(4).keys()].map((FAQ, index) => {
    return <EachFAQ key={index} />
})



    return(
        <div>
            <NavigationBar page='FAQ' />
            <div className="about-image" style={{marginTop:'79px'}}>
                <div className="who-we-are"><p>Frequently Asked Questions</p></div>
                <div><img src="./images/FAQIm.png"></img></div>
            </div>
            <div className="FAQ-bottom-wrapper">
                {allFAQ}
            </div>
        </div>
    )
}