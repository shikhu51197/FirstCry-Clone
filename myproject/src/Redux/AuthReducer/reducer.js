import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "./actionTypes";

const initalState = {
  isAuth: loadData("isAuth") || false,
  isLoading: false,
  isError: false,
};

const Reducer = (state = initalState, { type }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_LOGIN_SUCCESS:
      saveData("isAuth", true);
      return { ...state, isLoading: false, isAuth: true };
    case ADMIN_LOGIN_FAILURE:
      saveData("isAuth", false);
      return { ...state, isLoading: false, isError: true, isAuth: false };
    default:
      return state;
  }
};

function loadData(key) {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (e) {
    return undefined;
  }
}

//to save some data in the local storage
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export  {Reducer}