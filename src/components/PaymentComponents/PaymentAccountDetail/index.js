import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from "react-router-dom";

export function PaymentAccountDetail(props) {
  let [flutter, setFlutter] = useState(props.payment);
  let [amnt, setAmnt] = useState(props.amnt);
  let navigate = useNavigate();
  let routing = () => {
    navigate("/payment")
    console.log("routing")
    window.location.reload();
  }
  const config = {
    public_key: 'FLWPUBK_TEST-21cc0116b2bd6553bc6a06119aa2c3c2-X',
    tx_ref: Date.now(),
    amount: 450000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'meedoo4life@gmail.com',
      phone_number: '08066981697',
      name: 'nuhu ahmed',
    },
    customizations: {
      title: 'Payment for plots on IM-Properties',
      description: 'Payment for items in cart for IM-Properties',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
    redirect_url: "http://localhost:3000/dashboard"
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (<>
    {flutter ? <div>
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => { routing() },
          });
        }}
      >
        Click to Pay with FlutterWave
      </button>
    </div> :
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
          <p className="font-fam text-[15px] md:text-[20px] font-bold text-center">
            Make Bank Tranfer or Deposit
          </p>

          <div className="account-blue mt-[64px] py-[31px] px-[16px] max-w-[600px]">
            <p className="font-fam text-[15px] font-bold">BANK DETAILS</p>
            <section
              className="grid grid-cols-2 gap-y-[30px] gap-x-[10px] mt-[10px]"
              style={{ gridTemplateColumns: "2fr 5fr" }}
            >
              <p className="font-fam text-[15px] font-medium text-light">Bank:</p>
              <p className="font-fam text-[15px] font-medium ">
                United Bank For Africa (UBA)
              </p>
              <p className="font-fam text-[15px] font-medium text-light">
                Account Number:
              </p>
              <p className="font-fam text-[15px] font-medium">2034095253</p>
              <p className="font-fam text-[15px] font-medium text-light">
                Account Number:
              </p>
              <p className="font-fam text-[15px] font-medium">
                IM Intercontinental Limited
              </p>
            </section>
            <p className="font-fam text-[15px] mt-[22px] text-light">
              Please pay
              <span className="font-bold" style={{ color: "black" }}>
                N674,666.66
              </span>
              to above bank details
            </p>
            <p className="font-fam text-[15px] mt-[17px] text-light">
              Once you have made payment; please send proof of payment, name and
              your IM Property username to admin via 08023981234, 09890912834 or
              upload it here
            </p>
            <section className="md:flex hidden gap-y-[10px] flex-col md:flex-row gap-x-[10px] mt-[40px]">
              <input
                type="file"
                className="font-fam text-[15px] text-light bg-white p-[7px] rounded-[5px] w-[50%] m-auto"
              ></input>
              <button className="text-[15px] bg-backblue text-white py-[13px] px-[35px] rounded-[5px]  m-auto">
                Submit
              </button>
            </section>
            <p className="text-[15px] font-medium mt-[15px] md:mt-[7px] font-fam text-light md:text-left text-center cursor-pointer">
              Upload proof of payment
            </p>
            <p className="md:hidden text-[15px] font-medium mt-[10px] font-fam text-light cursor-pointer text-center">
              Upload
            </p>
            <div className="md:hidden text-center">
              <button className="text-[15px] bg-backblue text-white mt-[20px] py-[13px] px-[35px] rounded-[5px]  m-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  </>
  );
}
