import React from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";

export function DashboardSupport() {
  return (
    <Box className="pt-[80px] bg-white px-[40px]">
      <Flex flexDir="column" className="md:w-[60%]">
        <FormControl>
          <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
            Message Title
          </FormLabel>
          <Input type="text" backgroundColor="#F5F5F5" />
        </FormControl>

        <FormControl className="mt-[52px]">
          <FormLabel className="mb-[12px] font-fam text-black text-[15px]">
            Description
          </FormLabel>
          <Textarea
            placeholder="Write your message here"
            height="200px"
            backgroundColor="#F5F5F5"
          />
        </FormControl>
        <Button
          className="font-fam text-white mt-[44px] mx-auto"
          backgroundColor="#FF1212"
          _hover="none"
          px="86px"
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}
