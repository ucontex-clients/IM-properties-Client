import React from "react"
import { NavigationBar, PropertyViewSection, VideoSection, TopSide } from "../components"

// import {IoCallOutline} from "react-icons/io"
import {FaUsers} from "react-icons/fa"
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"

export default function HomePage(){
    return(
        <div>
            <TopSide />
            <NavigationBar />
            <div className="home-image-wrapper" style={{marginTop: '132px', overflow:'hidden'}}>
                <img src="./images/newHome.png" alt="home cover"></img>
                <div className="background" style={{paddingLeft:'64px'}}>
                    <h1 style={{marginTop:'160px'}}>WE ARE <span style={{color:'#FF1212'}}>IM</span> PROPERTIES</h1>
                    <p style={{marginTop:'7px'}}>you can own A Property Without Stress <br/> 
                    and become a landlord with peace of mind</p>
                    <div className="flex" style={{marginTop:'68px', columnGap:'39px'}}>
                        <button>BOOK AN INSPECTION</button>
                        <button>CONTACT US</button>
                    </div>
                </div>
            </div>

            <div className="section-container" style={{padding:'85px 65px',backgroundColor: '#fff', minWidth:'900px'}}>
                <div>
                    <section className='section1'>
                        <h2>About IM Properties</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                            accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                            vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam
                            in elementum tellus. </p>
                            <button className="rounded text-white py-2 px-2 mt-[24px]" style={{backgroundColor:'#FF1212'}}>LEARN MORE</button>
                    </section>
                    <section className="section1 mt-[71px]">
                        <h2>What we do</h2>
                        <div className="flex mt-[31px]">
                            <div>
                                <div className="our-doings">
                                    <div className="flex items-center gap-x-[3px]">
                                        <div style={{padding:'5px', border:'1px dashed black', borderRadius:'2px'}}>
                                            <FaUsers style={{color:'#6C6C6C'}} />
                                        </div>
                                        <p className='doings'>Estate Development</p>
                                    </div>
                                    <p className="mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam eu turpis molestie, dictum est a,
                                        mattis tellus. <span>Read More</span> </p>
                                </div>

                                <div className="our-doings">
                                    <div className="flex items-center gap-x-[3px] mt-[22px]">
                                        <div style={{padding:'5px', border:'1px dashed black', borderRadius:'2px'}}>
                                            <FaUsers style={{color:'#6C6C6C'}} />
                                        </div>
                                        <p className='doings'>Property Management</p>
                                    </div>
                                    <p className="mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam eu turpis molestie, dictum est a,
                                        mattis tellus. <span>Read More</span> </p>
                                </div>
                            </div>
                            <div className="ml-[34px] pl-[34px]" style={{borderLeft: '1.5px solid #000000'}}>
                                <div className="our-doings">
                                    <div className="flex items-center gap-x-[3px]">
                                        <div style={{padding:'5px', border:'1px dashed black', borderRadius:'2px'}}>
                                            <FaUsers style={{color:'#6C6C6C'}} />
                                        </div>
                                        <p className='doings'>Buy & Sell Properties</p>
                                    </div>
                                    <p className="mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam eu turpis molestie, dictum est a,
                                        mattis tellus. <span>Read More</span> </p>
                                </div>

                                <div className="our-doings">
                                    <div className="flex items-center gap-x-[3px] mt-[22px]">
                                        <div style={{padding:'5px', border:'1px dashed black', borderRadius:'2px'}}>
                                            <FaUsers style={{color:'#6C6C6C'}} />
                                        </div>
                                        <p className='doings'>Building Construction</p>
                                    </div>
                                    <p className="mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam eu turpis molestie, dictum est a,
                                        mattis tellus. <span>Read More</span> </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="doings-images">
                    <div style={{top:'38px'}}><img src="./images/doings1.png" alt="what we do"></img></div>
                    <div style={{bottom:'38px', left:'126px'}}><img src="./images/doings2.png" alt="what we do"></img></div>
                </div>
            </div>

            <VideoSection />

            <div className="section1  pt-[132px] p-[65px] bg-white" >
                <h2 className="text-mine" style={{marginBottom:'10px'}}>Our Latest Properties</h2>
                <p>Buy a landlanded property with peace of mind</p>
                <PropertyViewSection />
                <div className="grid place-items-center mt-[56px]">
                    <button className="p-2 rounded text-white" style={{backgroundColor:'#FF1212'}}>VIEW MORE</button>
                </div>
            </div>

            <div className="grid px-[65px] gap-x-[59px] items-center py-[76px]"
            style={{gridTemplateColumns:'1fr 2fr', minWidth:'900px'}}>
                <div style={{width:'100%', height:'100%', borderRadius:'5px'}}>
                    <img src="./images/laptop.png" alt="customer"
                    style={{width:'100%', height:'100%', borderRadius:'5px', objectFit:'cover'}}></img>
                </div>
                <div className="residual">
                    <h2>Earn residual income from real estate</h2>
                    <h3 className="mt-[20px]">Become An Executive Sales Partner</h3>
                    <p className="mt-[47px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. </p>
                        <p className="mt-[47px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                            dictum est a, mattis tellus. </p>
                </div>
            </div>

            <div className="relative">
                <img src="./images/testimonial.png" alt='testimonial'></img>
                <div className="py-[57px] px-[40px] absolute top-0 left-0 w-full h-full text-center"
                style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
                    <h2 className="text-[25px] text-white font-fam font-bold">Testimonials</h2>
                    <div className="nav-div" style={{left:'40px'}}>
                        <MdKeyboardArrowLeft style={{fontSize:'24px'}} />
                    </div>
                    <div className="nav-div" style={{right:'40px'}}>
                        <MdKeyboardArrowRight style={{fontSize:'24px'}}/>
                    </div>
                    
                    
                    
                    <div>
                        <button className="font-fam bg-mine text-white p-[10px] rounded text-xl font-medium mt-[79px]"
                        style={{fontFamily:'Montserrat'}}>VIEW MORE</button>
                    </div>
                </div>
            </div>


            <div className="explore-blue">
                <div className="explore-red">
                    <div className="explore-red-left">
                        <h3>Looking for a dream property?</h3>
                        <p>We can help you realize your dream of a new property</p>
                    </div>
                    <div className="explore-red-right" onClick={() => window.location.assign('/properties')}>
                        <p>Explore Property</p>
                        <div className="arrow-container">
                            <img src="./images/exploreArrow.png" alt="explore"></img>
                            <img src="./images/exploreArrow.png" alt="explore"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}