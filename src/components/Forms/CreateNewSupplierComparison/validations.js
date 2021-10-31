import * as yup from "yup";

// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  productName: yup.string().required("Product is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const createComparisonSupplierFields = [
  {
    name: "productName",
    type: "input",
    placeholder: "Enter Product Name",
    label: "Products",
  },
];
