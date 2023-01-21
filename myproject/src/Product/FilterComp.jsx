import React from "react";
import { Box, Text } from "@chakra-ui/react";
const FilterComp = () => {
  return (
    <Box border="1px" borderColor="gray.200" textAlign="left" lineHeight="10">
      <Text
        fontWeight="bold"
        fontSize="18"
        lineHeight="5"
        color="#1A202C"
        letterSpacing="2px"
      >
        Cloth & Shoes
      </Text>
      <Text fontSize="15" color="black" letterSpacing="2px">
        Top & T-shirts
      </Text>
      <Text fontSize="15" color="black" letterSpacing="2px">
       Athleisure and Sportswear
      </Text>
      <Text fontSize="15" color="black" letterSpacing="2px">
        Bath Time
      </Text>
      <Text fontSize="15" color="black" letterSpacing="2px">
        Caps Gloves and mittens
      </Text>
     
      <Text
        fontWeight="bold"
        fontSize="17"
        lineHeight="5"
        color="#1A202C"
        letterSpacing="2px"
        mt="20px"
      >
        DELIVERY TIME
      </Text>
      <Text fontSize="14" color="black" letterSpacing="2px">
        Next Day Delivery
      </Text>
      <Text fontSize="14" color="black" letterSpacing="2px">
        Same Day delivery
      </Text>
     
    </Box>
  );
};

export default FilterComp;