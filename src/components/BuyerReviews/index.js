import React from "react"


export function BuyerReviews(){
    return(
        <div style={{paddingBlock: '25px'}} className='each-review-wrapper'>
            <div className="buyer-picture"><img src="./images/buyer.png" style={{width:'100px', height: '100px'}}></img></div>
            <div className="review-text-side">
                <p className="first">Savana Estate</p>
                <p className="second">12 JUNE 2022</p>
                <p className="third">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
            </div>
        </div>
    )
}
