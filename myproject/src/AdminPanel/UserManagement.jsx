import React from 'react'


import {

    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect } from "react";
  import { useState } from "react";




const UserManagement = () => {

    const getOrderData = async (url) => {
        return await axios.get(url);
      };
    
        const deleteOrder = async (url, id) => {
      return await axios.delete(`${url}/${id}`);
    };

      const [data, setData] = useState([]);
  
      useEffect(() => {
        if (data.length === 0) {
          getOrderData("https://burgundy-cow-kit.cyclic.app/Admin").then(
            (e) => setData(e.data)
          );
        }
      }, [data.length]);
    

      console.log(data);
 const handleDelete = (id) => {
      deleteOrder("https://burgundy-cow-kit.cyclic.app/Admin", id)
        .then((e) => getOrderData())
        .catch((e) => getOrderData());
    };





  return (
    <TableContainer  w={["90%","40%","60%" , "78%"]} margin="auto" mt={100}  mr={["30px"]}>
    <Table >
   
      <Thead>
        <Tr>
          <Th>S.No</Th>
          <Th>Name</Th>
          <Th>Mobile No.</Th>
          <Th>Alternate No.</Th>
          <Th>Pincode</Th>
         
        </Tr>
      </Thead>
      <Tbody>
        {data.map((elem) => (
          <Tr>
            <Td>{elem.id}</Td>
            <Td>{elem.firstname}</Td>
            <Td>{elem.lastname}</Td>
            <Td>{elem.adminemail}</Td>
            <Td>{elem.adminpassword}</Td>
            <Td>
              <Button
                onClick={() => handleDelete(elem.id)}
                bgColor={"red.500"}
                _hover={{ bgColor: "red.400" }}
                color={"whiteAlpha.900"}
              w="60px"
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default UserManagement
