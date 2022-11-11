import React, { useState } from "react";
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
  Select,
} from "@chakra-ui/react";

export function DashboardPayment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState(false);

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
            <td> 3 - 6 Months</td>
            <td>Nil</td>
            <td className="flex items-center px-[13px]">
              <p>History</p>
              <Button className="px-[5px] py-[4px]" onClick={onOpen}>
                Pay Now
              </Button>
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
            <td className="flex items-center px-[13px]">
              <p>History</p>
              <Button className="px-[5px] py-[4px]" onClick={onOpen}>
                Pay Now
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      {!details && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
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
                  <Input mt="10px" placeholder="Enter Amount"></Input>
                </Box>
                <Box>
                  <label>Choose Payment Method</label>
                  <Select placeholder="*Choose*" mt="10px">
                    <option value="one-off">
                      Paystack (card, USSD, Bank Transfer)
                    </option>
                    <option value="installment">Initial Deposit</option>
                  </Select>
                </Box>
              </Flex>
            </ModalBody>

            <Box className="justify-center text-center">
              <Button
                className="ml-0 bg-backblue mb-[100px] text-[12px] text-white font-bold px-[16px] font-fam"
                mt="20px"
                backgroundColor={"#3DB2FF"}
                onClick={() => setDetails(true)}
                _hover="none"
              >
                Pay Now
              </Button>
            </Box>
          </ModalContent>
        </Modal>
      )}

      {details && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setDetails(false);
          }}
          size="xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <div className="py-[31px] px-[16px] max-w-[600px]">
                <p className="font-fam text-[15px] font-bold">BANK DETAILS</p>
                <section
                  className="grid grid-cols-2 gap-y-[30px] gap-x-[10px] mt-[10px]"
                  style={{ gridTemplateColumns: "2fr 5fr" }}
                >
                  <p className="font-fam text-[15px] font-medium text-light">
                    Bank:
                  </p>
                  <p className="font-fam text-[15px] font-medium ">
                    United Bank For Africa (UBA)
                  </p>
                  <p className="font-fam text-[15px] font-medium text-light">
                    Account Number:
                  </p>
                  <p className="font-fam text-[15px] font-medium">2034095253</p>
                  <p className="font-fam text-[15px] font-medium text-light">
                    Account Number:
                  </p>
                  <p className="font-fam text-[15px] font-medium">
                    IM Intercontinental Limited
                  </p>
                </section>
                <p className="font-fam text-[15px] mt-[22px] text-light">
                  Please pay
                  <span className="font-bold" style={{ color: "black" }}>
                    N674,666.66
                  </span>
                  to above bank details
                </p>
                <p className="font-fam text-[15px] mt-[17px] text-light">
                  Once you have made payment; please send proof of payment, name
                  and your IM Property username to admin via 08023981234,
                  09890912834 or upload it here
                </p>
                <section className="md:flex hidden gap-y-[10px] flex-col md:flex-row gap-x-[10px] mt-[40px]">
                  <input
                    type="file"
                    className="font-fam text-[15px] text-light bg-white p-[7px] rounded-[5px] w-[50%]"
                  ></input>
                  <button className="text-[15px] bg-backblue text-white py-[13px] px-[35px] rounded-[5px]  m-auto">
                    Submit
                  </button>
                </section>
                <p className="text-[15px] font-medium mt-[15px] md:mt-[7px] font-fam text-light md:text-left text-center cursor-pointer">
                  Upload proof of payment
                </p>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
