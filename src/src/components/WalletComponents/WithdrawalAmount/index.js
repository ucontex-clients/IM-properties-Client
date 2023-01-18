import React, { useState } from "react"
import { ViewWithdrawalSummary } from "../../"

export function WithdrawalAmount(){

    const [detailModal, setDetailModal] = useState(false)

    return(
        <div className="dashboard-main-right" >
            {detailModal && <ViewWithdrawalSummary setDetailModal={setDetailModal} />}
        <div className="dashboard-logo-section">
            <div className="main-dashboard-holder"><img src="./images/wallet.png" alt="wallet icon"></img></div>
            <p>Wallet</p>
            <div className="arrow-right2-container"><img src="./images/myArrowRight.png" alt="arrow right"></img></div>
            <p>Withdraw Cash</p>
        </div>
        <div className="fund-wallet-wrapper" style={{marginBottom: '109px'}}>
            <div className="instant-withdraw-para">
                <p>Withdraw your money to your bank account instantly</p>
                <div className="merchant-part">
                    <div><img src="./images/Merchant.png" alt="merchant icon"></img></div>
                    <p>View Bank Details</p>
                </div>
            </div>

            <div style={{paddingLeft: '142px'}}>
                    
                <div className="wallet-input-holder" style={{marginBlock: '96px 43px'}}>
                        <label>Amount to Widthdraw</label>
                        <input type='text' placeholder='Amount'></input>
                    </div>
                <div>
                        <button className="withdraw-amount-button" 
                        onClick={() => setDetailModal(true)}>Continue</button>
                </div>
            </div>

        </div>
    </div>
    )
}