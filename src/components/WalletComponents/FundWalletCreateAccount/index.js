import React, { useState } from "react";
import { AddAccountSuccess } from "../AddAccountSuccess"
import { AddBankAccountModal } from "../AddBankAccountModal"
import { FundAccount } from "../FundAccount";
import { WithdrawCash } from "../WithdrawCash";


export function FundWalletCreateAccount({ setActivePage }) {
    let [activeTab, setActiveTab] = useState("fund");
    let style1 = { color: "green", fontWeight: "600"};

    return (<>
        <div className="dashboard-main-right full_ah">
            <div className="flex_btw_ah mb-10 mx-10">
                <span className="flex_btw_ah gap-5">
                    <p>Balance :</p>
                    <p style={{ color: "green", fontWeight: "600" }}>#50,000</p>
                </span>
                <div style={activeTab === "fund" ? style1 : {}} onClick={() => setActiveTab("fund")}>Fund</div>
                <div style={activeTab === "withdraw" ? style1 : {}} onClick={() => setActiveTab("withdraw")}>Withdraw</div> 
            </div>
            {activeTab === "fund" && (
                <FundAccount />
            )}

            {activeTab === "withdraw" && (
                <WithdrawCash />
            )}

        </div>

        <div className="dashboard-main-right mobile_ah" style={{ marginTop: "-90px" }}>
            <div className="mb-2" style={{ display: "flex", justifyContent: "right", gap: "50px" }}>
                <div style={activeTab === "fund" ? style1 : {}} onClick={() => setActiveTab("fund")}>Fund</div>
                <div style={activeTab === "withdraw" ? style1 : {}} onClick={() => setActiveTab("withdraw")}>Withdraw</div>
            </div>
            <span className="mb-7" style={{ display: "flex", justifyContent: "right", gap: "50px" }}>
                <p>Balance :</p>
                <p style={{ color: "green", fontWeight: "600" }}>#50,000</p>
            </span>
            {activeTab === "fund" && (
                <FundAccount />
            )}

            {activeTab === "withdraw" && (
                <WithdrawCash />
            )}
            
        </div>
    </>
    )
}