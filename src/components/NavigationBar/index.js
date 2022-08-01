import React, { useState } from "react";

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
                <a href="/"><img src="./images/logo.png"></img></a>
            </div>

            <div className="search-wrapper">
                <div className="search-image-wrapper">
                    <img src="./images/Vector.png" className="search-image"></img>
                </div>
                <input type={'text'} placeholder='Search'></input>
            </div>
        </div>

        <div className="navigation-right">
            <ul>
                    <li><a href="/"
                    style={tab=='Home'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('Home')
                    }}>Home</a></li>
                    <li><a href="/properties"
                    style={tab=='Property'? fontStyle2 : fontStyle1}
                    onClick={(e) => {
                        setTab('Property')
                    }}>Property</a></li>
                    <li><a href="about"
                    style={tab=='AboutUs'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('AboutUs')
                    }}>About Us</a></li>
                    <li><a href="blog"
                    style={tab=='Blog'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('Blog')
                    }}>Blog</a></li>
                    <li><a href="contact"
                    style={tab=='ContactUs'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('ContactUs')
                    }}>Contact Us</a></li>
                    <li><a href="faq"
                    style={tab=='FAQ'? fontStyle2 : fontStyle1}
                    onClick={(e)=>{
                        setTab('FAQ')
                    }}>FAQ</a></li>
                </ul>
                
                <div className="navigation-buttons-wrapper">
                    <button className="signBtn" onClick={signIn}>Sign In</button>
                    <button className="signBtn" onClick={signUp}>Sign Up</button>
                </div>
        </div>
  </div>
  );
}
