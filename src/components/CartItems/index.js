import React from "react"

export function CartItems({number}){
    return (
       <ul className="cart-item-ul">
            <li className="number-plot">
                <p>{number}</p>
                <p>490.89SQ.M 40.6m x 20.3m CG-003</p>
            </li>
            <li className="amount-remove">
                <p>N560,000</p>
                <p>Remove</p>
            </li>
       </ul>
    )
}