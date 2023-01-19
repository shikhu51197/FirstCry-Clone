import * as types from "./actionType";

const initialState = {
  UserData: [],
  AddressUsers: [],
  ChildUsers: [],
  loading: true,
};

const UserAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHILD_USERS:
      return {
        ...state,
        UserData: action.payload,
        loading: false,
      };
    case types.DELETE_USER_CHILD:
      return {
        ...state,
        loading: false,
      };
    case types.GET_ADDRESS_USERS:
      return {
        ...state,
        AddressUsers: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default UserAccountReducer;
