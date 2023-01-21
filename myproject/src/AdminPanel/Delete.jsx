import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState } from "react";
  
  const Delete= () => {
    const [id, setId] = useState("");
    const toast = useToast();
  
    const handleChange = (e) => {
      setId(e.target.value);
    };
  
    const deleteByid = async (url) => {
      return await axios.delete(url);
    };
  
    const handleClick = () => {
      if (id) {
        deleteByid(`https://burgundy-cow-kit.cyclic.app/MenKids/${id}`)
          .then(
            (e) => (
              setId(""),
              toast({
                title: "Product Deleted",
                status: "warning",
                duration: 9000,
                isClosable: true,
              })
            )
          )
          .catch(
            (e) => (
              setId(""),
              toast({
                title: "Product Deleted",
                status: "warning",
                duration: 9000,
                isClosable: true,
              })
            )
          );
      }
      // if (id) {
      //   deleteByid(`https://burgundy-cow-kit.cyclic.app/GirlKids/${id}`)
      //     .then(
      //       (e) => (
      //         setId(""),
      //         toast({
      //           title: "Product Deleted",
      //           status: "warning",
      //           duration: 9000,
      //           isClosable: true,
      //         })
      //       )
      //     )
      //     .catch(
      //       (e) => (
      //         setId(""),
      //         toast({
      //           title: "Product Deleted",
      //           status: "warning",
      //           duration: 9000,
      //           isClosable: true,
      //         })
      //       )
      //     );
      // }
      // if (id) {
      //   deleteByid(`https://burgundy-cow-kit.cyclic.app/Footwear/${id}`)
      //     .then(
      //       (e) => (
      //         setId(""),
      //         toast({
      //           title: "Product Deleted",
      //           status: "warning",
      //           duration: 9000,
      //           isClosable: true,
      //         })
      //       )
      //     )
      //     .catch(
      //       (e) => (
      //         setId(""),
      //         toast({
      //           title: "Product Deleted",
      //           status: "warning",
      //           duration: 9000,
      //           isClosable: true,
      //         })
      //       )
      //     );
      // }mt={100}
    };
  
    return (
      <Box w={"50%"} margin="auto" mr={40} mt={150}>
        <FormControl mt={30}>
          <FormLabel>Delete Product</FormLabel>
          <Input
            placeholder="Give The Product ID"
            onChange={handleChange}
            value={id}
          />
        </FormControl>
        <Flex mt={4} justifyContent={"center"}>
          <Button
            onClick={handleClick}
            bgColor={"red.500"}
            _hover={{ bgColor: "red.400" }}
            color={"whiteAlpha.900"}
          >
            Delete
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default Delete;