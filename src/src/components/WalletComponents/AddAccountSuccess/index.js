import React from "react"


export function AddAccountSuccess({setViewAccountSuccess}){
    return(
        <div className="add-bank-account-modal-wrapper" onClick={() => setViewAccountSuccess(false)}>
            <div className="add-account-modal-white">
                <div className="cancel-wrapper" onClick={() => setViewAccountSuccess(false)}><img src="./images/cancel.png" alt="cancel"></img></div>
                <p style={{marginBottom: '43px'}} className='add-account-para'>Add bank account</p>
                <div>
                    <div style={{textAlign: 'center'}} className='success-paras'>
                        <div className="okay-wrapper"><div className="ok-wrapper"><img src="./images/Ok.png" alt="done"></img></div></div>
                        <p style={{padding: '8px', color:'#038566'}}>Success</p>
                        <p style={{marginBottom: '18px'}}>You’ve successfully updated your bank account</p>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}