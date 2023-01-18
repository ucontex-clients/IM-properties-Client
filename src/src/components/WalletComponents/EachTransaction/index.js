import React from "react"


export function EachTransaction(){
    return(
        <div className="each-transaction-wrapper">
            <div className="each-transaction-left">
                <div>
                    <p style={{marginBottom: '8px'}}>Wallet Top-Up </p>
                    <p>IM-27189-1659905498</p>
                </div>
                <div>
                    <p>Aug 8 2022. 9AM</p>
                </div>
            </div>


            <div className="each-transaction-right">
                <p>N200,000</p>
                <div><img src="./images/Downloads.png" alt="download"></img></div>
            </div>
        </div>
    )
}