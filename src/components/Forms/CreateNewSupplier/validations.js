// import * as yup from "yup";

// // IMPORTANT!
// // Schema object's property 'key' should match with fields item's 'name'
// // property value. Otherwise react hook form can't control the related input

// // Schema is for rules to check inputs
// // Error messages can get from store or constant by locale
// export const schema = yup.object({
//   companyName: yup.string().required("Company name can not be empty!"),
//   contactName: yup.string().required("Contact name can not be empty!"),
//   email: yup.string().email().required("Email address can not be empty!"),
// });

// // Fields for the form
// export const fields = [
//   { name: "companyName", placeholder: "TaskFluxe", label: "Company Name" },
//   { name: "contactName", placeholder: "John Doe", label: "Contact Name" },
//   {
//     name: "email",
//     placeholder: "example@teamfluxe.com",
//     label: "Email Address",
//   },
// ];

import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  companyName: yup.string().required("Select Company name!"),
  supplierName: yup.string().required("Supplier Name is required"),
  email: yup.string().required("Email Name is required"),
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
export const fields_1 = [
  {
    name: "companyName",
    type: "select",
    items: [
      {
        value: "vcxSupplements",
        label: "VCX Supplements",
      },
      { value: "mattelToys", label: "Mattel Toys" },
      { value: "rcvSupplements", label: "RCV Supplements" },
    ],
    placeholder: "Click to select",
    label: "Company Name",
  },
  {
    name: "supplierName",
    type: "text",
    placeholder: "e.g John Smith",
    label: "Supplier Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "e.g john@smith.com",
    label: "Email",
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
