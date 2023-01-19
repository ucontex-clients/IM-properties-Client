import React, { useState } from "react"
import { Input, InputGroup, InputLeftElement, Button, InputRightElement } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { HiOutlineEye } from "react-icons/hi"


export function Login({ setActiveTab, handleChange, values, login }) {


  const [passwordMode, setPasswordMode] = useState('password')

  const toggleStyle = (e) => {
    if (passwordMode === 'text') {
      setPasswordMode('password')
    } else {
      setPasswordMode('text')
    }
  }
  return (
    <form className="mt-[23px]">
      <section className="w-full">
        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={<MdEmail fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />}
          />
          <Input type="email" placeholder="E-mail Address" bg={"white"} name='email'
            value={values.email} onChange={handleChange} />
        </InputGroup>

        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={<RiLockPasswordFill fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />}
          />
          <Input type={passwordMode === 'text' ? 'text' : 'password'} name='password' placeholder="Password" bg={"white"} onChange={handleChange} />
          <InputRightElement
            cursor='pointer'
            children={<HiOutlineEye cursor='pointer' fontSize={'22px'}
              style={{ display: 'block', marginTop: '20px' }} onClick={toggleStyle} />}
          />
        </InputGroup>
      </section>
      <p className="full_ah mt-[13px] text-[16px] font-medium font-fam text-white text-right">Forgot Password</p>
      <p className="mobile_ah  mt-[13px] text-[16px] font-medium font-fam text-right">Forgot Password</p>
      <section className="grid place-items-center mt-[24px]">
        <Button onClick={() => login()} colorScheme='red' bgColor='#FF1212' py='13px' color="white" width='100%' fontSize='20px' style={{ fontWeight: 700 }}>Login</Button>
      </section>
      <p style={{ color: "red" }} className="mt-[13px] text-[10px] font-fam md:hidden">Do not have an account? <span className="font-bold ml-[15px]" onClick={() => setActiveTab('1')}>REGISTER</span></p>
    </form>
  )
}