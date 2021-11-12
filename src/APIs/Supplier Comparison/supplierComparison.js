import {
  baseURL,
  addNewSupplierComp,
  getAllSupplierComp,
  getSupplierCompDetails,
  updateComparisonDetailsRoute,
  getAllRating,
  addNewSupplierforComparison,
} from "APIs/apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

// ------------------------------------  Start of Supplier Comparison Page ------------------------------------------------
//getting all the product names from the server end
export const addNewSupplierComparison = async (productName) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addNewSupplierComp, { productName })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//adding a new product for the supplier  comparison
export const getAllSupplierComparison = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getAllSupplierComp, { params: { id } })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//getting the supplierComparison details of the one product
export const getSupplierComparisonDetails = async (comparisonUUID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getSupplierCompDetails, {
        params: {
          comparisonUUID,
        },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const updateComparisonDetails = async (
  comparisonUUID,
  compTitle,
  comparisonDescription,
  comparisonStatus
) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + updateComparisonDetailsRoute, {
        comparisonUUID,
        compTitle,
        comparisonDescription,
        comparisonStatus,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//getting rating for the add supplier
export const getRatingDetails = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getAllRating)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const addNewSupplierforComp = async (
  comparisonUUID,
  rating,
  companyName,
  website,
  email,
  productCost,
  productShippingCost,
  productOtherCost,
  productTotalCost,
  productSalePrice,
  productExpectedRevenue,
  packagingOption,
  leadTime,
  sampleInformation,
  comments,
  userID
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addNewSupplierforComparison, {
        comparisonUUID,
        rating,
        companyName,
        website,
        email,
        productCost,
        productShippingCost,
        productOtherCost,
        productTotalCost,
        productSalePrice,
        productExpectedRevenue,
        packagingOption,
        leadTime,
        sampleInformation,
        comments,
        userID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
