import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const SaveButton = ({ formData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const intUserDetail = {
    name: formData.name,
    mobile: formData.mobile,
    alternumber: formData.alternumber,
    city: formData.city,
    pincode: formData.pincode,
    state: formData.state,
    flat: formData.flat,
    area: formData.area,
    landmark: formData.landmark,
    location: formData.location,
    id: "",
  };

  const done = async (url, data) => {
    try {
      return await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const [userData, setUserData] = useState(null);

  const handleClickCofirm = () => {
    setUserData({ ...intUserDetail });
  };

  const handleClickonYes = () => {
    done(`https://burgundy-cow-kit.cyclic.app/checkout`, userData)
      .then((e) =>
        toast({
          title: "Address Saved Successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      )
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Button
        onClick={() => (onOpen(), handleClickCofirm())}
        w="50%"
        rightIcon={<FaArrowCircleRight />}
        bgColor="#ff7043"
        _hover={{ color: "black", bg: "gray.200" }}
        color={"whiteAlpha.900"}
        disabled={
          formData.name.length === 0 ||
          formData.alternumber.length === 0 ||
          formData.mobile.length === 0 ||
          formData.pincode.length === 0 ||
          formData.city.length === 0 ||
          formData.state.length === 0 ||
          formData.flat.length === 0 ||
          formData.area.length === 0 ||
          formData.landmark.length === 0 ||
          formData.location.length === 0
        }
      >
        Save Address
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader color={"blue.400"}>
            {formData.name} Please Check Your Details
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody display={"flex"} flexDir={"column"} gap={2}>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Name : </span>
              {formData.name}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Mobile : </span>
              {formData.mobile}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Alternate No. : </span>

              {formData.alternumber}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>City : </span>

              {formData.city}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>State : </span>

              {formData.state}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Flat/HouseNo. : </span>

              {formData.flat}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Landmark : </span>

              {formData.landmark}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Location: </span>
              {formData.location}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Pincode: </span>
              {formData.pincode}
            </Box>
            <Box fontSize={16} fontWeight={"semibold"}>
              <span style={{ color: "#3182CE" }}>Area: </span>
              {formData.area}
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="red">
              No
            </Button>
            <Button
              bgColor={"blue.400"}
              _hover={{ bgColor: "blue.300" }}
              color={"whiteAlpha.900"}
              ml={3}
              onClick={handleClickonYes}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SaveButton;
