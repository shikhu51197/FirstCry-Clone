import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Searchinput(){

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const location=useLocation();
    useEffect(() => {
        setFilteredProducts(
          products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }, [searchTerm, products]);
    

      useEffect(() => {
        fetch("https://burgundy-cow-kit.cyclic.app/MenKids")
          .then((res) => res.json())
          .then((data) => setProducts([...products,...data]));
      }, [location.pathname]);

      useEffect(() => {
        setSearchTerm("");
      }, [location.pathname]);
    
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    return (
        <Box
        flex="1"
        display={{ lg: "flex", base: "none" }}
        justifyContent="flex-end"
        alignItems="flex-end"
        pr="15px"
        flexDirection="column"
      >
        <InputGroup w="300px" size="sm">
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            type="text"
            placeholder="Search..."
            variant="flushed"
            borderBottom="1px solid black"
            focusBorderColor="1px solid black"
            value={searchTerm}
            onChange={handleSearch}
          />
        </InputGroup>
        {searchTerm && (
          <div
            style={{
              position: "absolute",
              zIndex: 999,
              fontWeight: "600",
              backgroundColor: "white",
              padding: "20px",
              top: "95px",
              overflow:"scroll",
              height:"350px",
              marginTop:"-50px"
            }}
          >
            {filteredProducts.slice(0, 6).map((product) => (
              <Link key={product.id} to={`/singleproduct/${product.id}`}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 10px",
                    alignItems: "center",
                    borderBottom: "2px solid gray",
                    gap: "50px",

                    width:"280px",
                    
                  }}
                  id="searchDiv"
                >
                  <img width="40px" src={product.image} alt="NA" />
                  <div
                    style={{
                      display: "flex",
                      textAlign: "start",
                      alignItems: "start",
                      width:"70%"
                    }}
                  >
                    <p>{product.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        </Box>
    )
}
