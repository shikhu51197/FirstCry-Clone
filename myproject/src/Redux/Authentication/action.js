import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actiontypes";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};

export const loginSuccessAction = () => {
  return { type: USER_LOGIN_SUCCESS };
};

export const loginFailureAction = () => {
  return { type: USER_LOGIN_FAILURE };
};

let details;
export const login =
  (email, password, toast, setemail, setpassword) => (dispatch) => {
    dispatch(loginRequestAction());
    return axios
      .get(`https://burgundy-cow-kit.cyclic.app/Users?email=${email}`)
      .then((res) => {
        checkdata(res.data, email);
        if (details == null) {
          toast({
            title: `Email does not exist`,
            status: "error",
            isClosable: true,
          });
          dispatch(loginFailureAction());
        } else {
          if (details.password == password) {
            toast({
              title: `Login successfull`,
              status: "success",
              isClosable: true,
            });
            dispatch(loginSuccessAction());
            setemail("");
            setpassword("");
            localStorage.setItem("user_details", JSON.stringify(details));
          } else {
            toast({
              title: `Wrong password`,
              status: "error",
              isClosable: true,
            });
            dispatch(loginFailureAction());
          }
        }
        details = null;
      })
      .catch((err) => {
        dispatch(loginFailureAction());
      });
  };

const checkdata = (data, enteredemail) => {
  data.forEach((el) => {
    if (el.email == enteredemail) {
      details = el;
      return;
    }
  });
};
