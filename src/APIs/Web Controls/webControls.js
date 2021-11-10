import { signUp, baseURL } from "../apiRoutes";

import axios from "axios";

//post
//sign up
export const signUpAPI = async (
  confirmpassword,
  email,
  firstname,
  lastName,
  password
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + signUp, {
        confirmpassword,
        email,
        firstname,
        lastName,
        password,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
