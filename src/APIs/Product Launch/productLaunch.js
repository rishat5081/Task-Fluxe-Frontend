import {
  addExistingProduct_toLaunch,
  addNewProduct_toLaunch,
  baseURL,
  getProductLaunchList,
  getProductNamesList,
} from "APIs/apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

// ------------------------------------  Start of Product Launch Management Page ------------------------------------------------
//getting all the product launch list from the server end
//to display on the main table
export const getProductLaunchListAPI = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getProductLaunchList)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//getting all the product names from the server end
export const getProductList = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getProductNamesList)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//adding an existing product to the product launch the company and supplier
export const addExistingProducttoLanch = async (productUUID) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addExistingProduct_toLaunch, {
        productUUID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
//adding a new  product to the product launch the company and supplier
export const addNewProducttoLanch = async (productName) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addNewProduct_toLaunch, {
        productName,
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
// ------------------------------------ End of Supplier Management Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */
