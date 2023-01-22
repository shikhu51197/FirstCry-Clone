import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Image,
  useToast,
  Center,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../assest/Kids fashion logo.png";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const validatePassword = (password) => {
    let x =
      password.includes("!") ||
      password.includes("@") ||
      password.includes("#") ||
      password.includes("&") ||
      password.includes("$");
    let p = password;
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
  const validatename = (name) => {
    return name.length < 1 ? false : true;
  };
  const validateemail = (email) => {
    return email.includes("@") ? true : false;
  };
  const validatemobile = (mobile) => {
    return mobile.length === 10 ? true : false;
  };
  const submit = async () => {
    const isValidated =
      validatename(name) &&
      validatePassword(password) &&
      validateemail(email) &&
      validatemobile(mobile);
    setisLoading(true);
    if (isValidated) {
      let postdata = { name, email, password, mobile, child: [], address: [] };
      let res = await fetch("https://burgundy-cow-kit.cyclic.app/Users");
      let userdata = await res.json();
      let result = false;
      userdata.forEach((el) => {
        if (el.email == email) {
          result = true;
          return;
        }
      });
      if (result == false) {
        let response = await fetch(
          "https://burgundy-cow-kit.cyclic.app/Users",
          {
            method: "POST",
            body: JSON.stringify(postdata),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        // let data=await response.json();
        console.log(response);
        setisLoading(false);
        toast({
          title: `Successfully registered`,
          status: "success",
          isClosable: true,
        });
        setname("");
        setpassword("");
        setmobile("");
        setemail("");
        navigate("/login");
      } else {
        setisLoading(false);
        toast({
          title: `Email already exists`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      setisLoading(false);
      toast({
        title: `Please enter valid credentials`,
        status: "error",
        isClosable: true,
      });
    }
  };
  const style = {
    height: "30px",
    marginBottom: "20px",
    borderColor: "rgb(255,112,67)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderWidth: "1.5px",
    borderRadius: "0px",
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("white")}
      >
        <Stack
          marginTop={"30px"}
          marginBottom={"30px"}
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          className="login-shadow"
        >
          <Image
            cursor={"pointer"}
            src={logo}
            width="100px"
            height="100px"
            margin="auto"
            onClick={() => navigate("/")}
          />
          <Center>
            <Text textAlign={"left"} fontStyle={"italic"} fontWeight={"bold"}>
              Register here
            </Text>
          </Center>

          <Box rounded={"lg"} bg={useColorModeValue("white")} p={6}>
            <Stack
              spacing={0}
              width={{ sm: "200px", md: "300px", lg: "300px" }}
            >
              <HStack>
                <Box className="w-100">
                  <FormControl id="name" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      isRequired
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      focusBorderColor="white"
                      style={style}
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box className="w-100">
                  <FormControl id="mobile" isRequired>
                    <FormLabel>Mobile Number</FormLabel>
                    <div style={{ display: "flex" }}>
                      <Input
                        float={"left"}
                        width={"70px"}
                        onChange={(e) => (e.target.value = "+91")}
                        focusBorderColor="white"
                        style={style}
                        value={"+91"}
                      ></Input>
                      <Input
                        isRequired
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                        focusBorderColor="white"
                        style={style}
                        type="number"
                        placeholder="Enter your mobile"
                      />
                    </div>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  isRequired
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  focusBorderColor="white"
                  style={style}
                  type="email"
                  placeholder="Enter your email address"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Text float={"left"}>1.First character capital</Text>
                <Text float={"left"}>2.Length eight or more</Text>
                <Text marginBottom={"10px"} float={"left"}>
                  3.At least one special character (!@#&$)
                </Text>
                <InputGroup>
                  <Input
                    isRequired
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    focusBorderColor="white"
                    style={style}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      marginBottom="15px"
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {isLoading ? (
                  <Button
                    isLoading
                    loadingText="Signing up"
                    size="lg"
                    bg={"rgb(255,112,67)"}
                    color={"white"}
                    borderRadius="0px"
                    _hover={{
                      bg: "rgb(255,112,67)",
                    }}
                  >
                    Sign up
                  </Button>
                ) : (
                  <Button
                    onClick={submit}
                    size="lg"
                    bg={"rgb(255,112,67)"}
                    color={"white"}
                    borderRadius="0px"
                    _hover={{
                      bg: "rgb(255,112,67)",
                    }}
                  >
                    Sign up
                  </Button>
                )}
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
