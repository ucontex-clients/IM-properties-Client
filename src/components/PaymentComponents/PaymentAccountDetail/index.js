import React, { useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from "react-router-dom";
import { getSuggestedQuery } from "@testing-library/react";
const axios = require("axios")

export function PaymentAccountDetail(props) {
  let [flutter, setFlutter] = useState(props.payment);
  let [amnt, setAmnt] = useState(props.amnt);
  let mode = props.paymentMode;
  let [user, setUser] = useState({});
  let navigate = useNavigate();
  let data = props.data1;
  let period = localStorage.getItem("imPeriod");
  let num = JSON.parse(localStorage.getItem("imcart"));
  let [transaction, setTransaction] = useState("");
  let totalPrice = localStorage.getItem("imPay");

  useEffect(() => {
    getUser();
  }, [])

  let getUser = () => {
    let url = "https://nice-tan-harp-seal-wrap.cyclic.app/api/user/single";
    let token = localStorage.getItem("imToken");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      method: "GET"
    })
      .then((e) => e.json())
      .then(res => {
        setUser(res)
        console.log(res);
      })
  }

  let routing = () => {
    navigate("/payment")
    console.log("routing")
    window.location.reload();
  }
  const config = {
    public_key: 'FLWPUBK_TEST-21cc0116b2bd6553bc6a06119aa2c3c2-X',
    tx_ref: Date.now(),
    amount: 200,
    currency: 'NGN',
    payment_options: 'card, mobilemoney, ussd, bank-transfer, account',
    customer: {
      email: user.email,
      phone_number: user?.phone1,
      name: user.username
    },
    customizations: {
      title: `Payment for ${num.length} plots on ${data.property?.name.toUpperCase()} under IM-Properties`,
      description: 'Payment for items in cart for IM-Properties',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
    redirect_url: "https://nice-tan-harp-seal-wrap.cyclic.app/api/payment/confirm"
  };

  const handleFlutterPayment = useFlutterwave(config);
  const makePay = async () => {
    const response = handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => { routing() },
    });
    setTransaction(response.message);
    if(response.status === 200){
      let url = "https://nice-tan-harp-seal-wrap.cyclic.app/api/payment/addPayTransaction"
      let token = localStorage.getItem("imToken");
      let dataa = {
        user_id: user._id,
        mode,
        totalPrice,
        plots: num,
        duration: period,
        property_id: data.property?._id,
        transaction_id: transaction
      };
      console.log(dataa);
      const response = await axios.post(url, dataa, {
        headers: {
          'Authorization': `Basic ${token}`
        }
      });
      if (response.status === 200) {
        navigate("/dashboard/home");
        localStorage.removeItem("imcart");
        localStorage.removeItem("impay");
        localStorage.removeItem("imData");
        localStorage.removeItem("imPeriod");
      } else console.log(response.error.message);
    }else console.log(response.message);
    
  }

  return (<>
    {flutter ? <div>
      <button
        onClick={makePay}
      >
        Click to Pay with FlutterWave
      </button>
    </div> :
      <div className="one-off-payment-container">
        <p className="payment-top-para hidden md:block">
          Make Payment for {num?.length} plots at
          <span>{data.property.name.toUpperCase()}</span>
        </p>
        <div className="block px-[10px] md:hidden">
          <p className="font-fam font-bold text-[15px]">
            {data.property?.name.toUpperCase()}
          </p>
          <p className="text-[15px] font-fam text-light mt-[11px]">
            Make Payment for {num?.length} plots at
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
                {data.total}
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
