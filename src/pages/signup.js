import React, { useState } from "react"
import { Button, Input, Select } from "../components"
const axios = require('axios')

export default function Signup(){

const [formData, setFormData] = useState({
    email:'', username:'',
    password:''
})

const takeInputData = (e) => {
    const {name, value, type, checked} = e.target
    setFormData(prevFormData => {
        return {
            ...prevFormData, 
        [name]: type == 'checkbox' ? checked : value}
    })
}


const registerUser = async (e) => {
    console.log(formData)
    const res = await axios.post('https://im-properties-api.herokuapp.com/api/auth/register', formData)
    const data = res.data
    console.log(data)
}


    return (
        <div className="signup-container">
            <div id="signup-left">
                <img src='../images/signupbackground.png' className="signup-image"></img>
            </div>
            <div id="signup-right">
                <div className="logo-container">
                    <img src="../images/logo.png" className="logo"></img>
                </div>
                <p id="signup-paragraph">Sign Up</p>
                <Select img={'../images/UserAccount.png'} name='accountType'
                value={formData.accountType} takeInputData={takeInputData} />

               <Input img={'../images/Mail.png'} type={'email'}
               placeholder={'E-mail Address'} takeInputData={takeInputData}
               formData={formData} value={formData.email} name='email' />

               <Input img={'../images/Name.png'} type={'text'}
                    placeholder={'Username'} takeInputData={takeInputData}
                    formData={formData} value={formData.username} name='username'/>

               <Input img={'../images/Lock.png'} type={'password'}
                    placeholder={'Password'} eye={'../images/Eye.png'} takeInputData={takeInputData}
                    formData={formData} value={formData.password} name='password'/>

                <Input img={'../images/Handshake.png'} type={'text'}
                    placeholder={'Referred by Vickywealth'}/>

                <div className="agreement">
                    <input type='checkbox' className="checkbox"
                    checked={formData.agree} name='agree' onChange={takeInputData}
                    ></input>
                    <p id="agreement-paragraph">I agree to IM Properties Terms & Condition and Privacy Policy</p>
                </div>
                <Button text={'Create Account'} run={registerUser}/>
                <div>
                    <p className="signin-option">Already have an account, <a href="/signin">Sign in</a></p>
                </div>
            </div>
        </div>
    )
}