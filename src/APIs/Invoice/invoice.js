import {
  baseURL,
  create_a_NewInvoices,
  getAllInvoices,
  getAllSupplierNames,
  getSelectedInvoice,
  updateInvoice,
  updateInvoiceAttachment,
} from "../apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

// ------------------------------------  Start of Invoice Management Page ------------------------------------------------
export const getAllSupplier_Name = async (userID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getAllSupplierNames, {
        params: {
          userID,
        },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const getAllDashboardInvoices = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getAllInvoices, {
        params: {
          id,
        },
      })
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

export const getInvoiceDetails = async (invoiceUUID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getSelectedInvoice, {
        params: {
          invoiceUUID,
        },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const updateInvoiceAPI = async (
  supplierUUID,
  productUUID,
  statusUUID,
  invoiceDate,
  invoicePaid,
  invoiceTitle,
  invoiceTotal,
  invoiceNotes,
  invoiceUUID
) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + updateInvoice, {
        supplierUUID,
        productUUID,
        statusUUID,
        invoiceDate,
        invoicePaid,
        invoiceTitle,
        invoiceTotal,
        invoiceNotes,
        invoiceUUID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//uploading the files to supplier
export const updateInvoiceFile = async (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + updateInvoiceAttachment, formData, {
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
