import React from "react"


export function ViewWithdrawalSummary({setDetailModal}){
    return(
        <div className="add-bank-account-modal-wrapper" onClick={() => setDetailModal(false)}>
            <div className="add-account-modal-white">
                <div className="cancel-wrapper" onClick={() => setDetailModal(false)}><img src="./images/cancel.png"></img></div>
                <p style={{marginBottom: '35px'}} className='add-account-para'>Bank Account Details</p>
                <div className="customer-withdrawal-detail-wrapper">
                    <p>Account Name</p>
                    <p className='value'>JOHN DOE</p>
                    <p>Account Number</p>
                    <p className='value'>XXXXX-1065</p>
                    <p>Bank Name</p>
                    <p className='value'>United Bank for Africa</p>
                    <p>Transaction date</p>
                    <p className='value'>Aug 08,2022: 10:32:47pm</p>
                    <p>Status</p>
                    <div className="approved-wrapper">
                        <p className="value">Approved</p>
                        <div><img src="./images/Ok.png"></img></div>
                    </div>
                </div>

                <div className="delete-bank-card-wrapper">
                    <div className="delete-bank-card-container">
                        <div><img src="./images/danger.png"></img></div>
                        <p>Delete Bank Card & Re-add</p>
                    </div>
                </div>
            </div>
        </div>
    )
}