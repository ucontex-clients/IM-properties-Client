import React from "react";


export function FundWalletCreateAccount({ setActivePage }) {
    return (<>
        <div className="dashboard-main-right full_ah">
            <div className="flex_btw_ah mb-10 mx-10">
                <span className="flex_btw_ah gap-5">
                    <p>Balance :</p>
                    <p style={{ color: "green", fontWeight: "600" }}>#50,000</p>
                </span>
                <div style={{ color: "green", fontWeight: "600" }}>Fund</div>
                <div>Withdraw</div> 
            </div>
            <div className="fund-wallet-wrapper">
                <p className="">Fund Wallet</p>

                <div className="wallet-input-wrapper">
                    <div className="wallet-input-holder">
                        <label>Enter Top-Up Amount (N)</label>
                        <input type='text' placeholder='Enter Amount'></input>
                    </div>

                    <div className="wallet-input-holder">
                        <label>Choose payment method</label>
                        <select>
                            <option>Paystack (card, USSD, Bank Transfer)</option>
                            <option>Bank Deposit/Transfer</option>
                        </select>
                    </div>
                </div>

                <div className="create-wallet-button-holder">
                    <button onClick={() => setActivePage('fund')}>Pay Now</button>
                </div>
            </div>
        </div>

        <div className="dashboard-main-right mobile_ah" style={{ marginTop: "-90px" }}>
            <div className="mb-2" style={{ display: "flex", justifyContent: "right", gap: "50px" }}>
                <div style={{ color: "green", fontWeight: "600" }}>Fund</div>
                <div>Withdraw</div>
            </div>
            <span className="mb-7" style={{ display: "flex", justifyContent: "right", gap: "50px" }}>
                <p>Balance :</p>
                <p style={{ color: "green", fontWeight: "600" }}>#50,000</p>
            </span>
            <div className="fund-wallet-wrapper">
                <p className="">Fund Wallet</p>

                <div className="">
                    <div className="wallet-input-holder mb-4">
                        <label>Enter Top-Up Amount (N)</label>
                        <input type='text' placeholder='Enter Amount'></input>
                    </div>

                    <div className="wallet-input-holder">
                        <label>Choose payment method</label>
                        <select>
                            <option>Paystack (card, USSD, Bank Transfer)</option>
                            <option>Bank Deposit/Transfer</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4" style={{ textAlign: "center" }}>
                    <button style={{ background: "#3db2ff", color: "white", padding: "5px 20px", borderRadius: "4px" }} onClick={() => setActivePage('fund')}>Pay Now</button>
                </div>
            </div>
        </div>
    </>
    )
}