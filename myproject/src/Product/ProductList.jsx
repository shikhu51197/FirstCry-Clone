import React from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/AppReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";

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

const ProductList = () => {
  const dispatch = useDispatch();
  //   to store data
  const products = useSelector((store) => store.AppReducer.products);

  const Location = useLocation();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramobj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && "price",
        _order: order,
      },
    };
    dispatch(getProducts(paramobj));
  }, [Location.search]);

  return (
    <SimpleGrid w="95%" minChildWidth="220px" m="auto" spacing="20px">
      {products?.length > 0 &&
        products?.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
    </SimpleGrid>
  );
};

export default ProductList;
