import {
  addSupplier,
  baseURL,
  getCompany_SupplierInformation,
  updateSupplier_CompanyInfo,
} from "../apiRoutes";
import axios from "axios";

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

export const onSuccessSupplier = "Supplier Added Successfully";
export const onFailedSupplier = "Error! Adding Supplier";
