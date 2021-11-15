import {
  addExistingProduct_toLaunch,
  addNewProduct_toLaunch,
  addNewTask,
  baseURL,
  createTaskList,
  deleteProductLaunchDetails,
  editProductLaunchDetails,
  getPriorityAndStatus,
  getProductLaunchList,
  getProductNamesList,
  productLaunchDetails,
  updateProductLaunchDetails,
} from "APIs/apiRoutes";
import axios from "axios";
import { callSuccessToast } from "components/Toast/toast";

// ------------------------------------  Start of Product Launch Management Page ------------------------------------------------
//getting all the product launch list from the server end
//to display on the main table
export const getProductLaunchListAPI = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getProductLaunchList, { params: { id } })
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
// ------------------------------------ End of Product Launch Management Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */

// ------------------------------------ Start of Product Launch Tracking Management Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */

//getting all the task lists and also the task from the server
export const getProductTrackingDetails = async (productLaunchUUID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + productLaunchDetails, {
        params: {
          productLaunchUUID,
        },
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//creating new task list
//POST
export const createNewTaskListAPI = async (
  listName,
  productLaunchUUID,
  userID
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + createTaskList, {
        listName,
        productLaunchUUID,
        userID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//getting all the priority and status from server
export const getProductStatus_Priorities = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + getPriorityAndStatus)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//POST
export const createNewTaskAPI = async (
  productListUUID,
  taskName,
  date,
  assignedTo,
  status,
  priority,
  comments,
  userID
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + addNewTask, {
        productListUUID,
        taskName,
        date,
        assignedTo,
        status,
        priority,
        comments,
        userID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//PUT
export const updateProductLaunchInformation = async (
  productLaunchTrackerName,
  productLaunchTrackerComment,
  productLaunchUUID
) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + updateProductLaunchDetails, {
        productLaunchTrackerName,
        productLaunchTrackerComment,
        productLaunchUUID,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//PUT
export const updateProductLaunchDetailsRow = async (
  assigned,
  comments,
  date,
  priority,
  status,
  title,
  uuid
) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + editProductLaunchDetails, {
        assigned,
        comments,
        date,
        priority,
        status,
        title,
        uuid,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

//PUT
export const deleteProductLaunchDetailsRow = async (uuid) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseURL + deleteProductLaunchDetails, {
        uuid,
      })
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};
