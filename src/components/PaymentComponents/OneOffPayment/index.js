import React, { useRef, useState } from "react";
import { Select } from "@chakra-ui/react";

export function OneOffPayment({ changePaymentMode }) {
  const touch = useRef();
  let num = JSON.parse(localStorage.getItem("imcart"));
  let totalDue = localStorage.getItem("impay");
  let property = JSON.parse(localStorage.getItem("improperty"));
  let [paymentType, setPaymentType] = useState("");

  return (
    <div className="one-off-payment-container">
      <p className="payment-top-para hidden md:block">
        Make Payment for {num.length} plots at
        <span> {property.name}</span>
      </p>
      <div className="block px-[10px] md:hidden">
        <p className="font-fam font-bold text-[15px]">
          {property.name},{property.location.city}
        </p>
        <p className="text-[15px] font-fam text-light mt-[11px]">
          Make Payment for {num.length} plots at
        </p>
      </div>
      <div className="one-off-payment-box">
        <div className="make-payment-wrapper">
          <h3>Make Payment</h3>
        </div>
        <p className="payment-total-para">Total</p>
        <p className="payment-amount-para">N{totalDue}</p>
        <div className="payment-dropdown-div">
          <label
            htmlFor="payment-plan"
            style={{ marginBottom: "26px", color: "#6C6C6C" }}
          >
            Payment plan
          </label>
          <div>
            <Select
              variant="filled"
              name="payment"
              value="one-off"
              onChange={(e) => changePaymentMode(e)}
            >
              <option className="option" value="one-off">
                Out right payment
              </option>
              <option className="option" value="installment">
                Installmental payment
              </option>
            </Select>
          </div>
        </div>

        <div className="payment-dropdown-div" style={{ marginTop: "43px" }}>
          <label
            htmlFor="payment-plan"
            style={{ marginBottom: "31px", fontWeight: "700" }}
          >
            Amount (N)
          </label>
          <p>{totalDue}</p>
        </div>

        <div className="payment-dropdown-div" style={{ marginTop: "47px" }}>
          <label
            htmlFor="payment-plan"
            style={{ marginBottom: "31px", fontWeight: "700" }}
          >
            Payment Method
          </label>
          <div style={{ position: "relative" }}>
            <select name="payment" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
              <option className="option" value="">---</option>
              <option className="option" value="flutter">
                FlutterWave
              </option>
              <option className="option" value="bank-deposit">Bank Deposit</option>
            </select>
          </div>
        </div>

        <div className="pay-now-button-holder">
          <button value={paymentType} onClick={(e) => changePaymentMode(e)}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
