import React from "react";
import { NavigationBar } from "../../NavigationBar";

export function PaymentAccountDetail() {
  return (
    <div className="bg-white">
      <NavigationBar />
      <div className="one-off-payment-container">
        <p className="payment-top-para hidden md:block">
          Make Payment for 4 plots at
          <span>CAMPUS GARDEN ESTATE PORT HARCOURT</span>
        </p>
        <div className="block md:hidden">
          <p className="font-fam font-bold text-[15px]">
            Campus Garden Estate Port Harcourt
          </p>
          <p className="payment-top-para">Make Payment for 4 plots at</p>
        </div>
        <div className="one-off-payment-box"></div>
      </div>
    </div>
  );
}
