import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
        let url = "https://alert-battledress-boa.cyclic.app/api/booking/getuserbooking";
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
            })
    };

    let cancelBooking = (e) => {
        let url = "https://alert-battledress-boa.cyclic.app/api/booking/cancelbooking/" + e;
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
        {booking?.length === 0 ? <div className="mx-2   ">No Booking Yet</div> : booking?.map((e, i) => {
            console.log(e)
            let year = new Date(e.date).getFullYear();
            let day = new Date(e.date).getDate();
            let month = new Date(e.date).getMonth() + 1;
            let date = year + "/" + month + "/" + day;
            let id = e._id.substring(e._id.length, e._id.length - 4)

            if (i % 2 === 0) {
                background = { backgroundColor: '#F5F5F5' }
            } else {
                background = { backgroundColor: '#fff' }
            }
            return (<>
                <ul className="inspection-item-ul mx-2" style={background}>
                    <li><p style={{ color: '#6C6C6C' }}>IM {id}</p></li>
                    <li><p>{e.Property}</p></li>
                    <li><p>{e.location}</p></li>
                    <li><p>{date} {"  "} {e.time}</p></li>
                    <li><p>{e.status}</p></li>
                    <li><div className="reschedule-cancel-wrapper"><p>Reschedule</p> <p onClick={() => cancelBooking(e._id)}>Cancel</p></div></li>
                </ul>
            </>
            )
        })}
    </>
    )
}