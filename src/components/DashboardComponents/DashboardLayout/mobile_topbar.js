import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardSideNav } from "../../DashboardSideNav";
import { UserProfileModal } from "../UserProfileModal";

export default function MobileTop(props, {
    profilePicture = "/images/profilePicture.png",
    children,
}) {
    const sideNavList = [
        {
            page: "Dashboard",
            link: "/dashboard/home",
            img: "/images/dashboard.svg",
        },
        {
            page: "Buy Property",
            link: "/dashboard/buy-property",
            img: "/images/buy-property.svg",
        },
        {
            page: "My Property",
            link: "/dashboard/my-property",
            img: "/images/my-property.svg",
        },
        {
            page: "Bookings",
            link: "/dashboard/bookings",
            img: "/images/bookings.svg",
        },
        { page: "Payment", link: "/dashboard/payment", img: "/images/payment.svg" },
        {
            page: "Transactions",
            link: "/dashboard/transactions",
            img: "/images/transaction.svg",
        },
        { page: "Wallet", link: "/dashboard/wallet", img: "/images/wallet.svg" },
        { page: "Network", link: "/dashboard/network", img: "/images/network.svg" },
        { page: "Profile", link: "/dashboard/profile", img: "/images/profile.svg" },
        { page: "Support", link: "/dashboard/support", img: "/images/support.svg" },
        {
            page: "Settings",
            link: "/dashboard/settings",
            img: "/images/settings.svg",
        },
        { page: "Logout", link: "/dashboard/logout", img: "/images/logout.svg" },
    ];
    const location = useLocation().pathname;

    let position;
    let img;

    sideNavList.forEach((element) => {
        if (element.link.includes(location)) {
            position = element.page;
            img = element.img;
        }
    });

    const [show, setShow] = useState("none");
    let hide = () => {
        if (show == "none") {
            setShow("block")
        } else {
            setShow("none")
        }
    }

    return (<>
        <div style={{ backgroundColor: "#fff" }}>

            <div className="">
                <div className="" style={{ overflowY: "auto" }} >
                    <DashboardSideNav
                        display={show}
                        click={() => hide()}
                    />
                </div>

                <div className="flex items-center gap-x-[10px] ml-[18px]">
                    <img src={img} alt="profile"></img>
                    <p className="font-bold text-[18px]">{position}</p>
                </div>

                <div className="mt-[5px]">{props.table}</div>
            </div>

        </div>
    </>
    );
}
