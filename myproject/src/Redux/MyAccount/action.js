import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER_CHILD,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("https://burgundy-cow-kit.cyclic.app/UserDetails")
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`https://burgundy-cow-kit.cyclic.app/UserDetails/${id}`)
      .then((res) => {
        dispatch(userDeleted());
      })
      .catch((err) => console.log(err));
  };
};
