import {
  addNote_toSupplier,
  addProduct_toSupplier,
  addSupplier,
  baseURL,
  deleteSupplierFiles,
  getAllSupplierNames,
  getCompany_SupplierInformation,
  updateSupplier_CompanyInfo,
  uploadSupplierFiles,
} from "../apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

// ------------------------------------  Start of Supplier Management Page ------------------------------------------------
//getting all the companies from the server end
export const addSupplierAPi = async (
  companyUUID,
  supplierEmail,
  supplierName,
  id
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addSupplier, {
        companyUUID,
        supplierEmail,
        supplierName,
        id,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//getting the company and supplier information for Drawer
export const getSupplierCompanyDetails = async (
  companyUUID,
  supplierUUID,
  id
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getCompany_SupplierInformation, {
        params: {
          companyUUID,
          supplierUUID,
          id,
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
  formData,
  id
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
        supplierPosition: formData.supplierPosition,
        id,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//adding the product to supplier
export const addProducttoSupplier = async (supplierUUID, productList, id) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + addProduct_toSupplier, {
        supplierUUID,
        productList,
        id,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//adding the notes to supplier
export const addNotestoSupplier = async (supplierUUID, note, id) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + addNote_toSupplier, {
        supplierUUID,
        note,
        id,
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
//adding the product to supplier
export const deleteAttachment = async (fileUUID) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + deleteSupplierFiles, {
        fileUUID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
export const onSuccessSupplier = "Supplier Added Successfully";
export const onFailedSupplier = "Error! Adding Supplier";
// ------------------------------------ End of Supplier Management Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */
