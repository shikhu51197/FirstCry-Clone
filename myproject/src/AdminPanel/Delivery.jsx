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

const Delivery = () => {
  const getOrderData = async (url) => {
    return await axios.get(url);
  };

  const deleteOrder = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      getOrderData("https://burgundy-cow-kit.cyclic.app/checkout").then((e) =>
        setData(e.data)
      );
    }
  }, [data.length]);

  const handleDelete = (id) => {
    deleteOrder("https://burgundy-cow-kit.cyclic.app/checkout", id)
      .then((e) => getOrderData())
      .catch((e) => getOrderData());
  };

  return (
    <TableContainer
      w={["90%", "40%", "60%", "78%"]}
      margin="auto"
      mt={100}
      mr={["30px"]}
    >
      <Table>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>S.No</Th>
            <Th>Name</Th>
            <Th>Mobile No.</Th>
            <Th>Alternate No.</Th>
            <Th>Pincode</Th>
            <Th>State</Th>
            <Th>City</Th>
            <Th>Flat</Th>
            <Th>Area</Th>
            <Th>Landmark</Th>
            <Th>ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((elem) => (
            <Tr>
              <Td>{elem.id}</Td>
              <Td>{elem.name}</Td>
              <Td>{elem.mobile}</Td>
              <Td>{elem.alternumber}</Td>
              <Td>{elem.city}</Td>
              <Td>{elem.pincode}</Td>
              <Td>{elem.state}</Td>
              <Td>{elem.flat}</Td>
              <Td>{elem.area}</Td>
              <Td>{elem.landmark}</Td>
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
  );
};

export default Delivery;
