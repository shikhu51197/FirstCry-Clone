import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Flex,
  Text,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Image

} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";



// import { Link } from "react-router-dom";
import UserManagement from './UserManagement';

const AdminSide = ({ setShowPage }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [isLargerThan768] = useMediaQuery("(min-width: 485px)");
    const [ismaxThan768] = useMediaQuery("(min-width: 485px)");
  
 
  return (
    <Box  >
        <Box p={1} border ="3px solid blue">
        <Flex>
          {!isLargerThan768 ? (
            <div>
              {!isLargerThan768 ? (
                <div>
                  <Box p={5}  border ="3px solid red">
                    <GiHamburgerMenu
                      ref={btnRef}
                      colorScheme="teal"
                      onClick={onOpen}
                      border ="3px solid red"
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
                          Admin Panel
                          </Text>
                          <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" mt={5} textAlign="left" display="flex">
                        <Box pr={2} mt={5}><Image w="20px" h="20px" src="https://tse4.mm.bing.net/th?id=OIP.s5ks8hCxIrrGy09rFRF21wHaHa&pid=Api&P=0" />
                  
                        
                 
                
                  
                  
                        </Box>  <Button pr={1} mt={5}  onClick={() => setShowPage("Deshboard")}>DeshBoard</Button> 
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>



                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" mt={5} textAlign="left" display="flex">
                        <Box pr={2} mt={5}><Image w="20px" h="20px" src="https://tse4.mm.bing.net/th?id=OIP.s5ks8hCxIrrGy09rFRF21wHaHa&pid=Api&P=0" />
                        </Box> <Button pr={1} mt={5}  onClick={() => setShowPage("UserManagement")}>UserManagement</Button>
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" mt={5} textAlign="left" display="flex">
                        <Box pr={2} mt={5}><Image w="20px" h="20px" src="https://tse4.mm.bing.net/th?id=OIP.s5ks8hCxIrrGy09rFRF21wHaHa&pid=Api&P=0" />
                        </Box> <Button pr={1} mt={5} onClick={() => setShowPage("UserManagement")}>
                        OrderManagement</Button>
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>

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
// border="2px solid black"
            mt={100} 
              position="fixed"
              width={["40%", "40%", "30%", "18%"]}
              h="700vh"
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
                <Text fontSize={15} as="b">
                Admin Panel
                </Text>

                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" mt={5} textAlign="left" display="flex">
                        <Box pr={2} mt={5}><Image w="20px" h="20px" src="https://tse4.mm.bing.net/th?id=OIP.fY3Gj76BzVyvIxvrdmum3wHaHa&pid=Api&P=0" />
                        </Box><Button pr={1} mt={5} w="full"
                  variant="ghost"
                  color="blue"   bg="black"    _hover={{ bg: "RGBA(0, 0, 0, 0.24)" }} onClick={() => setShowPage("Deshboard")}>DeshBoard</Button> 
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>



                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" mt={5} textAlign="left" display="flex">
                        <Box pr={2} mt={5}><Image w="20px" h="20px" src="https://tse3.mm.bing.net/th?id=OIP.k7dE2dftQijg3KbpTyIObAHaHa&pid=Api&P=0" />
                        </Box> <Button pr={1} mt={5}  w="full"
                  variant="ghost"
                  colorScheme="blue"  bg="black"     _hover={{ bg: "RGBA(0, 0, 0, 0.24)" }} onClick={() => setShowPage("UserManagement")}>UserManagement</Button>
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" mt={5} textAlign="left" display="flex">
                        <Box pr={2} mt={5}><Image w="20px" h="20px" src="https://tse1.mm.bing.net/th?id=OIP.T-8gifbzqaoes_NXS8cdPAHaHa&pid=Api&P=0" />
                        </Box> <Button pr={1} mt={5}  w="full"
                  variant="ghost"
                  colorScheme="blue"  bg="black"   _hover={{ bg: "RGBA(0, 0, 0, 0.24)" }} onClick={() => setShowPage("OrderManagement")}> OrderManagement</Button>
                        </Box>
                        <AccordionIcon mt={5} />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>



              </Box>
            </Box>
          )}

        
        </Flex>
      </Box>
    </Box>
  )
}

export default AdminSide