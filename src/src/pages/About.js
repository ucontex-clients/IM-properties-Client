import React from "react"
import { NavigationBar, TeamMember, TopSide } from "../components"

export default function About(){
    return(
        <div>
            <TopSide />
            <NavigationBar page='AboutUs' />
            <div className="about-image" style={{marginTop:'132px'}}>
                <div className="who-we-are"><p>Get To Know Who <br/> We Are</p></div>
                <img src="./images/aboutImg.png" alt="about cover"></img>
            </div>
            <div className="about-bottom-wrapper">
                <div className="about-left"><img src="./images/aboutBottom.png" alt="user"></img></div>
                <div className="about-right">
                    <h3>About Us - Who We Are?</h3>
                    <p className="check-story">Check out our company story and work process</p>
                    <p className="story">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className="team-section-wrapper">
                <p>Meet The Team</p>
                <div className="all-team-members-wrapper">
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </div>
            </div>
        </div>
    )
}