import React from "react"
import {BiUserCircle} from "react-icons/bi"

export function Nav1({signIn, signUp}){
    return(
        <div className="navigation-buttons-wrapper">
            <BiUserCircle style={{fontSize:'30px'}} />
            <p style={{fontFamily:'Montserrat', fontWeight:'500', fontSize:'15px'}}>Account</p>
        </div>
    )
}