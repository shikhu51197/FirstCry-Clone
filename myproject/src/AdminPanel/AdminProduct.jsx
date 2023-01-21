import {
  Box,
  CardBody,
  Grid,
  GridItem,
  Card,
  Stack,
  Heading,
  Image,
  Text,
  Button
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";



const AdminProduct = () => {
  const [data, setData] = useState([]);
  const getOrderData = async (url) => {
    return await axios.get(url);
  };
  useEffect(() => {
    if (data.length === 0) {
      getOrderData("https://burgundy-cow-kit.cyclic.app/MenKids").then(
        (res) => {
          console.log("shikha", res.data);
          setData(res.data);
        }
      );
    }
  }, [data.length]);


const deleteOrder = async (url, id) => {
      return await axios.delete(`${url}/${id}`);
    };

    const handleDelete = (id) => {
      deleteOrder("https://burgundy-cow-kit.cyclic.app/MenKids", id)
        .then((e) => getOrderData())
        .catch((e) => getOrderData());
    };

    const EditOrder = async (url, id) => {
      return await axios.patch(`${url}/${id}`);
    };




const handleEdit=(id) => {
 EditOrder("https://burgundy-cow-kit.cyclic.app/MenKids", id)
 .then((e) => getOrderData())
        .catch((e) => getOrderData());
}

  return (
    <div>
      
      <Box ml={[0, 300, 300, 350]} width={["60%", "60%", "70%", "77%"]} mt={100} >
            <Grid
              ml="50px"
              mt="10"
              gap={5}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {data.length > 0 &&
                data.map((el) => (
                  <GridItem>
                 
                      <Card maxW="sm">
                        <CardBody>
                    <Image src={el.image} />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Title:-{el.title}</Heading>
                      <Text color="gray">Brand:-{el.brand}</Text>
                      <Text color="gray">Category:-{el.category}</Text>
                      <Text color="gray">Gender:-{el.gender}</Text>
                      <Text color="gray">Mrp:-{el.mrp}</Text>
                      <Text color="gray">Totimg:-{el.totimg}</Text>
                      <Text color="gray">Id:-{el.id}</Text>
                      
                      <Box display="flex"><Button
                    onClick={() => handleDelete(el.id)}
                    bgColor={"red.500"}
                    _hover={{ bgColor: "red.400" }}
                    color={"whiteAlpha.900"}
                  w="70px"
                  >
                    Delete
                  </Button>
                  </Box>
                    </Stack>
                        </CardBody>
                      </Card>
              
                  </GridItem>
                ))}
            </Grid>
            
          </Box>
    </div>
  );
};

export default AdminProduct;
