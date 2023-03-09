import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

export function Installment({ changePaymentMode }) {
  const [selectPeriod, setSelectPeriod] = useState("0");
  let num = JSON.parse(localStorage.getItem("imcart"));
  localStorage.setItem("imPeriod", selectPeriod);
  const totalDue = localStorage.getItem("impay");
  let property = JSON.parse(localStorage.getItem("improperty"));
  let [paymentType, setPaymentType] = useState("");
  return (
    <div className="one-off-payment-container">
      <p className="payment-top-para hidden md:block">
        Make Payment for  {num.length} plots at
        <span> {property.name}</span>
      </p>

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
          <Select
            variant="filled"
            name="payment"
            value="installment"
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

        <div className="payment-dropdown-div" style={{ marginTop: "43px" }}>
          <label
            htmlFor="payment-plan"
            style={{ marginBottom: "31px", fontWeight: "700" }}
          >
            Amount (N)
          </label>
          <p>{totalDue * 0.4}</p>
        </div>
        <p className="initial-deposit-para" style={{ marginTop: "12px" }}>
          Pay 40% ({totalDue * 0.4}) initial deposit and pay the balance later
        </p>

        <div
          className="installment-duration-container"
          style={{ marginTop: "51px" }}
        >
          <p>Choose Next Installmental Payment Duration</p>

          <div className="period-price-wrapper" style={{ marginTop: "21px" }}>
            <div
              className="period-price-radio-container"
              value="1"
              onClick={(e) => setSelectPeriod("3-months")}
            >
              <img
                src={
                  selectPeriod === "3-months"
                    ? "./images/radio2.png"
                    : "./images/radio1.png"
                }
                alt="radio"
              ></img>
            </div>
            <div className="installment-period">
              <p>3 Months</p>
              <p>N{Math.floor(totalDue * 0.6 * 1.1)}</p>
              <p>10% Interest</p>
            </div>
            <div className="installment-period">
              <p>Payment of </p>
              <p>N{Math.floor(totalDue * 0.6 * 1.1 / 3)} Monthly</p>
            </div>

          </div>

          <div className="period-price-wrapper" style={{ marginTop: "21px" }}>
            <div
              className="period-price-radio-container"
              value="2"
              onClick={(e) => setSelectPeriod("6-months")}
            >
              <img
                src={
                  selectPeriod === "6-months"
                    ? "./images/radio2.png"
                    : "./images/radio1.png"
                }
                alt="radio"
              ></img>
            </div>
            <div className="installment-period">
              <p>6 Months</p>
              <p>N{Math.floor(totalDue * 0.6 * 1.3)}</p>
              <p>30% Interest</p>
            </div>
            <div className="installment-period">
              <p>Payment of </p>
              <p> N{Math.floor(totalDue * 0.6 * 1.3 / 6)} Monthly</p>
            </div>
            {/* <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div> */}
          </div>
        </div>

        <div className="payment-dropdown-div" style={{ marginTop: "47px" }}>
          <label
            htmlFor="payment-plan"
            style={{ marginBottom: "31px", fontWeight: "700" }}
          >
            Payment Method
          </label>
          <select name="payment" value={paymentType} onChange={(e) => setPaymentType(e.target.value)} >
            <option className="option" value="">---</option>
            <option className="option" value="flutter">
              FlutterWave
            </option>
            <option className="option" value="bank-deposit">Bank Deposit</option>
          </select>
        </div>

        <div
          className="pay-now-button-holder"
          style={{ marginBlock: "50px 12px" }}
        >
          <button value={paymentType} onClick={(e) => changePaymentMode(e)}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
