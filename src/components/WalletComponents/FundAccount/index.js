import React, { useState } from "react";
import { UploadPayment } from "../UploadPayment";

export function FundAccount({ setActivePage }) {
    let [method, setMethod] = useState("");
    let [amount, setAmount] = useState("");
    let [display, setDisplay] = useState("none");
    let [display2, setDisplay2] = useState("block")

    const checkPayType = () =>{
        if(method === "offline"){
            setDisplay2("none");
            setDisplay("block");
        }
    }

    return(<>
        <div>
            <div className="fund-wallet-wrapper full_ah" style={display === "block" ? display : display2 }>
                <p className="">Fund Wallet</p>

                <div className="wallet-input-wrapper">
                    <div className="wallet-input-holder">
                        <label>Enter Top-Up Amount (N)</label>
                        <input type='text' placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)}></input>
                    </div>

                    <div className="wallet-input-holder">
                        <label>Choose payment method</label>
                        <select value={method} onChange={(e) => setMethod(e.target.value)}>
                            <option value="_____">!-----</option>
                            <option value="online">Paystack (card, USSD, Bank Transfer)</option>
                            <option value="offline">Bank Deposit/Transfer</option>
                        </select>
                    </div>
                </div>

                <div className="create-wallet-button-holder">
                    <button onClick={checkPayType}>Pay Now</button>
                </div>
            </div>

            <div className="full_ah" style={{ display: display }}>
                <UploadPayment amount={amount} />
            </div>
        </div>
    
        <div>
            <div className="fund-wallet-wrapper mobile_ah" style={{ display: display2}}>
                <p className="">Fund Wallet</p>

                <div className="">
                    <div className="wallet-input-holder mb-4">
                        <label>Enter Top-Up Amount (N)</label>
                        <input type='text' placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)}></input>
                    </div>

                    <div className="wallet-input-holder">
                        <label>Choose payment method</label>
                        <select value={method} onChange={(e) => setMethod(e.target.value)}>
                            <option value="_____">!-----</option>
                            <option value="online">Paystack (card, USSD, Bank Transfer)</option>
                            <option value="offline">Bank Deposit/Transfer</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4" style={{ textAlign: "center" }}>
                    <button style={{ background: "#3db2ff", color: "white", padding: "5px 20px", borderRadius: "4px" }} onClick={checkPayType}>Pay Now</button>
                </div>
            </div>
            <div className="mobile_ah" style={{ display: display }}>
                <UploadPayment amount={amount} />
            </div>
        </div>
        
        </>
    )
}