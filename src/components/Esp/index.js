import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";


export function Esp(){

    useEffect(() =>{
        loadUser();
    }, []);

    const loadUser = () => {
        let token = localStorage.getItem("imToken");
        //const response = axios.
    };

    return(
        <div className="section-wrapper pb-[28px] px-[19px] md:px-[65px] md:pb-[85px]">
            <div className="grid grid-col-2">
                <div>
                    <img src="./images/aboutImg.png" className="m-[0px] w-100 h-[100%]" alt="about cover"></img>
                </div>
                <div className="mt-[30px]">
                    <div className="mb-[20px]">
                        <h1 className="mb-[15px] font-fam" style={{fontWeight: 600}}>WHAT IS AN ESP</h1>
                        <p className="font-fam">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                            metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                            interdum tellus elit sed risus. Maecenas eget condimentum velit,
                            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra, per inceptos himenaeos. Praesent
                            auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                            urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                            diam sit amet lacinia.
                        </p>
                    </div>
                    
                    <div>
                        <h1 className="mb-[15px] font-fam" style={{fontWeight: 600}}>BENEFITS OF ESP</h1>
                        <p className="font-fam">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                            metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                            interdum tellus elit sed risus
                        </p>
                    </div>
                </div>
                
            </div>
            <button
                className="pl-[42.756px] pr-[42.756px] mt-[50px] mb-[40px] rounded text-white text-[15px] px-[16px] py-[11.25px]"
                style={{ backgroundColor: "#FF1212", fontVariant: "small-caps" }}
            >
                <Link to="/account/register">Register As An Esp</Link>
            </button>
        </div>

    );
}