import React from "react"

export function OneOffPayment({changePaymentMode}){
    return(
        <div className="one-off-payment-container">
            <p className="payment-top-para">Make Payment for 4 plots at <span>CAMPUS GARDEN ESTATE PORT HARCOURT</span></p>
            <div className="one-off-payment-box">
                <div className="make-payment-wrapper"><h3>Make Payment</h3></div>
            <p className="payment-total-para">Total</p>
            <p className="payment-amount-para">N1,840,000</p>
            <div className="payment-dropdown-div">
                <label htmlFor='payment-plan' style={{marginBottom: '26px', color: '#6C6C6C'}}>Payment plan</label>
                <div style={{position:'relative'}}>
                <select value='one-off' onChange={(e) => changePaymentMode(e)}>
                    <option className="option" value='one-off'>Out right payment</option>
                    <option className="option" value='installment'>Installmental payment</option>
                    <option className="option" value='easy-buy'>Easy-buy plan</option>
                </select>
                <div className="fill-drop-wrapper" style={{right:'13.11px'}}><img src="./images/arrowDown.png"></img></div>
                </div>
            </div>

            <div className="payment-dropdown-div" style={{marginTop: '43px'}}>
                <label htmlFor='payment-plan' style={{marginBottom: '31px', fontWeight:'700'}}>Amount (N)</label>
                <p>1,840,000</p>
            </div>

            <div className="payment-dropdown-div" style={{marginTop: '47px'}}>
                <label htmlFor='payment-plan' style={{marginBottom: '31px', fontWeight:'700'}}>Payment Method</label>
                <div style={{position:'relative'}}>
                    <select name="payment" value='0'>
                        <option className="option">Paystack (card, USSD, Bank Transfer)</option>
                        <option className="option">My Wallet</option>
                        <option className="option">Bank Deposit</option>
                    </select>
                <div className="fill-drop-wrapper" style={{right:'13.11px'}}><img src="./images/arrowDown.png"></img></div>
                </div>
            </div>

            <div className="pay-now-button-holder">
                    <button>Pay Now</button>
            </div>
            </div>
        </div>
    )
}