import React, { useState } from "react"
import { Input, InputGroup, InputLeftElement, Select, Button, InputRightElement } from "@chakra-ui/react";
import { FaUserFriends, FaUserCircle, FaHandshake } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import { HiOutlineEye } from "react-icons/hi"
import { Link } from "react-router-dom";

export function Register({ handleChange, values, setActiveTab, register }) {
  const [passwordMode, setPasswordMode] = useState('password');

  const toggleStyle = (e) => {
    if (passwordMode === 'text') {
      setPasswordMode('password')
    } else {
      setPasswordMode('text')
    }
  };


  return (
    <form className="mt-[23px]">
      <section className="w-full">
        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={<FaUserFriends fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />}
          />
          <Select placeholder='Select option' bg={"white"}
            style={{ paddingLeft: '35px', fontFamily: 'Montserrat' }} name='role' onChange={handleChange} >
            <option value='buyer'>Buyer</option>
            <option value='ESP'>Executive Sales Partner (ESP)</option>
          </Select>
        </InputGroup>
        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={<MdEmail fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />}
          />
          <Input type="email" placeholder="E-mail Address" bg={"white"} name='email' value={values.email} onChange={handleChange} />
        </InputGroup>
        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={
              <FaUserCircle fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />
            }
          />
          <Input
            type="text"
            placeholder="Username"
            bg={"white"}
            width="100%"
            name='username'
            value={values.username}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={<RiLockPasswordFill fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />}
          />
          <Input type={passwordMode === 'text' ? 'text' : 'password'} placeholder="Password" bg={"white"} name='password'
            value={values.password} onChange={handleChange} />
          <InputRightElement
            cursor='pointer'
            children={<HiOutlineEye cursor='pointer' fontSize={'22px'}
              style={{ display: 'block', marginTop: '20px' }} onClick={toggleStyle} />}
          />
        </InputGroup>
        <InputGroup py="9px">
          <InputLeftElement
            pointerEvents="none"
            children={<FaHandshake fontSize={'22px'} style={{ display: 'block', marginTop: '20px' }} />}
          />
          <Input
            type="text"
            placeholder="Referrer's (Optional)"
            bg={"white"}
            name='referedBy'
            value={values.referrer}
            onChange={handleChange}
          />
        </InputGroup>
      </section>
      <section className="flex items-center gap-x-[9px] mt-[23px]">
        <input type='checkbox' onChange={handleChange} name='terms'></input>
        <p className="text-[12px] font-medium md:text-white font-fam">I agree to IM Properties Terms & Condition and Privacy Policy</p>
      </section>
      <section className="grid place-items-center mt-[24px]">
        <Button onClick={register} colorScheme='red' bgColor='#FF1212' py='13px' color="white" width='100%' fontSize='20px' style={{ fontWeight: 700 }}>Create Account</Button>
      </section>
      <Link to="/account/login">
        <p className="mt-[13px] text-[10px] font-fam text-center md:hidden">Already have an account? <span className="font-bold ml-[15px]">LOGIN</span></p>
      </Link>
    </form>
  )
}