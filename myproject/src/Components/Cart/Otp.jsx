import { PinInput, PinInputField, useDisclosure , Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Input,
  DrawerFooter,useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef() 
  const [mobileNumber, setMobileNumber] = useState('1234567890');
  const [otp, setOtp] = useState('');
  const toast = useToast();
  const navigate=useNavigate();

  const generateOTP=()=> {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const OTP = randomNumber.toString().substring(0, 4);
  setOtp(OTP);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(otp).then(() => {
      swal("OTP Copied!", "OTP has been copied to clipboard", "success");
    }, (err) => {
      console.error('Could not copy text: ', err);
      swal("Error!", "Could not copy OTP to clipboard", "error");
    });
  };
  const handlePaste = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText();
      setOtp(clipboardData);
    } catch (err) {
      console.error('Could not paste text: ', err);
      swal("Error!", "Could not paste OTP from clipboard", "error");
      }
      };

      const handleBackspace = (e) => {
        if (e.key === "Backspace") {
          setOtp(otp.slice(0, -1));
        }
      };

      const handledata=()=> {
        if (otp.length === 0){
          toast({
            title: "Empty ! Plz Enter Otp",
            status: "error",
            duration: 1000,
            isClosable: true,
          })

        }
        else {
          swal({
            title: "Payment Done",
            text: " You Entered Valid OTP !",
            icon: "success",
            button: "Ok",
            });
            setTimeout(() => {
              navigate("/");
            }, 1000);
        }
      }
      
      const handleSubmit = () => {
      axios.post('https://burgundy-cow-kit.cyclic.app/sendotp',{ 
        mobileNumber, otp 
      })
      .then(response => {
    
      swal({
      title: "OTP sent",
      text: "OTP sent to your mobile number!",
      icon: "success",
      button: "Ok",
      });
      })
      .catch(error => {
      console.log(error);
      swal({
      title: "Error",
      text: "Error sending OTP to your mobile number!",
      icon: "error",
      button: "Ok",
      });
      });
      }
      return (
      <div>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
     Pay Now
      </Button>
      <Drawer
           isOpen={isOpen}
           placement="right"
           onClose={onClose}
           finalFocusRef={btnRef}
         >
      <DrawerOverlay />
      <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Enter Otp </DrawerHeader>
      
      
            <DrawerBody>
              <PinInput otp  value={otp}  onKeyDown={handleBackspace}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
              <Box mt={5}>
              <Box display="flex">
              <Button variant="outline" mr={3} mt={5}  onClick={generateOTP}>
               Generate and enter OTP
              </Button>
              </Box>
              <Button align="left" ml={10}  mt={5}  onClick={handleCopy}>
                Copy
              </Button>
              <Button  mt={5}  ml={10}  align="right" onClick={handlePaste}>
                Paste
              </Button>
              </Box>
              <Box mr={3} mt={5}  ml={5}  align="center"><Button w="80%" colorScheme="blue" onClick={handledata}>Done</Button></Box>
            </DrawerBody>      
      
            <DrawerFooter> 
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit}>Send OTP</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      );
      };
      
      export default Otp;
      
   
      
 
      
      
      