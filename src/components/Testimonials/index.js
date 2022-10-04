import React from "react"
import {FaUsers} from "react-icons/fa"

export function Testinonials(){
    return (
        <div>
            <div className="flex items-center gap-x-[20px]">
                <div>
                    <FaUsers />
                </div>
                <p className="font-fam text-mine font-bold">Phil</p>
            </div>
            <div></div>
            <div>
                <p>"Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et </p>
            </div>
        </div>
    )
}