import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const ProductCard = ({ product }) => {
  const [flag, setflag] = useState(false);
  const toast = useToast();
  const handleClick = (id) => {
    setflag(true);
    axios
      .get(`https://burgundy-cow-kit.cyclic.app/MenKids/${id}`)
      .then((res) => {
        res = res.data;
        res = { ...res, quantity: 1 };
        let LSdata = JSON.parse(localStorage.getItem("cartdata")) || [];
        localStorage.setItem("cartdata", JSON.stringify([...LSdata, res]));
        toast({
          title: `Item added Successfully`,
          status: "success",
          isClosable: true,
        });
      });
  };
  return (
    <Box>
      <Box m="auto">
        <Link to={`/singleproduct/${product.id}`}>
          <Image w="300px" m="auto" src={product.image} alt="" />
        </Link>
        <Text fontWeight="bold">{product.name}</Text>
        <Text fontWeight="light">{product.category.split("_")}</Text>
        <Text>₹{product.price}</Text>

        {flag == false && (
          <Button
            w="100%"
            _hover={{ bg: "#433333" }}
            borderRadius="0"
            bgColor="#333333"
            color="white"
            onClick={() => handleClick(product.id)}
          >
            Add To Cart
          </Button>
        )}
        {flag == true && (
          <Link to="/cart">
            <Button
              w="100%"
              _hover={{ bg: "#433333" }}
              borderRadius="0"
              bgColor="#333333"
              color="white"
            >
              Go To Cart->
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
