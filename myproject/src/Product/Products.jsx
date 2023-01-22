
import FilterComp from './FilterComp';

import ProductList from './ProductList';
const products = () => {
  return (
    <div>
      
      <div className="main">
        <div>
          <FilterComp/>
        </div>

        <div>
          <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default products;