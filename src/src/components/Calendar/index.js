import React, { useState } from "react"
import Calendar from "react-calendar"


export function ChooseDate(){
   
const [date, setDate] = useState(new Date())



    return (
        <div>
                <Calendar onChange={setDate} value={date} />
        </div>
    )
}