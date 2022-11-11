import React from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
  Flex,
  Input,
  Select
} from '@chakra-ui/react'

export function DashboardPayment() {

  const { isOpen, onOpen, onClose } = useDisclosure()



  
  return (
    <div className="bg-white px-[33px]">
      <table className="payment-table">
      <thead>
        <th>Trans. ID</th>
        <th>Property</th>
        <th>Amount</th>
        <th>Mode</th>
        <th>Paid</th>
        <th>Balance</th>
        <th>Duration</th>
        <th>Next Payment</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr>
          <td>IM 0023</td>
          <td>Campus Gardens Estate</td>
          <td>N1,865,000</td>
          <td>Outright</td>
          <td>1,865,000</td>
          <td className="text-green">Completed</td>
          <td>None</td>
          <td>Nil</td>
          <td className="flex items-center px-[13px]">History</td>
        </tr>
        <tr>
          <td>IM 0023</td>
          <td>Campus Gardens Estate</td>
          <td>N1,865,000</td>
          <td>Outright</td>
          <td>1,865,000</td>
          <td className="text-mine">1,128,400</td>
          <td>  3 - 6 Months</td>
          <td>Nil</td>
          <td className="flex items-center px-[13px]"><p>History</p>
            <Button className="px-[5px] py-[4px]"  onClick={onOpen}>Pay Now</Button>
          </td>
        </tr>
        <tr>
          <td>IM 0023</td>
          <td>Campus Gardens Estate</td>
          <td>N1,865,000</td>
          <td>Outright</td>
          <td>1,865,000</td>
          <td className="text-mine">1,128,400</td>
          <td>None</td>
          <td>Nil</td>
          <td className="flex items-center px-[13px]"><p>History</p>
            <Button className="px-[5px] py-[4px]"  onClick={onOpen}>Pay Now</Button>
          </td>
        </tr>
      </tbody>
    </table>

    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex gap-x-[10px]">
            <Text className="text-[12px]">Balance</Text>
            <Text className="text-[12px] text-mine">N1,128,400</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex className="gap-x-[20px]">
              <Box>
                  <label>Enter Amount (N)</label>
                  <Input mt='10px' placeholder='Enter Amount'></Input>
              </Box>
              <Box>
                  <label>Choose Payment Method</label>
                  <Select placeholder='*Choose*' mt='10px' >
                  <option value='one-off'>Paystack (card, USSD, Bank Transfer)</option>
                  <option value='installment'>Initial Deposit</option>
                  </Select>
              </Box>
              
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
