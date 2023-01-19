
import { GET_PRODUCT_SUCCESS } from "./actionType";
import { GET_PRODUCT_FAILURE } from "./actionType";
import { GET_PRODUCT_REQUEST } from "./actionType";


export const getProductsFailure = () => {
    return { type:GET_PRODUCT_FAILURE };
  };
  

export const getProductsSuccess = (payload) => {
    return { type:GET_PRODUCT_SUCCESS, payload };
  };
  
  export const getProductsRequest=()=>{
    return {
        type: GET_PRODUCT_REQUEST
    }
  }