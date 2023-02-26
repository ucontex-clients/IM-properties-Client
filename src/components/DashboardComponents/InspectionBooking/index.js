import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function InspectionBooking({ takeColor }) {
    let [booking, setBooking] = useState([]);

    useEffect(() => {
        getBooking();
    }, [])

    let background;

    const useBackground = () => {
        if (takeColor % 2 === 0) {
            background = { backgroundColor: '#F5F5F5' }
        } else {
            background = { backgroundColor: '#fff' }
        }
    }
    useBackground()

    let getBooking = () => {
        let url = "https://im-property.herokuapp.com/api/booking/getuserbooking";
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
                setBooking(res)
                console.log(booking);
            })
    };

    let cancelBooking = (e) => {
        let url = "https://im-property.herokuapp.com/api/booking/cancelbooking/" + e;
        let token = localStorage.getItem("imToken");
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "DELETE"
        })
            .then((e) => e.json())
            .then(res => {
                console.log(res)
            })

        getBooking();
    };

    return (<>
        <div className="full_ah bg-white px-[33px]">
            <table className="payment-table">
                <thead>
                    <th>Bookin ID</th>
                    <th>Property</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {booking?.length === 0 ? <div className="mx-2 text-center">No Booking Yet</div> : booking?.map((e, i) => {
                        console.log(e)
                        let year = new Date(e.Date).getFullYear();
                        let day = new Date(e.Date).getDate();
                        let month = new Date(e.Date).getMonth() + 1;
                        let date = year + "/" + month + "/" + day;
                        let id = e.ID.substring(e.ID.length, e.ID.length - 4)
                        let status = e.Status.toUpperCase();
                        let textColor;
                        let hideBtn;
                        let showText;
                        if (e.Status === "completed") {
                            textColor = "green_ah";
                            hideBtn = "none";
                            showText = "inline";
                        } else {
                            textColor = "text-mine";
                            hideBtn = "block";
                            showText = "block";
                        }

                        if (i % 2 === 0) {
                            background = { backgroundColor: '#F5F5F5' }
                        } else {
                            background = { backgroundColor: '#fff' }
                        }
                            return <>
                                <tr style={background}>
                                    <td><p style={{ color: '#6C6C6C' }}>IM {id}</p></td>
                                    <td>{e.Property}</td>
                                    <td>{e.Location}</td>
                                    <td>{date} {" "} {e.time}</td>
                                    <td className={textColor}>{status}</td>
                                    <td className="flex justify-center items-center px-[13px]">
                                        <Button style={{ display: showText, cursor: "pointer"}} className="px-[5px] py-[4px] mr-[5px]">Reschedule</Button>
                                        <Button style={{ display: hideBtn }} className="px-[5px] py-[4px] ml-[5px]" onClick={() => cancelBooking(e.ID)}>
                                            Cancel
                                        </Button>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </div>
            
        {/*booking?.length === 0 ? <div className="mx-2   ">No Booking Yet</div> : booking?.map((e, i) => {
            console.log(e)
            let year = new Date(e.Date).getFullYear();
            let day = new Date(e.Date).getDate();
            let month = new Date(e.Date).getMonth() + 1;
            let date = year + "/" + month + "/" + day;
            let id = e.ID.substring(e.ID.length, e.ID.length - 4)

            if (i % 2 === 0) {
                background = { backgroundColor: '#F5F5F5' }
            } else {
                background = { backgroundColor: '#fff' }
            }
            return (<>
                <ul className="inspection-item-ul mx-2" style={background}>
                    <li><p style={{ color: '#6C6C6C' }}>IM {id}</p></li>
                    <li><p>{e.Property}</p></li>
                    <li><p>{e.Location}</p></li>
                    <li><p>{date} {"  "} {e.time}</p></li>
                    <li><p>{e.Status}</p></li>
                    <li><div className="reschedule-cancel-wrapper"><p>Reschedule</p> <p onClick={() => cancelBooking(e.ID)}>Cancel</p></div></li>
                </ul>
            </>
            )
        })}*/}
            <div className="mobile_ah bg-white px-[33px]">
                <table className="payment-table">
                    {booking?.length === 0 ? <div className="mx-2 text-center">No Booking Yet</div> : booking?.map((e, i) => {
                        console.log(e)
                        let year = new Date(e.Date).getFullYear();
                        let day = new Date(e.Date).getDate();
                        let month = new Date(e.Date).getMonth() + 1;
                        let date = year + "/" + month + "/" + day;
                        let id = e.ID.substring(e.ID.length, e.ID.length - 4)
                        let status = e.Status.toUpperCase();
                        let textColor;
                        let hideBtn;
                        let showText;
                        if (e.Status === "completed") {
                            textColor = "green_ah";
                            hideBtn = "none";
                            showText = "inline";
                        } else {
                            textColor = "text-mine";
                            hideBtn = "block";
                            showText = "block";
                        }

                        if (i % 2 === 0) {
                            background = { backgroundColor: '#F5F5F5' }
                        } else {
                            background = { backgroundColor: '#fff' }
                        }
                        
                            return <>
                                <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px", background: "whitesmoke" }}>
                                    <thead style={{ display: "flex", flexDirection: "column", marginTop: "-5px" }}>
                                        <th>Booking ID</th>
                                        <th>Property</th>
                                        <th>Lcation</th>
                                        <th>Date/Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        <tr style={{ display: "flex", flexDirection: "column" }}>
                                            <td><p style={{ color: '#6C6C6C' }}>IM {id}</p></td>
                                            <td>{e.Property}</td>
                                            <td>{e.Location}</td>
                                            <td>{date} {" "} {e.time}</td>
                                            <td className={textColor}>{status}</td>
                                            <td className="flex items-center">
                                                <Button style={{ display: showText, cursor: "pointer" }} className="mb-[2.5px]">Reschedule</Button>
                                                <Button style={{ display: hideBtn,}} className="mt-[2.5px]" onClick={() => cancelBooking(e.ID)}>
                                                    Cancel
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </div>
                            </>
                        })
                    }
                </table>
            </div>
        </>
    )
}