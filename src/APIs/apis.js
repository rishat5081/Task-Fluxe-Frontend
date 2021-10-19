import {
  baseURL,
  getCompaniesNames,
  getSupplierManagementDashboard,
  uploadCompanyImages,
} from "./apiRoutes";

import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

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

export const uploadCompanyImage = async (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + uploadCompanyImages, formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
          callSuccessToast(`Uploading File ${percentage}%`);
        },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
export const getCompanyNamesSuucess = "Successfully Get the Company Names";
export const getCompanyNamesError =
  "Error getting the Company Names, Please Try Again";
