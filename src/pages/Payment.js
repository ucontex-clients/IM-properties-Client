import React from "react"
import { NavigationBar, OneOffPayment } from "../components"

export default function Payment(){
    return(
        <div>
            <NavigationBar page='AboutUs'/>
            <div className="payment-main-section">
                <OneOffPayment />
            </div>
        </div>
    )
}