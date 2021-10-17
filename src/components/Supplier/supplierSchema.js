import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  companyPhone: yup.number().required("Company Phone is required!"),
  companyWeb: yup.string().required("Company Website is required"),
  companyAddress: yup.string().required("Company Address is required"),
  supplierPhone: yup.number().required("Phone Number is required"),
  supplierEmail: yup.string().required("Email is required"),
  supplierPosition: yup.string().required("Position is required"),
  supplierName: yup.string().required("Name is required"),
  // contactNumber: yup
  //   .number()
  //   .typeError("Contact Number is required")
  //   .positive("Should be positive!"),
  // mobileNumber: yup
  //   .number()
  //   .typeError("Contact Number is required")
  //   .positive("Should be positive!"),
  // paidAmount: yup
  //   .number()
  //   .typeError("Amount is required")
  //   .positive("Should be positive!"),
  // status: yup.string().required("Status is required"),

  // attachment: yup.mixed().required("File is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields = [
  {
    id: 1,
    name: "companyPhone",
    type: "number",
    placeholder: "1021-82115-2",
    label: "Phone Number",
  },
  {
    id: 2,
    name: "companyWeb",
    type: "text",
    placeholder: "e.g www.kitkat.com",
    label: "Company Website",
  },
  {
    id: 3,
    name: "companyAddress",
    type: "text",
    placeholder: "e.g 140-West USA",
    label: "Company Address",
  },
];

export const supplierFields = [
  {
    id: 4,
    name: "supplierName",
    type: "text",
    placeholder: "e.g John Smith",
    label: "Contact Name",
  },
  {
    id: 5,
    name: "supplierPosition",
    type: "text",
    placeholder: "e.g CEO",
    label: "Company Position",
  },
  {
    id: 6,
    name: "supplierEmail",
    type: "email",
    placeholder: "e.g john@smith.com",
    label: "Email",
  },
  {
    id: 7,
    name: "supplierPhone",
    type: "number",
    placeholder: "e.g +982 961 000",
    label: "Phone Number",
  },
  // {
  //   name: "mobileNumber",
  //   type: "number",
  //   placeholder: "0010544120321",
  //   label: "Mobile Number",
  // },
  // {
  //   name: "contactNumber",
  //   type: "number",
  //   placeholder: "0010544120321",
  //   label: "LandLine Number",
  // },
  // {
  //   name: "paidAmount",
  //   type: "number",
  //   placeholder: "$29.99",
  //   label: "Paid Amount",
  // },
  // {
  //   name: "status",
  //   type: "select",
  //   items: [
  //     { value: "paid", label: "Paid" },
  //     { value: "waiting", label: "Waiting" },
  //   ],
  //   label: "Status",
  //   placeholder: "Click to select status",
  // },
  // {
  //   name: "attachment",
  //   type: "file",
  //   placeholder: "example.pdf",
  //   label: "Attachment",
  // },
];
