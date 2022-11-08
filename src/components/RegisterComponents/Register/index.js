import React from "react"
import { Input, InputGroup, InputLeftElement, Select, Button, InputRightElement } from "@chakra-ui/react";
import {FaUserFriends, FaUserCircle, FaHandshake} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {HiOutlineEye} from "react-icons/hi"

export function Register(){
    return(
        <form className="mt-[23px]">
        <section className="w-full">
          <InputGroup py="9px">
            <InputLeftElement
              pointerEvents="none"
              children={<FaUserFriends fontSize={'22px'} style={{display:'block', marginTop:'20px'}} />}
            />
            <Select placeholder='Select option' bg={"white"} style={{paddingLeft:'35px', fontFamily:'Montserrat'}}  >
<option value='ESP'>Buyer</option>
<option value='User'>Executive Sales Partner (ESP)</option>
</Select>
          </InputGroup>
          <InputGroup py="9px">
            <InputLeftElement
              pointerEvents="none"
              children={<MdEmail fontSize={'22px'} style={{display:'block', marginTop:'20px'}} />}
            />
            <Input type="email" placeholder="E-mail Address" bg={"white"} />
          </InputGroup>
          <InputGroup py="9px">
            <InputLeftElement
              pointerEvents="none"
              children={
                <FaUserCircle fontSize={'22px'} style={{display:'block', marginTop:'20px'}} />
              }
            />
            <Input
              type="text"
              placeholder="Username"
              bg={"white"}
              width="100%"
            />
          </InputGroup>
          <InputGroup py="9px">
            <InputLeftElement
              pointerEvents="none"
              children={<RiLockPasswordFill fontSize={'22px'} style={{display:'block', marginTop:'20px'}}/>}
            />
            <Input type="password" placeholder="Password" bg={"white"} />
            <InputRightElement
              pointerEvents="none"
              children={<HiOutlineEye fontSize={'22px'} style={{display:'block', marginTop:'20px', cursor:'pointer'}}/>}
            />
          </InputGroup>
          <InputGroup py="9px">
            <InputLeftElement
              pointerEvents="none"
              children={<FaHandshake fontSize={'22px'} style={{display:'block', marginTop:'20px'}}/>}
            />
            <Input
              type="text"
              placeholder="Referrer's (Optional)"
              bg={"white"}
            />
          </InputGroup>
        </section>
        <section className="flex items-center gap-x-[9px] mt-[23px]">
          <input type='checkbox'></input>
          <p className="text-[12px] font-medium md:text-white font-fam">I agree to IM Properties Terms & Condition and Privacy Policy</p>
        </section>
        <section className="grid place-items-center mt-[24px]">
        <Button colorScheme='red' bgColor='#FF1212' py='13px' color="white" width='100%' fontSize='20px' style={{fontWeight:700}}>Create Account</Button> 
        </section>
        <p className="mt-[13px] text-[10px] font-fam text-center md:hidden">Already have an account? <span className="font-bold ml-[15px]">LOGIN</span></p>
      </form>
    )
}