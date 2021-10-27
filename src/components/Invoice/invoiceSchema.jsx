import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  // companyPhone: yup.number().required("Company Phone is required!"),
  // companyWeb: yup.string().required("Company Website is required"),
  // companyAddress: yup.string().required("Company Address is required"),
  // supplierPhone: yup.number().required("Phone Number is required"),
  // supplierEmail: yup.string().required("Email is required"),
  // supplierPosition: yup.string().required("Position is required"),
  // supplierName: yup.string().required("Name is required"),
  Supplier: yup.string().required("Supplier is required"),
  Product: yup.string().required("Product Name is required"),
  invoiceTitle: yup.string().required("Invoice Name is required"),
  invoiceDueDate: yup
    .date()
    .typeError("Valid date is required")
    .required("Date is required"),
  invoiceTotal: yup
    .number()
    .typeError("Amount is required")
    .positive("Should be positive!"),
  // .moreThan(yup.ref("paidAmount")),
  invoicePaid: yup
    .number()
    .typeError("Amount is required")
    .positive("Should be positive!")
    .lessThan(yup.ref("invoiceTotal")),
  Status: yup.string().required("Status is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields = [
  {
    id: 1,
    name: "Supplier",
    type: "select",
    onSelect: "selectSupplier",
    items: [
      { value: "paid", label: "Paid" },
      { value: "waiting", label: "Waiting" },
    ],
    label: "Supplier",
    placeholder: "Click to select Supplier",
  },
  {
    id: 2,
    name: "Product",
    type: "select",
    onSelect: "selectProduct",
    items: [
      { value: "paid", label: "Paid" },
      { value: "waiting", label: "Waiting" },
    ],
    label: "Product",
    placeholder: "Click to select Product",
  },
  {
    id: 3,
    name: "invoiceTitle",
    type: "text",
    placeholder: "e.g Invoice of ...",
    label: "Enter Invoice Name",
  },
  {
    id: 4,
    name: "invoiceDueDate",
    type: "date",
    placeholder: "e.g 12-02-2021",
    label: "Select Due Date",
  },
  {
    id: 5,
    name: "invoiceTotal",
    type: "number",
    placeholder: "e.g $230",
    label: "Enter Total Amount",
  },
  {
    id: 6,
    name: "invoicePaid",
    type: "number",
    placeholder: "e.g $130",
    label: "Enter Paid Amount",
  },
  {
    id: 7,
    name: "Status",
    type: "select",
    onSelect: "selectStatus",
    items: [
      { value: "paid", label: "Paid" },
      { value: "waiting", label: "Waiting", selected: "selected" },
    ],
    label: "Status",
    placeholder: "Click to select Status",
  },
];
