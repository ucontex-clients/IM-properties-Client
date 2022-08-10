import React, { useState } from "react"
import { AddAccountSuccess } from "../AddAccountSuccess"
import { AddBankAccountModal } from "../AddBankAccountModal"


export function WitdrawCash(){

    const [addAccountModal, setAddAccountModal] = useState(false)
    const [viewAccountSuccess, setViewAccountSuccess] = useState(false)

const toggleAccountModal = () => {
    setAddAccountModal(prevValue => !prevValue)
}



    return(
        <div className="dashboard-main-right">
            {addAccountModal && <AddBankAccountModal
            setAddAccountModal={setAddAccountModal} setViewAccountSuccess={setViewAccountSuccess} />}
            {viewAccountSuccess && <AddAccountSuccess setViewAccountSuccess={setViewAccountSuccess} />}
        <div className="dashboard-logo-section">
            <div className="main-dashboard-holder"><img src="./images/wallet.png"></img></div>
            <p>Wallet</p>
            <div className="arrow-right2-container"><img src="./images/arrowRight2.png"></img></div>
            <p>Withdraw Cash</p>
        </div>
        <div className="upload-white-area">
           <div className="withdraw-gray">
                <p style={{marginBottom: '67px'}}>Withdraw your money tp your bank account instantly</p>
                <p style={{marginBottom: '41px'}}><span>Dear John Doe,</span> kindly link a default bank account to withdraw your money</p>
                <p><span>Bank Account</span> (for withdrawal)</p>
                <div className="add-new-bank-account">
                        <div onClick={toggleAccountModal}><img src="./images/newAccount.png"></img></div>
                        <p>Add New Bank Account</p>
                </div>
           </div>
        </div>
    </div>
    )
}