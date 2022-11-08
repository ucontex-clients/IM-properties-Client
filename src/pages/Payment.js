import React, { useState } from "react";
import {
  EasyBuy,
  Installment,
  NavigationBar,
  OneOffPayment,
  PaymentAccountDetail,
} from "../components";

export default function Payment() {
  const [paymentMode, setPaymentMode] = useState("one-off");

  const changePaymentMode = (e) => {
    setPaymentMode(e.target.value);
  };

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
        {paymentMode === "easy-buy" && (
          <EasyBuy changePaymentMode={changePaymentMode} />
        )}
        {paymentMode === "pay" && <PaymentAccountDetail />}
      </div>
    </div>
  );
}
