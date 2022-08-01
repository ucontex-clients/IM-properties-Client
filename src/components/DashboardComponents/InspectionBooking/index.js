import react from "react"

export default function InspectionBooking({takeColor}){

    let background

    const useBackground = () => {
        if (takeColor%2 ==0){
            background = {backgroundColor: '#F5F5F5'}
        } else{
            background = {backgroundColor: '#fff'}
        }
    }

    useBackground()


    return(
    <ul className="inspection-item-ul" style={background}>
        <li><p style={{color: '#6C6C6C'}}>IM 0023</p></li>
        <li><p>Campus Gardens Estate</p></li>
        <li><p>Port Harcourt</p></li>
        <li><p>15/08/2022 10am</p></li>
        <li><p>Pending</p></li>
        <li><div className="reschedule-cancel-wrapper"><p>Reschedule</p> <p>Cancel</p></div></li>
   </ul>
    )
}