//export const baseURL = "http://localhost:8521";
export const baseURL = "https://tranquil-sands-75428.herokuapp.com";
// ------------------------------------  Start of Supplier Management Page ------------------------------------------------
export const signUp = "/controller/signUp";
export const login = "/controller/login";
// ------------------------------------  Start of Supplier Management Page ------------------------------------------------

/**
 *
 *
 *
 *
 *
 *
 */
// ------------------------------------  Start of Supplier Management Page ------------------------------------------------
export const getCompaniesNames = "/company/getNames";
export const getSupplierManagementDashboard = "/company/getDashboard";
export const addSupplier = "/supplier/addSupplier";
export const getCompany_SupplierInformation =
  "/company/getCompany_SupplierInformation";
export const updateSupplier_CompanyInfo = "/supplier/updateCompanySupplierInfo";
export const addProduct_toSupplier = "/supplier/addProductToSupplier";
export const addNote_toSupplier = "/supplier/addNoteToSupplier";
export const uploadCompanyImages = "/company/uploadCompanyImage";
export const uploadSupplierFiles = "/supplier/uploadSupplierFiles";
export const deleteSupplierFiles = "/supplier/deleteAttachment";
// ------------------------------------ End of Supplier Management Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */
// ------------------------------------  Start of Invoice Management Page ------------------------------------------------
export const getAllSupplierNames = "/invoice/getAllSupplierNames";
export const getAllInvoices = "/invoice/getAllInvoices";
export const create_a_NewInvoices = "/invoice/createInvoice";
export const getSelectedInvoice = "/invoice/getSelectedInvoice";
export const updateInvoice = "/invoice/updateInvoice";
export const updateInvoiceAttachment = "/invoice/updateInvoiceAttachment";
export const deleteInvoiceAttachment = "/invoice/deleteInvoiceAttachment";

// ------------------------------------ End of Invoice Management Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */
// ------------------------------------  Start of Supplier Comparison Page ------------------------------------------------
export const addNewSupplierComp = "/supplierComparison/addNewSupplierComp";
export const getAllSupplierComp = "/supplierComparison/getAllComparisons";
export const getSupplierCompDetails =
  "/supplierComparison/getComparisonDetails";
export const updateComparisonDetailsRoute =
  "/supplierComparison/updateComparisonDetails";
export const getAllRating = "/supplierComparison/getAllRating";
export const addNewSupplierforComparison =
  "/supplierComparison/addNewSupplierforComparison";

// ------------------------------------  End of Supplier Comparison Page ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */
// ------------------------------------  Start of Product Launch Page ------------------------------------------------
export const getProductLaunchList = "/productLaunch/getProductLaunchList";
export const getProductNamesList = "/productLaunch/getProductNames";
export const addExistingProduct_toLaunch =
  "/productLaunch/addExistingProducttoLanch";
export const addNewProduct_toLaunch = "/productLaunch/addNewProducttoLaunch";
// ------------------------------------  End of Product Launch Page  ------------------------------------------------
/**
 *
 *
 *
 *
 *
 *
 */
// ------------------------------------  Start of Product Launch Tracking Page ------------------------------------------------
export const productLaunchDetails = "/productLaunch/getProductLaunchDetails";
export const updateProductLaunchDetails =
  "/productLaunch/updateProductLaunchDetails";
export const getPriorityAndStatus = "/productLaunch/getPriorityAndStatus";
export const createTaskList = "/productLaunch/createNewTaskList";
export const addNewTask = "/productLaunch/addNewTask";
export const editProductLaunchDetails =
  "/productLaunch/editProductLaunchDetails";
export const deleteProductLaunchDetails =
  "/productLaunch/deleteProductLaunchDetails";
export const checkedProductLaunchDetails =
  "/productLaunch/checkedProductLaunchDetails";
