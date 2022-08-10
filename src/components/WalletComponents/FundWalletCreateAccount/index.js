import React from "react"


export function FundWalletCreateAccount({setActivePage}){
    return(
        <div className="dashboard-main-right">
        <div className="dashboard-logo-section">
            <div className="main-dashboard-holder"><img src="./images/wallet.png"></img></div>
            <p>Wallet</p>
            <div className="arrow-right2-container"><img src="./images/arrowRight2.png"></img></div>
            <p>Fund Wallet</p>
        </div>
        <div className="fund-wallet-wrapper">
            <p className="">Fund Wallet</p>

            <div className="wallet-input-wrapper">
                <div className="wallet-input-holder">
                    <label>Enter Top-Up Amount (N)</label>
                    <input type='text' placeholder='Enter Amount'></input>
                </div>

                <div className="wallet-input-holder">
                    <label>Choose payment method</label>
                    <select>
                        <option>Paystack (card, USSD, Bank Transfer)</option>
                        <option>Bank Deposit/Transfer</option>
                    </select>
                </div>
            </div>

            <div className="create-wallet-button-holder">
                    <button onClick={()=> setActivePage('fund')}>Pay Now</button>
            </div>
        </div>
    </div>
    )
}