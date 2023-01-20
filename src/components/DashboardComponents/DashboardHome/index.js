import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DashboardElement } from "../../";

export function DashboardHome() {

  let [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, []);

  let getUser = () => {
    let url = "https://alert-battledress-boa.cyclic.app/api/user/single";
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
      })
  };
  return (<>
    <div className="full_ah dashboard-main-right bg-white">
      <div className="dashboard-layout-wrapper mt-[0px]">
        <DashboardElement
          logoBackground="rgba(61, 178, 255, 0.2)"
          logoURL="/images/houseLogo.png"
          number="0"
          text="My Property"
        />
        <DashboardElement
          logoBackground="rgba(255, 152, 0, 0.2)"
          logoURL="/images/accountBalance.png"
          number="0"
          text="Account Balance"
        />
        <DashboardElement
          logoBackground="rgba(0, 0, 0, 0.25)"
          logoURL="/images/Handshake.png"
          number="0"
          text="My Referral"
        />
        <div className="dashboard-central">
          <p>Dear {user.firstname} {user.lastname}, we have properties available for you</p>
          <div>
            <button>View Properties</button>
          </div>
          <p>No property has been purchased yet</p>
        </div>
      </div>
    </div>

    <div className="mobile_ah container  bg-white">
      <div className="p-[10px]">
        <div className="mobile_dashboard_ah">
          <DashboardElement
            logoBackground="rgba(61, 178, 255, 0.2)"
            logoURL="/images/houseLogo.png"
            number="5"
            text="Properties"
          />
          <DashboardElement
            logoBackground="rgba(255, 152, 0, 0.2)"
            logoURL="/images/accountBalance.png"
            number="#15,000"
            text="Earnings"
          />
          <DashboardElement
            logoBackground="rgba(0, 0, 0, 0.25)"
            logoURL="/images/Handshake.png"
            number="5"
            text="Network"
          />
        </div>
        <br />
        <div className="dashboard-central">
          <p>Dear {user.firstname} {user.lastname}, we have properties available for you</p>
          <div>
            <button>View Properties</button>
          </div>
          <p>No property has been purchased yet</p>
        </div>
      </div>
    </div>
  </>
  );
}
