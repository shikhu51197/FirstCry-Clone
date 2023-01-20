
import { GET_PRODUCT_SUCCESS } from "./actionType";
import { GET_PRODUCT_FAILURE } from "./actionType";
import { GET_PRODUCT_REQUEST } from "./actionType";
import axios from "axios";


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

  export const getData=(params=null)=>(dispatch)=>{
    dispatch(getProductsRequest())
      axios.get("https://burgundy-cow-kit.cyclic.app/MenKids",{params:{'q':params}}).then((r) => {
        dispatch(getProductsSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getProductsFailure());
      });

  }
  export default getData