

import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  getProductsRequest } from '../Redux/AppReducer/action'
import { getProductsSuccess } from '../Redux/AppReducer/action'
import { getProductsFailure } from '../Redux/AppReducer/action'

import axios from "axios"



const ProductList = () => {
    
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getProductsRequest)
      axios.get("https://burgundy-cow-kit.cyclic.app/MenKids").then((r) => {
        dispatch(getProductsSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getProductsFailure);
      });
      
        





    },[])






  return (
    <div></div>
  )
}

export default ProductList