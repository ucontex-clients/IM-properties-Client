import React from "react"
import { EachTransaction } from "../EachTransaction"

export function MyTransactions(){

const allTransactions = [...Array(4).keys()].map((transaction, index) => {
    return <EachTransaction key={index} />
})


    return(
        <div className="dashboard-main-right">
        <div className="dashboard-logo-section">
            <div className="main-dashboard-holder"><img src="./images/wallet.png"></img></div>
            <p>Wallet</p>
            <div className="arrow-right2-container"><img src="./images/myArrowRight.png"></img></div>
            <p>My Transaction</p>
        </div>
        <div className="my-transaction-wrapper">
            <p>Transaction History</p>

            <div className="all-transactions-holder">
                {allTransactions}
            </div>
        </div>
    </div>
    )
}