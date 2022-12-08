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
  let [data, setData] = useState([
    {
      tranId: "IM 0023",
      property: "Campus Gardens Estate",
      price: "N1,865,000",
      mode: "Outright",
      paid: "1,865,000",
      balance: "Completed",
      duration: "None",
      next: "Nil"
    },
    {
      tranId: "IM 0023",
      property: "Campus Gardens Estate",
      price: "N1,865,000",
      mode: "Installmental",
      paid: "1,865,000",
      balance: "1,128,400",
      duration: "3 - 6 Months",
      next: "Nil"
    },
    {
      tranId: "IM 0023",
      property: "Campus Gardens Estate",
      price: "N1,865,000",
      mode: "Installmental",
      paid: "1,865,000",
      balance: "1,128,400",
      duration: "6 - 12 Months",
      next: "Nil"
    }
  ]);

  return (<>

    <div className="full_ah bg-white px-[33px]">
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
          {
            data.map((e, i) => {
              let textColor;
              let hide;
              let show;
              if (e.mode === "Outright") {
                textColor = "green_ah";
                hide = "none";
                show = "inline";
              } else {
                textColor = "text-mine";
                hide = "block";
                show = "none";
              }
              return <>
                <tr>
                  <td>{e.tranId}</td>
                  <td>{e.property}</td>
                  <td>{e.price}</td>
                  <td>{e.mode}</td>
                  <td>{e.paid}</td>
                  <td className={textColor}>{e.balance}</td>
                  <td>{e.duration}</td>
                  <td>{e.next}</td>
                  <td className="flex items-center px-[13px]">
                    <p style={{ display: show, cursor: "pointer", marginTop: "10px" }}>History</p>
                    <Button style={{ display: hide }} className="px-[5px] py-[4px]" onClick={onOpen}>
                      Pay Now
                    </Button>
                  </td>
                </tr>
              </>
            })
          }
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


    <div className="mobile_ah bg-white px-[33px]">
      <table className="payment-table">
        {
          data.map((e, i) => {
            let textColor;
            let hide;
            let show;
            if (e.mode === "Outright") {
              textColor = "green_ah";
              hide = "none";
              show = "inline";
            } else {
              textColor = "text-mine";
              hide = "block";
              show = "none";
            }
            return <>
              <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px", background: "whitesmoke" }}>
                <thead style={{ display: "flex", flexDirection: "column", marginTop: "-5px" }}>
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
                  <tr style={{ display: "flex", flexDirection: "column" }}>
                    <td>{e.tranId}</td>
                    <td>{e.property}</td>
                    <td>{e.price}</td>
                    <td>{e.mode}</td>
                    <td>{e.paid}</td>
                    <td className={textColor}>{e.balance}</td>
                    <td>{e.duration}</td>
                    <td>{e.next}</td>
                    <td className="mt-2">
                      <p style={{ display: show, cursor: "pointer" }}>History</p>
                      <Button style={{ display: hide, marginTop: "-10px" }} className="m-auto" onClick={onOpen}>
                        Pay Now
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </div>
            </>
          })
        }

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
  </>
  );
}
