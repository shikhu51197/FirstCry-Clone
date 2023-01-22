import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import {
  SimpleGrid,
  Grid,
  Box,
  Heading,
  Divider,
  Sproductect,
  Image,
  Text,
  Button,
  GridItem,
} from "@chakra-ui/react";


const ProductCard = ({ product }) => {
  return (
    <Box>
    <Link to={`/singleproduct/${product.id}`}>
    <Box m="auto"  >
      <Image w="300px" m="auto" src={product.image} alt="" />
      <Text fontWeight="bold">{product.name}</Text>
      <Text fontWeight="light">{product.category.split("_")}</Text>
      <Text>₹{product.price}</Text>

      <Button
        w="100%"
        _hover={{ bg: "#433333" }}
        borderRadius="0"
        bgColor="#333333"
        color="white"
      >
        Add To Cart
      </Button>

     

      
    </Box>
    </Link>
    </Box>
  );
};

export default ProductCard;
