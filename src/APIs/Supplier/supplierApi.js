import {
  addNote_toSupplier,
  addProduct_toSupplier,
  addSupplier,
  baseURL,
  getCompany_SupplierInformation,
  updateSupplier_CompanyInfo,
  uploadSupplierFiles,
} from "../apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

//getting all the companies from the server end
export const addSupplierAPi = async (
  companyUUID,
  supplierEmail,
  supplierName
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addSupplier, {
        companyUUID,
        supplierEmail,
        supplierName,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//getting the company and supplier information for Drawer
export const getSupplierCompanyDetails = async (companyUUID, supplierUUID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getCompany_SupplierInformation, {
        params: {
          companyUUID,
          supplierUUID,
        },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//updating the company and supplier
export const updateSupplierCompanyInfo = async (
  companyUUID,
  supplierUUID,
  formData
) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + updateSupplier_CompanyInfo, {
        companyUUID,
        supplierUUID,
        companyAddress: formData.companyAddress,
        companyPhone: formData.companyPhone,
        companyWeb: formData.companyWeb,
        supplierEmail: formData.supplierEmail,
        supplierName: formData.supplierName,
        supplierPhone: formData.supplierPhone,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//adding the product to supplier
export const addProducttoSupplier = async (supplierUUID, productList) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + addProduct_toSupplier, {
        supplierUUID,
        productList,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//adding the notes to supplier
export const addNotestoSupplier = async (supplierUUID, note) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + addNote_toSupplier, {
        supplierUUID,
        note,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//uploading the files to supplier
export const addFilestoSupplier = async (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + uploadSupplierFiles, formData, {
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
export const onSuccessSupplier = "Supplier Added Successfully";
export const onFailedSupplier = "Error! Adding Supplier";
