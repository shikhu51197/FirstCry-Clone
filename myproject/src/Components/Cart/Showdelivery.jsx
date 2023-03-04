import React, { useState } from "react";
import {
  useDisclosure,
  FormLabel,
  Box,
  FormControl,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Tooltip,
  Select,
} from "@chakra-ui/react";
import SaveButton from "./SaveButton";

export const Showdelivery = () => {
  const intData = {
    name: "",
    mobile: "",
    alternumber: "",
    pincode: "",
    city: "",
    state: "",
    flat: "",
    area: "",
    landmark: "",
    loaction: "",
  };

  const [formData, setFormData] = useState(intData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        fontSize="12px"
        bg="#ff7043"
        color="white"
        onClick={onOpen}
        _hover={{ color: "black", bg: "gray.200" }}
      >
        ADD DELIVERY ADDRESS
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box bg="#f5f5f5 ">
            <DrawerCloseButton />
            <DrawerHeader>Change/Save Address</DrawerHeader>
          </Box>
          <DrawerBody>
            <FormControl>
              <Box>
                <Tooltip
                  hasArrow
                  label="enter valid name"
                  placement="top"
                  bg="#ff7043"
                >
                  <Input
                    mt={1}
                    type={"text"}
                    isRequired
                    name="name"
                    placeholder="Full Name*"
                    variant="flushed"
                    onChange={handleChange}
                  />
                </Tooltip>
              </Box>

              <Box display="flex" mt={5}>
                <Box>
                  <FormLabel>Mobile</FormLabel>
                  <Tooltip
                    hasArrow
                    label="enter valid mobile no."
                    placement="top"
                    bg="#ff7043"
                  >
                    <Input
                      type="number"
                      name="mobile"
                      placeholder="+91-Mobile Number"
                      variant="flushed"
                      maxLength="10"
                      onChange={handleChange}
                    />
                  </Tooltip>
                </Box>
                <Box pl={4}>
                  <FormLabel>Alternate No. (Optional)</FormLabel>
                  <Tooltip
                    hasArrow
                    label="enter valid no."
                    placement="top"
                    bg="#ff7043"
                  >
                    <Input
                      type="number"
                      name="alternumber"
                      maxLength="10"
                      placeholder="+91- Alternate No"
                      variant="flushed"
                      onChange={handleChange}
                    />
                  </Tooltip>
                </Box>
              </Box>

              <Box display="flex" mt={2}>
                <Box>
                  <Tooltip
                    hasArrow
                    label="enter valid pincode"
                    placement="top"
                    bg="#ff7043"
                  >
                    <Input
                      mt={5}
                      type="number"
                      name="pincode"
                      maxLength="6"
                      placeholder="Pincode*"
                      variant="flushed"
                      onChange={handleChange}
                    />
                  </Tooltip>
                </Box>
                <Box pl={4}>
                  <Tooltip
                    hasArrow
                    label="enter valid name"
                    placement="top"
                    bg="#ff7043"
                  >
                    <Input
                      mt={5}
                      type={"text"}
                      name="city"
                      placeholder="City*"
                      variant="flushed"
                      onChange={handleChange}
                    />
                  </Tooltip>
                </Box>
              </Box>
              <Box>
                <Tooltip
                  hasArrow
                  label="enter valid state"
                  placement="top"
                  bg="#ff7043"
                >
                  <Input
                    mt={5}
                    type={"text"}
                    name="state"
                    placeholder="State*"
                    variant="flushed"
                    onChange={handleChange}
                  />
                </Tooltip>
              </Box>
              <Box>
                <Tooltip
                  hasArrow
                  label="enter valid details"
                  placement="top"
                  bg="#ff7043"
                >
                  <Input
                    mt={5}
                    type={"text"}
                    name="flat"
                    placeholder="Flat/House No./Building*"
                    variant="flushed"
                    onChange={handleChange}
                  />
                </Tooltip>
              </Box>
              <Box>
                <Tooltip
                  hasArrow
                  label="enter valid detail"
                  placement="top"
                  bg="#ff7043"
                >
                  <Input
                    mt={5}
                    type={"text"}
                    name="area"
                    placeholder="Area/Locality*"
                    variant="flushed"
                    onChange={handleChange}
                  />
                </Tooltip>
              </Box>
              <Box>
                <Tooltip
                  hasArrow
                  label="enter valid landmark"
                  placement="top"
                  bg="#ff7043"
                >
                  <Input
                    mt={5}
                    type={"text"}
                    name="landmark"
                    placeholder="Landmark(optional)"
                    variant="flushed"
                    onChange={handleChange}
                  />
                </Tooltip>
              </Box>

              <Box>
                <Select
                  mt={5}
                  name="location"
                  onChange={handleChange}
                  placeholder="Select Location"
                >
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                </Select>
              </Box>

              {formData.name.length === 0 ||
              formData.alternumber.length === 0 ||
              formData.mobile.length === 0 ||
              formData.pincode.length === 0 ||
              formData.city.length === 0 ||
              formData.state.length === 0 ||
              formData.flat.length === 0 ||
              formData.area.length === 0 ||
              formData.landmark.length === 0 ||
              formData.location.length === 0 ? (
                <Box fontSize={12} color={"red"}>
                  Fill All the Crediantial correctly
                </Box>
              ) : null}
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button
              w="50%"
              bg="#9e9e9e"
              color="white"
              variant="outline"
              mr={3}
              onClick={onClose}
              _hover={{ color: "black", bg: "gray.200" }}
            >
              CANCEL
            </Button>

            <SaveButton formData={formData} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
