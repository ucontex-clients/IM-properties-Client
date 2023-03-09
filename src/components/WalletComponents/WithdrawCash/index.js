import React, { useState } from "react"
import { AddAccountSuccess } from "../AddAccountSuccess"
import { AddBankAccountModal } from "../AddBankAccountModal"


export function WithdrawCash(){

    const [addAccountModal, setAddAccountModal] = useState(false)
    const [viewAccountSuccess, setViewAccountSuccess] = useState(false)

const toggleAccountModal = () => {
    setAddAccountModal(prevValue => !prevValue)
}



    return(
        <div className="">
            {addAccountModal && <AddBankAccountModal
            setAddAccountModal={setAddAccountModal} setViewAccountSuccess={setViewAccountSuccess} />}
            {viewAccountSuccess && <AddAccountSuccess setViewAccountSuccess={setViewAccountSuccess} />}
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
                    <div><p>Withdraw Cash</p></div>
            </div>
            
        </div>
        <div className="upload-white-area">
           <div className="withdraw-gray">
                <p style={{marginBottom: '67px'}}>Withdraw your money to your bank account instantly</p>
                <p style={{marginBottom: '41px'}}><span>Dear John Doe,</span> kindly link a default bank account to withdraw your money</p>
                <p><span>Bank Account</span> (for withdrawal)</p>
                <div className="add-new-bank-account flex items-center gap-x-[10px]">
                        <div onClick={toggleAccountModal}><img src="/images/newAccount.png" alt="account"></img></div>
                        <p>Add New Bank Account</p>
                </div>
           </div>
        </div>
    </div>
    )
}