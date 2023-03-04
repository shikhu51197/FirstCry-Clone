import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/react";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const [category, setCategory] = useState(initialState || []);
  const initialOrder = searchParams.getAll("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handlefilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    const params = {
      category,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [category, order]);

  const handlesort = (e) => {
    setOrder(e.target.value);
  };

  return (
    <Box ml="8px">
      <Heading>Filter</Heading>
      <Box mt="8px">
        <input
          checked={category.includes("T-shirts")}
          type="checkbox"
          value="T-shirts"
          onChange={handlefilter}
        />
        <label>T-shirts</label>
      </Box>
      <Box mt="8px">
        <input
          checked={category.includes("Pajamas")}
          type="checkbox"
          value="Pajamas"
          onChange={handlefilter}
        />
        <label>Pajamas</label>
      </Box>
      <Box mt="8px">
        <input
          checked={category.includes("Jeans")}
          type="checkbox"
          value="Jeans"
          onChange={handlefilter}
        />
        <label>Footwear</label>
      </Box>
      <Heading>Sorting</Heading>
      <div onChange={handlesort}>
        <input
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Ascending order</label>
        <br></br>
        <input
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Descending order</label>
      </div>
    </Box>
  );
};

export default FilterComp;
