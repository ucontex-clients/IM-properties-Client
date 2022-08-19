import React, { useState } from "react"
import Calendar from "react-calendar"


export function ChooseDate(){
   
const [date, setDate] = useState(new Date())


 console.log(date)


    return (
        <div>
                <Calendar onChange={setDate} value={date} />
        </div>
    )
}