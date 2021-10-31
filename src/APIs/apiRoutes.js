export const baseURL = "http://localhost:8521";

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
