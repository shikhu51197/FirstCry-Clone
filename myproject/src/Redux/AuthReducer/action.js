import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "./actionTypes";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const loginRequest = () => {
  return { type: ADMIN_LOGIN_REQUEST };
};

const loginSuccess = () => {
  return { type: ADMIN_LOGIN_SUCCESS };
};

const loginFailure = () => {
  return { type: ADMIN_LOGIN_FAILURE };
};

let details;
export const loginadmin =
  (adminemail, adminpassword, toast, setadminpassword, setAdminEmail) =>
  (dispatch) => {
    dispatch(loginRequest());
    return axios
      .get(`https://burgundy-cow-kit.cyclic.app/Admin?adminemail=${adminemail}`)
      .then((res) => {
        checkdata(res.data, adminemail);
        if (details == null) {
          toast({
            title: `Email does not exist`,
            status: "error",
            isClosable: true,
          });
          dispatch(loginFailure());
        } else {
          if (details.adminpassword == adminpassword) {
            toast({
              title: `Login successfull`,
              status: "success",
              isClosable: true,
            });
            dispatch(loginSuccess());
            setAdminEmail("");
            setadminpassword("");
            localStorage.setItem("admin_details", JSON.stringify(details));
          } else {
            toast({
              title: `Wrong password`,
              status: "error",
              isClosable: true,
            });
            dispatch(loginFailure());
          }
        }
        details = null;
      })
      .catch((err) => {
        dispatch(loginFailure());
      });
  };

const checkdata = (data, enteredemail) => {
  data.forEach((el) => {
    if (el.adminemail == enteredemail) {
      details = el;
      return;
    }
  });
};
