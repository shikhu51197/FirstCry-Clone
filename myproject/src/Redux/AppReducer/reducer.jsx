import React from 'react'

import { GET_PRODUCT_REQUEST } from "./actionType";
import { GET_PRODUCT_SUCCESS } from "./actionType";
import { GET_PRODUCT_FAILURE } from "./actionType";


const  initialData={
    product:[],
    Loading:false,
    error:false,
    
}
const Reducer = (state,action) => {
    switch(action.type){
        case GET_PRODUCT_REQUEST :
            return {
                ...state,Loading:true
            }
         case GET_PRODUCT_SUCCESS :

         return {
            ...state,Loading:false,product:action.payload
         }
         case GET_PRODUCT_FAILURE:
            return{
                ...state,Loading:true,error:true
            }

            default :
            return state



    }

  
}

export default Reducer