import React, { useState } from "react";
import { Nav1 } from "../Nav1";
import { Nav2 } from "../Nav2";

export function NavigationBar({page='Home'}) {

const [tab, setTab] = useState(page)

const fontStyle1 = {
    fontWeight: 500,
}
const fontStyle2 = {
    fontWeight: 800,
    color: '#FF2442'
}

const signIn = () => {
    window.location.assign('/signin')
}

const signUp = () => {
    window.location.assign('/signup')
}



  return (
    <div className="navigation-wrapper">
        <div className="navigation-left">
            <div className="navigation-logo-wrapper">
                <a href="/"><img src="./images/logo.png" alt="logo"></img></a>
            </div>
            <ul>
                    <li><a href="/"
                    style={tab==='Home'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('Home')
                    }}>Home</a></li>
                    <li><a href="/about"
                    style={tab==='AboutUs'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('AboutUs')
                    }}>About Us</a></li>
                    <li><a href="/our-services"
                    style={tab==='WhatWeDo'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('WhatWeDo')
                    }}>What we do</a></li>
                    <li><a href="/property"
                    style={tab==='Property'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('Property')
                    }}>Our Properties</a></li>
                    <li>
                        <button className="nav-button">Become an ESP</button>
                    </li>
                </ul>
        </div>

        <div className="navigation-right">
                
                {tab === 'Home'? <Nav1 signIn={signIn} signUp={signUp} /> : <Nav2 />}
        </div>
  </div>
  );
}
