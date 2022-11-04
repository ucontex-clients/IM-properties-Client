import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

export function Installment({ changePaymentMode }) {
  const [selectPeriod, setSelectPeriod] = useState("0");

  return (
    <div className="one-off-payment-container">
      <p className="payment-top-para hidden md:block">
        Make Payment for 4 plots at
        <span>CAMPUS GARDEN ESTATE PORT HARCOURT</span>
      </p>
      <div className="block px-[10px] md:hidden">
        <p className="font-fam font-bold text-[15px]">
          Campus Garden Estate Port Harcourt
        </p>
        <p className="text-[15px] font-fam text-light mt-[11px]">
          Make Payment for 4 plots at
        </p>
      </div>
      <div className="one-off-payment-box">
        <div className="make-payment-wrapper">
          <h3>Make Payment</h3>
        </div>
        <p className="payment-total-para">Total</p>
        <p className="payment-amount-para">N1,840,000</p>
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
            <option className="option" value="easy-buy">
              Easy-buy plan
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
          <p>736,600</p>
        </div>
        <p className="initial-deposit-para" style={{ marginTop: "12px" }}>
          Pay 40% (N736,600) initial deposite and pay the balance later
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
              onClick={(e) => setSelectPeriod("1")}
            >
              <img
                src={
                  selectPeriod === "1"
                    ? "./images/radio2.png"
                    : "./images/radio1.png"
                }
                alt="radio"
              ></img>
            </div>
            <div className="installment-period">
              <p>3 - 6 Months</p>
              <p>N1,214,400</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
          </div>

          <div className="period-price-wrapper" style={{ marginTop: "21px" }}>
            <div
              className="period-price-radio-container"
              value="2"
              onClick={(e) => setSelectPeriod("2")}
            >
              <img
                src={
                  selectPeriod === "2"
                    ? "./images/radio2.png"
                    : "./images/radio1.png"
                }
                alt="radio"
              ></img>
            </div>
            <div className="installment-period">
              <p>7 - 12 Months</p>
              <p>N1,446,120</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
            <div className="installment-period">
              <p>12 Oct 2022</p>
              <p>N404,666.66</p>
            </div>
          </div>
        </div>

        <div className="payment-dropdown-div" style={{ marginTop: "47px" }}>
          <label
            htmlFor="payment-plan"
            style={{ marginBottom: "31px", fontWeight: "700" }}
          >
            Payment Method
          </label>
          <select>
            <option className="option">
              Paystack (card, USSD, Bank Transfer)
            </option>
            <option className="option">My Wallet</option>
            <option className="option">Bank Deposit</option>
          </select>
        </div>

        <div
          className="pay-now-button-holder"
          style={{ marginBlock: "50px 12px" }}
        >
          <button value="pay" onClick={(e) => changePaymentMode(e)}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
