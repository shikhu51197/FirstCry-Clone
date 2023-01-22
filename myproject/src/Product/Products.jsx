import { Link } from "react-router-dom";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  Divider,
} from "@chakra-ui/react";
import FilterComp from './FilterComp';

import ProductList from './ProductList';
const products = () => {
  return (
    <Box w="95%" m="auto" mt="10px">
      <h1>Products Page</h1>

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="#">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Contact</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
      <Divider h="4" />
      <Box display={{ base: "grid", md: "grid", lg: "flex" }}>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" }}
          border="1px"
          borderColor="gray.200"
        >
          <FilterComp />
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }}
          border="1px"
          borderColor="gray.200"
        >
          <ProductList/>
        </Box>
      </Box>
    </Box>
  );
};
  

export default products;