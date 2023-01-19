import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
  } from "./actiontypes";
  
  const initalState = {
    isAuth: false,
    isLoading: false,
    isError: false,
  };
  
  const Reducer = (state = initalState, { type }) => {
    switch (type) {
      case USER_LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case USER_LOGIN_SUCCESS:
        return { ...state, isLoading: false, isAuth: true };
      case USER_LOGIN_FAILURE:
        return { ...state, isLoading: false, isError: true, isAuth: false };
      default:
        return state;
    }
  };
  export  {Reducer}