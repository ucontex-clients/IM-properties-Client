import React from "react"
import { EachFAQ, NavigationBar } from "../components"

export default function FAQ(){

const ourFAQ = [
    {
        question: "Do you allocate once someone buys?",
        ans: "Yes we give instant allocation in office and online: but for physical allocation onsite; we do this ceremonially. We fix a date and allocate all the investors in a particular estate or phase the same day."
    },
    {
        question: "If I buy and I don't want to start building yet, will your company allow me?",
        ans: "Yes we will, but we will also advice you at least fence your plot and avoid leaving it bushy."
    },
    {
        question: "Do you have a specific pattern of building design for your estate?",
        ans: "For some estates, we have areas mapped out for prototype buildings"
    },
    {
        question: "Can you take me on inspection outside Saturday?",
        ans: "Yes we can. Our site inspection days are Tuesdays to Saturday. 10am and 1pm"
    },
    {
        question: "Do you ave any property with C of O?",
        ans: "Some for now. We have COD (Certificate of Deposit) for others which is the final step to getting a C of O for all our estates."
    },
    {
        question: "How ccan i start? What are the procedures?",
        ans: "For online purchase, click the buy button and follow thorugh. For offline purchase; Payment to any of our accounts, send proof to our customers care line and we will send a receipt to your mail and proceed with documentation. \n You can as well visit our onsite office."
    },
    {
        question: "If i don't meet up with my payment plan, what will happen?",
        ans: "We will move you to the next payment plan if notified with genuine reasons. However, we don't pray for such."
    }
]

const allFAQ = ourFAQ.map((FAQ, index) => {
    return <EachFAQ key={index} question={FAQ.question} ans={FAQ.ans} />
})


    return(
        <div>
            <NavigationBar page='FAQ' />
            <div className="about-image" style={{marginTop:'79px'}}>
                <div className="who-we-are"><p>Frequently Asked Questions</p></div>
                <div><img src="./images/FAQIm.png" alt='FAQ cover'></img></div>
            </div>
            <div className="FAQ-bottom-wrapper">
                {allFAQ}
            </div>
        </div>
    )
}