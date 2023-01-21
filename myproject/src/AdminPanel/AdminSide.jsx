import React, { useRef } from "react";

import {
  Text,
  Box,
  Flex,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Button,
  MenuItem,
  NavItem
} from "@chakra-ui/react";
import { FaRss } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { HiCode } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGift } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { useState } from "react";


const AdminSide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isLargerThan768] = useMediaQuery("(min-width: 485px)");
  const [ismaxThan768] = useMediaQuery("(min-width: 485px)");
  const [sortValue, setsortValue] = useState("1");

  return (
    <Box>
      <Box p={1}>
        <Flex>
          {!isLargerThan768 ? (
            <div>
              {!isLargerThan768 ? (
                <div>
                  <Box p={5}>
                    <GiHamburgerMenu
                      ref={btnRef}
                      colorScheme="black"
                      onClick={onOpen}
                    >
                      Open
                    </GiHamburgerMenu>
                  </Box>
                  <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      {/* <DrawerHeader> FILTER & SORT</DrawerHeader> */}

                      <DrawerBody>
                        <Box
                          className="filter"
                          textAlign="left"
                          mt={5}
                          pt={3}
                          pl={2}
                          width="100%"
                          height="100%"
                        >
                          <Text fontSize={15} as="b">
                            {/* FILTER & SORT */}
                          </Text>
                        </Box>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </div>
              ) : null}
            </div>
          ) : null}
          {!ismaxThan768 ? null : (
            <Box
              position="fixed"
              width={["40%", "40%", "30%", "19%"]}
              h="700vh"
              mt={100}
            >
              <Box
                className="filter"
                textAlign="left"
                mt={5}
                pt={3}
                pl={2}
                width="100%"
                height="100%"
              >
                <Flex
                  direction="column"
                  as="nav"
                  fontSize="sm"
                  color="gray.600"
                  aria-label="Main Navigation"
                >
                  <Box><Button icon={MdHome}>Home</Button></Box>
                  <Box><Button icon={FaRss}>Articles</Button></Box>
                  <Box><Button icon={HiCollection}>Collections</Button></Box>
                  <Box><Button icon={FaClipboardCheck}>Checklists</Button></Box>
                  <Box><Button icon={HiCode}>Integrations</Button></Box>
                  <Box><Button icon={AiFillGift}>Changelog</Button></Box>
                  <Box><Button icon={BsGearFill}>Settings</Button></Box>
                </Flex>
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default AdminSide;
