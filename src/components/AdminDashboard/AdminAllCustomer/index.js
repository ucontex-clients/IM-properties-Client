import React from "react"
import { EachCustomerDetail } from "../EachCustomerDetail"


export function AdminAllCustomer(){

    const allCustomerDetails = [...Array(7).keys()].map((item, index) => {
        return <EachCustomerDetail />
    })



    return(
        <div className="admin-dashboard-right" style={{backgroundColor:'#F5F5F5'}}>
            <div className="dashboard-input-wrapper" style={{paddingBlock: '55px 29px'}}>
                <p>Customer</p>
                <div className="add-customer-button">
                    <div><img src="./images/customerIcon.png"></img></div>
                    <p>Add Customer</p>
                </div>
            </div>

            <div className="customer-entries-white">
                <div className="entries-header">
                    <p>Show</p>
                    <p id="entries-number">10</p>
                    <p>Entries</p>
                </div>

                <ul className="entries-list" style={{marginTop: '45px', alignItems:'flex-end', paddingLeft:'50px'}}>
                    <li>
                        <p>Name</p>
                    </li>

                    <li>
                        <p>Username & ID</p>
                    </li>

                    <li>
                        <p>Email</p>
                    </li>

                    <li>
                        <p>Property</p>
                    </li>

                    <li>
                        <p>Date <br/> Created</p>
                    </li>

                    <li>
                        <p>Action</p>
                    </li>
                </ul>

                <div>
                    {allCustomerDetails}
                </div>

                <div className='customer-page-wrapper'>
                    <p>Showing 1 to 10 of 200 entries</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}