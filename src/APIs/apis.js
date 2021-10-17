import {
  baseURL,
  getCompaniesNames,
  getSupplierManagementDashboard,
} from "./apiRoutes";
import axios from "axios";

//getting all the companies from the server end
export const getCompanyNames = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getCompaniesNames)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const getSupplierManagementDashBoard_API = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getSupplierManagementDashboard)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const uploadCompanyImage = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getCompaniesNames)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
export const getCompanyNamesSuucess = "Successfully Get the Company Names";
export const getCompanyNamesError =
  "Error getting the Company Names, Please Try Again";
