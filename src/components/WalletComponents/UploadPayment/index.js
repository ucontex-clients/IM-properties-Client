import React from "react"


export function UploadPayment(){
    return(
    <div className="dashboard-main-right">
        <div className="dashboard-logo-section">
            <div className="main-dashboard-holder"><img src="./images/wallet.png" alt="wallet"></img></div>
            <p>Wallet</p>
            <div className="arrow-right2-container"><img src="./images/arrowRight2.png" alt="arrow right"></img></div>
            <p>Fund Wallet</p>
        </div>
        <div className="upload-white-area">
            <div className="upload-payment-wrapper">
                <h5 className="bank-details">BANK DETAILS</h5>
                <p>Bank: <span>United Bank For Africa (UBA)</span></p>
                <p>Account Number: <span>United Bank For Africa (UBA)</span></p>
                <p>Account Name: <span>IM Montserratcontinental Limited</span></p>
                <p>Please pay <span>N200,000</span> to above bank details</p>
                <p>Once you have made payment; please send proof of payment, name 
                    and your IM Property username to admin via 08023981234, 09890912834
                    or upload it here</p>
                <div className="upload-button-wrapper">
                    <div className="upload-button-holder">
                        <input type='file' placeholder="No file chosen"></input>
                        <button>Upload payment</button>
                    </div>
                    <p>Upload proof of payment</p>
                </div>
            </div>
        </div>
    </div>
    )
}