import React from "react"


export function EachFAQ({question, ans}){
    return(
        <div className="each-FAQ">
            <h5>{question}</h5>
            <p>{ans}
            <div className="FAQ-arrow"><img src="./images/FAQarrow.png"></img></div></p>
        </div>
    )
}