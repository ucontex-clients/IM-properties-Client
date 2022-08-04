import React from "react"

export function OneOffPayment(){
    return(
        <div className="one-off-payment-container">
            <p className="payment-top-para">Make Payment for 4 plots at <span>CAMPUS GARDEN ESTATE PORT HARCOURT</span></p>
            <div className="one-off-payment-box">
                <div className="make-payment-wrapper"><h3>Make Payment</h3></div>
            <p className="payment-total-para">Total</p>
            <p className="payment-amount-para">N1,840,000</p>
            <div className="payment-dropdown-div">
                <label htmlFor='payment-plan' style={{marginBottom: '26px', color: '#6C6C6C'}}>Payment plan</label>
                <select>
                    <option className="option">Out right payment</option>
                    <option className="option">Installmental payment</option>
                    <option className="option">Easy-buy plan</option>
                </select>
            </div>

            <div className="payment-dropdown-div" style={{marginTop: '43px'}}>
                <label htmlFor='payment-plan' style={{marginBottom: '31px', fontWeight:'700'}}>Amount (N)</label>
                <p>1,840,000</p>
            </div>

            <div className="payment-dropdown-div" style={{marginTop: '47px'}}>
                <label htmlFor='payment-plan' style={{marginBottom: '31px', fontWeight:'700'}}>Payment Method</label>
                <select>
                    <option className="option">Paystack (card, USSD, Bank Transfer)</option>
                    <option className="option">My Wallet</option>
                    <option className="option">Bank Deposit</option>
                </select>

                <div className="pay-now-button-holder">
                    <button>Pay Now</button>
                </div>
            </div>
            </div>
        </div>
    )
}