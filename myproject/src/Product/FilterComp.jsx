

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const [category, setCategory] = useState(initialState || []);
  const initialOrder = searchParams.getAll("order");
  const [order, setOrder] = useState(initialOrder || "");

  // console.log(category)

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
    // console.log(params)
  }, [category, order]);

  const handlesort = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div className="sidebar_container">
      <h2>Sidebar</h2>
      <h3>Filter By</h3>
      <div>
        <input
          checked={category.includes("T-shirts")}
          type="checkbox"
          value="T-shirts"
          onChange={handlefilter}
        />
        <label>T-shirts</label>
      </div>
      <div>
        <input
          checked={category.includes("Pajamas")}
          type="checkbox"
          value="Pajamas"
          onChange={handlefilter}
        />
        <label>Pajamas</label>
      </div>
      <div>
        <input
          checked={category.includes("Jeans")}
          type="checkbox"
          value="Jeans"
          onChange={handlefilter}
        />
        <label>Footwear</label>
      </div>
      <div>
        <input
          checked={category.includes("Footwear")}
          type="checkbox"
          value="Footwear"
          onChange={handlefilter}
        />
        <label>Footwear</label>
      </div>

      <h3>Sort By order</h3>
      <div onChange={handlesort}>
        <input
          type="radio"
          name="sort_by"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Ascending order</label>
<br>
  
</br>
        <input
          type="radio"
          name="sort_by"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Descending order</label>
      </div>
    </div>
  );
};

export default FilterComp;