import React from "react";
import {
  SimpleGrid,
  Grid,
  Box,
  Heading,
  Divider,
  Select,
  Image,
  Text,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
  console.log("products - - - > ", products);
  return (
    <Box>
      <Heading
        p="2"
        textAlign="left"
        fontWeight="light"
        fontSize="25"
        lineHeight="5"
        color="#1A202C"
        letterSpacing="2px"
      >
        MEN'S
      </Heading>
      <Divider h="2" />
      <Box
        display="flex"
        m="auto"
        w="98%"
        justifyContent="right"
        alignItems="center"
      >
        SORT BY
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="20%">
          <option value="ascending">Price Low To High</option>
          <option value="descending">Price High To Low</option>
          <option value="bestMatches">Best Matches</option>
          <option value="topSellers">Top Sellers</option>
        </Select>
      </Box>
      <Box
        m="auto"
        w="98%"
        mt="2"
        mb="2"
        display="flex"
        justifyContent="space-evenly"
      >
       
      </Box>
      <SimpleGrid columns={3}
        // w="95%"
        // minChildWidth="220px"
        // m="auto"
        // spacing="20px"
      >
        {   products&& products.length>0 && products.map((el) => (
          <Box>
          <Link to={`/singleproduct/${el.id}`}>
          <Box m="auto"  >
            <Image w="300px" m="auto" src={el.image} alt="" />
            <Text fontWeight="bold">{el.name}</Text>
            <Text fontWeight="light">{el.category.split("_")}</Text>
            <Text>₹{el.price}</Text>
           
            
          </Box>
          </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;