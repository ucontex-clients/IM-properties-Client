import { Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export function DashboardSideNav(){

    const sideNavList = [
        {page:"dashboard",link:"/dashboard/home"},
        {page:"Buy Property",link:"/dashboard/buy-property"},
        {page:"My Property",link:"/dashboard/my-property"},
        {page:"Bookings",link:"/dashboard/bookings"},
        {page:"Payment",link:"/dashboard/payment"},
        {page:"Transactions",link:"/dashboard/transactions"},
        {page:"Wallet",link:"/dashboard/wallet"},
        {page:"Network",link:"/dashboard/network"},
        {page:"Profile",link:"/dashboard/profile"},
        {page:"Support",link:"/dashboard/support"},
        {page:"Settings",link:"/dashboard/settings"}
        

    ]
  



    return(
        <ul className="side-nav-ul">

                {
                    sideNavList.map((page,idx)=>{
                        return <li key={idx}>
                       <Link to={page.link}>
                        <div className="list-item-wrapper">
                            <div><img src="/images/dashboard.png" alt="dashboard icon"></img></div>
                            <p>{page.page}</p>
                        </div>
                            </Link>
                    </li>
                    })
                }
 
        
        </ul>
    )
}