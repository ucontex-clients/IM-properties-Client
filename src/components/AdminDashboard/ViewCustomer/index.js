import React, { useState } from "react"


export function ViewCustomer(){

    const propertyStyle = {
        background: 'rgba(255, 18, 18, 0.2)',
        color: '#F80F0F'
    }

const [userInfo, setUserInfo] = useState('property')



    return(
        <div className="admin-dashboard-right" style={{backgroundColor:'#F5F5F5'}}>
            <div className="dashboard-input-wrapper" style={{paddingBlock: '55px 29px'}}>
                <p>Customer</p>
                <div className="add-customer-button">
                    <div><img src="./images/customerIcon.png"></img></div>
                    <p>Add Customer</p>
                </div>
            </div>

            <div className="view-customers-top">
                <div className="customer-view-top1">
                    <p style={{fontSize: '20px', marginBottom:'37px'}}>Profile</p>
                    <div>
                        <div className="view-photo-wrapper"><img src='./images/eachUser.png'></img></div>
                        <p id="john" style={{color:'black'}}>John Doe</p>
                    </div>
                    <div>
                        <p style={{textAlign: 'center', marginBottom:'10px'}}>john123</p>
                        <p style={{textAlign: 'center', marginBottom:'10px'}}>IM-234098909</p>
                        <p style={{textAlign: 'center'}}>Johndoe@example.com</p>
                    </div>
                </div>
                <div>
                <table>
                            <tr>
                                <td style={{paddingTop: '0'}}>Gender</td>
                                <td style={{paddingTop: '0'}}>Male</td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>Jun - 20- 1978 </td>
                            </tr>
                            <tr>
                                <td>Phone 1</td>
                                <td>08065431234  </td>
                            </tr>
                            <tr>
                                <td>Phone2</td>
                                <td>08056781232</td>
                            </tr>
                            <tr>
                                <td>Occupation</td>
                                <td>Trading</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>Nigeria</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>Rivers</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>Port Harcourt</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>22 Kime Street</td>
                            </tr>
                        </table>
                </div>
                <div>
                    <div className="view-photo-wrapper" style={{marginBottom:'32px'}}><img src='./images/eachUser.png'></img></div>
                    <div className="id-holder"><img src='./images/id.png'></img></div>
                    <p style={{fontSize:'20px', fontWeight:600, color:'black'}}>Next of Kin</p>
                    <table>
                        <tr>
                            <td>Full Name</td>
                            <td>Esther John</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>09087982345</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>22 kime street</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className="admin-user-dashboard-wrapper">
                <ul className="admin-user-dashboard">
                    <li onClick={() => setUserInfo('property')}>
                        <p style={userInfo=='property' ? propertyStyle: {}}>Property</p>
                    </li>
                    <li onClick={() => setUserInfo('bookings')}>
                        <p style={userInfo=='bookings' ? propertyStyle: {}}>Bookings</p>
                    </li>
                    <li onClick={() => setUserInfo('transaction')}>
                        <p style={userInfo=='transaction' ? propertyStyle: {}}>Transaction</p>
                    </li>
                </ul>
                <ul className="property-headers">
                    <li><p>Name</p></li>
                    <li><p>Property</p></li>
                    <li><p>Code</p></li>
                    <li><p>Cost</p></li>
                    <li><p>Date <br/> Created</p></li>
                    <li><p>Action</p></li>
                </ul>
                <ul  className="entries-list" style={{paddingInline:'0px'}}>
                    <li className="property-writeup">
                        <div><img src="./images/eachProperty.png"></img></div>
                        <div className="property-writeup-para-container">
                            <p style={{marginBottom:'10px'}}>CAMPUS GARDEN ESTATE</p>
                            <p style={{marginBottom:'10px'}}>1911.56SQ.M 141.2m x 71.2m </p>
                            <p style={{color:'#6C6C6C'}}>CGE-003, CGE-004, CGE-005</p>
                        </div>
                    </li>
                    <li><p>N1,045,090</p></li>
                    <li style={{transform: 'translateX(-22px)'}}><p>Jun 03, <br/>2022</p></li>
                    <li className="entry" id="edit-delete-action">
                        <div><img src="./images/editAction.png"></img></div>
                        <div><img src="./images/deleteAction.png"></img></div>
                    </li>
                </ul>
            </div>

            <div className="view-user-dashboard-wrapper">
                    <div><img src="./images/eachProperty.png"></img></div>
                    <div className="property-writeup-para-container">
                        <p style={{marginBottom:'10px', fontWeight:700}}>CAMPUS GARDEN ESTATE</p>
                        <p style={{marginBottom:'10px'}}>1911.56SQ.M 141.2m x 71.2m </p>
                        <p style={{color:'#6C6C6C'}}>IM 0023</p>
                    </div>
            </div>
        </div>
    )
}