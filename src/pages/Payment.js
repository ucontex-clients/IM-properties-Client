import React, { useEffect, useState } from "react";
import {
  Installment,
  NavigationBar,
  OneOffPayment,
  PaymentAccountDetail,
} from "../components";

export default function Payment() {
  const [paymentMode, setPaymentMode] = useState("one-off");
  const [paymentMode1, setPaymentMode1] = useState("");
  const [amount, setAmount] = useState();

  const changePaymentMode = (e) => {
    setPaymentMode(e.target.value);
    setPaymentMode1(e.target.value);
  };
  let amountDue;
  useEffect(() => {
    if (paymentMode === "installment") {
      amountDue = +localStorage.getItem("impay") * 0.4
      setAmount(amountDue)
    } else if (paymentMode === "one-off") {
      amountDue = +localStorage.getItem("impay")
      setAmount(amountDue)
    };
  }, [amount, amountDue, paymentMode, paymentMode1])

  return (
    <div className="bg-white">
      <NavigationBar page="AboutUs" />
      <div className="payment-main-section">
        {paymentMode === "one-off" && (
          <OneOffPayment changePaymentMode={changePaymentMode} />
        )}
        {paymentMode === "installment" && (
          <Installment changePaymentMode={changePaymentMode} />
        )}
        {paymentMode1 === "bank-deposit" && <PaymentAccountDetail payment={false} amnt={amount} />}
        {paymentMode1 === "flutter" && <PaymentAccountDetail payment={true} amnt={amount} />}
        {/* {paymentMode1 === "" && window.reload()} */}
      </div>
    </div>
  );
}
