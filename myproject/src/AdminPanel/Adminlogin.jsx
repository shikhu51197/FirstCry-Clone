import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  useDisclosure,
  FormHelperText,
  InputRightElement,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Input,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginadmin } from "../Redux/AuthReducer/action";

const Form1 = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [firstname, SetFirstname] = React.useState("");
  const [lastname, SetLastname] = React.useState("");
  const [adminemail, setAdminEmail] = React.useState("");
  const [adminpassword, setadminpassword] = React.useState("");
  const [show, setShow] = React.useState(false);

  const validatePassword = (adminpassword) => {
    let x =
      adminpassword.includes("!") ||
      adminpassword.includes("@") ||
      adminpassword.includes("#") ||
      adminpassword.includes("&") ||
      adminpassword.includes("$");
    let p = adminpassword;
    if (p == "") {
      toast({
        title: `password is Empty`,
        status: "error",
        isClosable: true,
      });
    }
    let y = p.length >= 8;
    let z = p[0] == p[0].toUpperCase();
    if (x && y && z) {
      return true;
    } else {
      return false;
    }
  };

  const validatefirstname = (firstname) => {
    return firstname.length < 1 ? false : true;
  };
  const validateemail = (adminemail) => {
    return adminemail.includes("@") ? true : false;
  };

  const validatelastname = (lastname) => {
    return lastname.length < 1 ? false : true;
  };

  const handleClick = () => setShow(!show);

  const handleSubmit = async () => {
    const isValidated =
      validatefirstname(firstname) &&
      validatelastname(lastname) &&
      validateemail(adminemail) &&
      validatePassword(adminpassword);
    setLoading(true);

    if (isValidated) {
      let postdata = { firstname, lastname, adminemail, adminpassword };
      let res = await fetch("https://burgundy-cow-kit.cyclic.app/Admin");
      let userdata = await res.json();
      let result = false;
      userdata.forEach((el) => {
        if (el.adminemail == adminemail) {
          result = true;
          return;
        }
        console.log(userdata);
        // navigate("/admin");
      });
      if (result == false) {
        let response = await fetch(
          "https://burgundy-cow-kit.cyclic.app/Admin",
          {
            method: "POST",
            body: JSON.stringify(postdata),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(response);
        setLoading(false);
        toast({
          title: `Successfully registered`,
          status: "success",
          isClosable: true,
        });
        SetFirstname("");
        setadminpassword("");
        setAdminEmail("");
        SetLastname("");
        // navigate("/admin");
      } else {
        setLoading(false);
        toast({
          title: `Email already exists`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      setLoading(false);
      toast({
        title: `Please enter valid credentials`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Admin Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => {
              SetFirstname(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => {
              SetLastname(e.target.value);
            }}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter Admin Email"
          value={adminemail}
          onChange={(e) => {
            setAdminEmail(e.target.value);
          }}
        />
        <FormHelperText align="center">
          We'll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={adminpassword}
            onChange={(e) => {
              setadminpassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box mt={5} align="center">
          {Loading ? (
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              _hover={{
                bg: "rgb(255,112,67)",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              _hover={{
                bg: "rgb(255,112,67)",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </Box>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [adminemail, setAdminEmail] = React.useState("");
  const [adminpassword, setadminpassword] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handlelogin = () => setShow(!show);

  const dispatch = useDispatch();
  let isLoading = useSelector((store) => store.AdminAuthReducer.isLoading);

  const handleSubmit = async () => {
    console.log("Submit");
    let userAdmin = adminemail;
    dispatch(
      loginadmin(
        userAdmin,
        adminpassword,
        toast,
        setadminpassword,
        setAdminEmail
      )
    );
    navigate("/admin")
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Admin Login
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter Email"
          value={adminemail}
          onChange={(e) => {
            setAdminEmail(e.target.value);
          }}
        />
        <FormHelperText align="center">
          We'll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={adminpassword}
            onChange={(e) => {
              setadminpassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onChange={handlelogin}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box mt={5} align="center">
          {isLoading ? (
            <Button
              isLoading
              loadingText="submitting"
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={handleSubmit}
            >
              Save
            </Button>
          ) : (
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={handleSubmit}
            >
              Save
            </Button>
          )}
        </Box>
      </FormControl>
    </>
  );
};

function Adminlogin() {
  // const navigate = useNavigate();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Box colorScheme="red" onClick={onOpen} cursor={"pointer"}>
        Admin
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
              <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
              >
                <Progress
                  hasStripe
                  value={progress}
                  mb="5%"
                  mx="5%"
                  isAnimated
                ></Progress>
                <Box isOpen={isOpen}> {step === 1 ? <Form1 /> : <Form2 />}</Box>
                <ButtonGroup mt="5%" w="100%">
                  <Flex w="100%" mt={5} justifyContent="space-between">
                    <Flex>
                      <Button
                        ml={10}
                        onClick={() => {
                          setStep(step - 1);
                          setProgress(progress - 33.33);
                        }}
                        isDisabled={step === 1}
                        colorScheme="teal"
                        variant="solid"
                        w="7rem"
                        mr="5%"
                      >
                        Back
                      </Button>
                      <Button
                        w="7rem"
                        ml={10}
                        isDisabled={step === 2}
                        onClick={() => {
                          setStep(step + 1);
                          if (step === 2) {
                            setProgress(100);
                          } else {
                            setProgress(progress + 33.33);
                          }
                        }}
                        colorScheme="teal"
                        variant="outline"
                      >
                        Goto Login
                      </Button>
                    </Flex>
                  </Flex>
                </ButtonGroup>
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                onClick={() => onClose()}
                ml={3}
                bgColor={"blue.500"}
                _hover={{ bgColor: "blue.400" }}
                color={"whiteAlpha.900"}
              >
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default Adminlogin;
