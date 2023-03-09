import React, { useEffect, useState } from "react";
import {
  Installment,
  NavigationBar,
  OneOffPayment,
  PaymentAccountDetail,
} from "../components";

export default function Payment() {
  const [paymentMode, setPaymentMode] = useState("outright");
  const [paymentMode1, setPaymentMode1] = useState("");
  const [amount, setAmount] = useState();

  const changePaymentMode = (e) => {
    setPaymentMode(e.target.value);
    setPaymentMode1(e.target.value);
  };
  let data = JSON.parse(localStorage.getItem("imData"));
  let amountDue;
  useEffect(() => {
    if (paymentMode === "installment") {
      amountDue = +localStorage.getItem("impay") * 0.4
      setAmount(amountDue)
    } else if (paymentMode === "outright") {
      amountDue = +localStorage.getItem("impay")
      setAmount(amountDue)
    };
  }, [amount, amountDue, paymentMode, paymentMode1])

  return (
    <div className="bg-white">
      <NavigationBar page="AboutUs" />
      <div className="payment-main-section">
        {paymentMode === "outright" && (
          <OneOffPayment changePaymentMode={changePaymentMode} />
        )}
        {paymentMode === "installment" && (
          <Installment changePaymentMode={changePaymentMode} />
        )}
        {paymentMode1 === "bank-deposit" && <PaymentAccountDetail payment={false} amnt={amount} data1={data}/>}
        {paymentMode1 === "flutter" && <PaymentAccountDetail payment={true} paymentMode={paymentMode} amnt={amount} data1={data} />}
        {/* {paymentMode1 === "" && window.reload()} */}
      </div>
    </div>
  );
}
