import React, { useState } from "react";

export function NavigationBar() {

const [tab, setTab] = useState('Home')

const fontStyle1 = {
    fontWeight: 500,
}
const fontStyle2 = {
    fontWeight: 800,
    color: '#FF2442'
}



  return (
    <div className="navigation-wrapper">
        <div className="navigation-logo-wrapper">
            <img src="./images/logo.png"></img>
        </div>

        <div className="search-wrapper">
            <div className="search-image-wrapper">
                <img src="./images/Vector.png" className="search-image"></img>
            </div>
            <input type={'text'} placeholder='Search'></input>
        </div>

        <div className="navigation-right">
            <ul>
                    <li><a href="#"
                    style={tab=='Home'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('Home')
                    }}>Home</a></li>
                    <li><a href="#"
                    style={tab=='Property'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('Property')
                    }}>Property</a></li>
                    <li><a href="#"
                    style={tab=='AboutUs'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('AboutUs')
                    }}>About Us</a></li>
                    <li><a href="#"
                    style={tab=='Blog'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('Blog')
                    }}>Blog</a></li>
                    <li><a href="#"
                    style={tab=='ContactUs'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('ContactUs')
                    }}>Contact Us</a></li>
                    <li><a href="#"
                    style={tab=='FAQ'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('FAQ')
                    }}>FAQ</a></li>
                </ul>
                
                <div className="navigation-buttons-wrapper">
                    <button className="signBtn">Sign In</button>
                    <button className="signBtn">Sign Up</button>
                </div>
        </div>
  </div>
  );
}
