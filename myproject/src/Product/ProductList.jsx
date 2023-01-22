import React, { useEffect, useState } from "react";
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

import { getProducts } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductList = ({ products}) => {
  
  const [SearchParams, setSearchParams] = useSearchParams();
  const [searchparam] = useSearchParams();
  const location = useLocation();
  const initialSort = SearchParams.getAll("sort");
  const [sort, setSortBy] = useState(initialSort[0]||"");
  // console.log("shivam",initialSort)
  const dispatch=useDispatch()

import { Link } from "react-router-dom";
const ProductList = ({ products }) => {

  console.log("products - - - > ", products);
  const [value,setValue]=useState("")
  const handlechage=(e)=>{
    setSortBy(e.target.value)
    


  }

  useEffect(()=>{
    let param = {};
    

    sort && (param.sort = sort);

    setSearchParams(param);
    if (location || products.length === 0) {
      const SortBy = searchparam.get("sort");
      const getProductParam = {
        params: {
          

          _sort: SortBy && "price",
          _order:SortBy
        },
      };
      dispatch(getProducts(getProductParam))
    }



  },[location.search,sort,setSearchParams])

 








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
        <Select placeholder="Most Popular" ml="2" alignItems="right" w="20%" value={value} 
        onChange={handlechage}
        
        >
          <option name="sortBy" defaultChecked={sort==="asc"} value="asc">Price Low To High</option>
          <option name="sortBy"defaultChecked={sort==="desc"}  value="desc">Price High To Low</option>
         
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
      <SimpleGrid 
        w="95%"
        minChildWidth="220px"
        m="auto"
        spacing="20px"
      >
        {   products&& products.length>0 && products.map((el) => (
          <Box>
          <Link to={`/singleproduct/${el.id}`}>
          <Box m="auto"  >
            <Image w="300px" m="auto" src={el.image} alt="" />
            <Text fontWeight="bold">{el.name}</Text>
            <Text fontWeight="light">{el.category.split("_")}</Text>
            <Text>₹{el.price}</Text>

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
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;