import React from "react"
import { Input, InputGroup, InputLeftElement,Button, InputRightElement } from "@chakra-ui/react";
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {HiOutlineEye} from "react-icons/hi"


export function Login(){
    return(
        <form className="mt-[23px]">
        <section className="w-full">
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
              children={<RiLockPasswordFill fontSize={'22px'} style={{display:'block', marginTop:'20px'}}/>}
            />
            <Input type="password" placeholder="Password" bg={"white"} />
            <InputRightElement
              pointerEvents="none"
              children={<HiOutlineEye fontSize={'22px'} style={{display:'block', marginTop:'20px', cursor:'pointer'}}/>}
            />
          </InputGroup>
        </section>
        <p className="mt-[13px] text-[16px] font-medium font-fam text-white text-right">Forgot Password</p>
        <section className="grid place-items-center mt-[24px]">
        <Button colorScheme='red' bgColor='#FF1212' py='13px' color="white" width='100%' fontSize='20px' style={{fontWeight:700}}>Login</Button> 
        </section>
        <p className="mt-[13px] text-[10px] font-fam md:hidden">Do not have an account? <span className="font-bold ml-[15px]">REGISTER</span></p>
      </form>
    )
}