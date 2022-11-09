import { Avatar, Flex, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export function DashboardSideNav(){


    const sideNavList = [
        {page:"Dashboard",link:"/dashboard/home"},
        {page:"Buy Property",link:"/dashboard/buy-property"},
        {page:"My Property",link:"/dashboard/my-property"},
        {page:"Bookings",link:"/dashboard/bookings"},
        {page:"Payment",link:"/dashboard/payment"},
        {page:"Transactions",link:"/dashboard/transactions"},
        {page:"Wallet",link:"/dashboard/wallet"},
        {page:"Network",link:"/dashboard/network"},
        {page:"Profile",link:"/dashboard/profile"},
        {page:"Support",link:"/dashboard/support"},
        {page:"Settings",link:"/dashboard/settings"},
        {page:"Logout",link:"/dashboard/logout"}

    ]
  



    return(
        <div>
            <Flex marginTop='124px' flexDir='column' align='center'>
                <Avatar src="/images/buyer.png" />
                <Text className="font-fam mt-[19px] font-bold text-[15px]">Elvis</Text>
                <Text className="font-fam mt-[9px] font-bold text-[15px]">IM1234509</Text>
                
            </Flex>
        <ul className="side-nav-ul">
                {
                    sideNavList.map((page,idx)=>{
                        return <li key={idx} style={{paddingInline:'16px'}}>
                       <Link to={page.link} style={{width:'fit-content'}}>
                        <div className="list-item-wrapper">
                            <div><img src="/images/dashboard.png" alt="dashboard icon"></img></div>
                            <p>{page.page}</p>
                        </div>
                            </Link>
                    </li>
                    })
                }
 
        
        </ul>
        </div>
    )
}