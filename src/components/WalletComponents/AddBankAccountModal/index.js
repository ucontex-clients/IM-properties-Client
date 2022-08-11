import React from "react"


export function AddBankAccountModal({toggleAccountModal, setAddAccountModal, setViewAccountSuccess}){
    return(
        <div className="add-bank-account-modal-wrapper" onClick={()=> setAddAccountModal(false)}>
            <div className="add-account-modal-white">
                <div className="cancel-wrapper" onClick={()=> setAddAccountModal(false)}><img src="./images/cancel.png"></img></div>
                <p style={{marginBottom: '43px'}} className='add-account-para'>Add bank account</p>
                <div className="bank-name-wrapper" style={{marginBottom: '30px'}}>
                    <label>Bank Name</label>
                    <select>
                        <option>Bank 1</option>
                    </select>
                </div>
                
                <div className="bank-name-wrapper" style={{marginBottom: '46px'}}>
                    <label>Bank Name</label>
                    <input type='text' placeholder="Account Number"></input>
                </div>

                <div className="modal-checkbox-wrapper">
                    <input type='checkbox'></input>
                    <p>I confirm the bank account details above</p>
                </div>
                <button className="add-bank-account-button" onClick={() => {
                    setAddAccountModal(false)
                    setViewAccountSuccess(true)
                }}>Add Bank Account</button>
            </div>
        </div>
    )
}