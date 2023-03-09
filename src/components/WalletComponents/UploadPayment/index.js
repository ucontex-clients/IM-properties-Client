import React from "react"


export function UploadPayment({ amount }){
    return(
    <div className="">
            <div className="dashboard-logo-section flex items-center gap-x-[10px] mb-[5px]">
                <div className="flex items-center gap-x-[8px]">
                    <div className="main-dashboard-holder">
                        <img src="/images/wallet.svg" alt="wallet"></img>
                    </div>
                    <div><p>Wallet</p></div>
                </div>

                <div className="flex items-center gap-x-[8px]">
                    <div className="arrow-right2-container">
                        <img src="/images/arrowRight2.png" alt="arrow right"></img>
                    </div>
                    <div><p>Fund Wallet (Bank Transfer)</p></div>
                </div>

            </div>
        <div className="upload-white-area">
            <div className="upload-payment-wrapper">
                <h5 className="bank-details">BANK DETAILS</h5>
                <p>Bank: <span>United Bank For Africa (UBA)</span></p>
                <p>Account Number: <span>United Bank For Africa (UBA)</span></p>
                <p>Account Name: <span>IM Montserratcontinental Limited</span></p>
                <p>Please pay <span>N{amount}</span> to above bank details</p>
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