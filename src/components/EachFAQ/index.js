import React, { useState } from "react"


export function EachFAQ({question, ans}){

    const [full, setFull] = useState(false)

    const allValue = ans.split(' ')
    const myAns = allValue.slice(0,15).join(' ')

    const toggleFull = () => {
        setFull(prevVal => !prevVal)
    }


    return(
        <div className="each-FAQ">
            <h5>{question}</h5>
            <p>{full ? ans : `${myAns}...`}
                <div className="FAQ-arrow" onClick={toggleFull}>
                    <img src="./images/FAQarrow.png" alt="arrow down"></img>
                </div>
            </p>
        </div>
    )
}