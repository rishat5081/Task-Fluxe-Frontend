import {
  baseURL,
  create_a_NewInvoices,
  getAllInvoices,
  getAllSupplierNames,
} from "../apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

// ------------------------------------  Start of Invoice Management Page ------------------------------------------------
export const getAllSupplier_Name = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getAllSupplierNames)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const getAllDashboardInvoices = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getAllInvoices)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const createAnInvoice = async (formdata) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + create_a_NewInvoices, formdata, {
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
