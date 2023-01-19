import {
    ADMIN_LOGIN_FAILURE,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
  } from "./actionTypes";
  
  const initalState = {
    isAuth: false,
    isLoading: false,
    isError: false,
  };
  
  const Reducer = (state = initalState, { type }) => {
    switch (type) {
      case ADMIN_LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case ADMIN_LOGIN_SUCCESS:
        return { ...state, isLoading: false, isAuth: true };
      case ADMIN_LOGIN_FAILURE:
        return { ...state, isLoading: false, isError: true, isAuth: false };
      default:
        return state;
    }
  };
  export  {Reducer}