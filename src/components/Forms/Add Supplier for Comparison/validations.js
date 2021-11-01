import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  rating: yup.string().required("Select Rating!"),
  companyName: yup.string().required("Company Name is required"),
  website: yup.string().required("Website is required"),
  email: yup.string().required("Email Name is required"),
  productCost: yup
    .number()
    .typeError("Amount is required")
    .positive("Should be positive!"),
  productShippingCost: yup
    .number()
    .typeError("Shipping Amount is required")
    .positive("Should be positive!"),
  productOtherCost: yup
    .number()
    .typeError("Other Amount is required")
    .positive("Should be positive!"),
  productTotalCost: yup
    .number()
    .typeError("Total Amount is required")
    .positive("Should be positive!"),
  productSalePrice: yup
    .number()
    .typeError("Sale Price is required")
    .positive("Should be positive!"),
  packagingOption: yup.string().required("Packaging Option Name is required"),
  leadTime: yup.string().required("Lead Time Name is required"),
  sampleInformation: yup
    .string()
    .required("Sample Information Name is required"),
  comments: yup.string().required("Sample Information Name is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields = [
  {
    name: "rating",
    type: "select",
    items: [
      {
        value: "null",
        label: "No Rating Availble",
      },
    ],
    placeholder: "Click to select",
    label: "Supplier Rating",
  },
  {
    name: "companyName",
    type: "text",
    placeholder: "e.g Toy Corporation",
    label: "Company Name",
  },
  {
    name: "website",
    type: "text",
    placeholder: "e.g toycorp.com",
    label: "Website",
  },
  {
    name: "email",
    type: "email",
    placeholder: "e.g john@smith.com",
    label: "Email",
  },
  {
    name: "productCost",
    type: "number",
    placeholder: "e.g $3.1",
    label: "Product Cost",
  },
  {
    name: "productShippingCost",
    type: "number",
    placeholder: "e.g $3.1",
    label: "Product Shipping Cost",
  },
  {
    name: "productOtherCost",
    type: "number",
    placeholder: "e.g $3.1",
    label: "Product Other Cost",
  },
  {
    name: "productTotalCost",
    type: "number",
    placeholder: "e.g $3.1",
    label: "Product Total Cost",
  },
  {
    name: "productSalePrice",
    type: "number",
    placeholder: "e.g $3.1",
    label: "Product Sale Price",
  },
  {
    name: "packagingOption",
    type: "text",
    placeholder: "e.g Black or White Box",
    label: "Packaging Option",
  },
  {
    name: "leadTime",
    type: "text",
    placeholder: "e.g 3 weeks",
    label: "Lead Time",
  },
  {
    name: "sampleInformation",
    type: "text",
    placeholder: "e.g Sample is free, just pay shipping cost",
    label: "Sample Information",
  },
  {
    name: "comments",
    type: "text",
    placeholder: "e.g This suppliers seems like the best option",
    label: "Comments",
  },
];
