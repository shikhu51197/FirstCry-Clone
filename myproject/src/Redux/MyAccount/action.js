import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_CHILD_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER_CHILD,
});
const AddressUsers = (address) => ({
  type: types.GET_ADDRESS_USERS,
  payload: address,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8080/UserDetails")
      .then((res) => {
        console.log("res", res.data);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/UserDetails/${id}`)
      .then((res) => {
        console.log("res", res.data);
        dispatch(userDeleted());
      })
      .catch((err) => console.log(err));
  };
};
export const addressUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:8080/UserDetails")
      .then((res) => {
        console.log("address", res.data.address);
        dispatch(AddressUsers(res.data.address));
      })
      .catch((err) => console.log(err));
  };
};
