import * as yup from "yup";

// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  supplierName: yup.string().required("Supplier is required"),
  productName: yup.string().required("Product Name is required"),
  invoiceTitle: yup.string().required("Invoice Name is required"),
  dueDate: yup
    .date()
    .typeError("Valid date is required")
    .required("Date is required"),
  invoiceAmount: yup
    .number()
    .typeError("Amount is required")
    .positive("Should be positive!"),
  // .moreThan(yup.ref("paidAmount")),
  paidAmount: yup
    .number()
    .typeError("Amount is required")
    .positive("Should be positive!")
    .lessThan(yup.ref("invoiceAmount")),
  status: yup.string().required("Status is required"),
  invoiceFile: yup.mixed().required("File is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const createInvoiceFields = [
  {
    name: "supplierName",
    type: "select",
    onSelect: "selectSupplier",
    items: [
      {
        value: "vcxSupplements",
        label: "VCX Supplements",
      },
      { value: "mattelToys", label: "Mattel Toys" },
      { value: "rcvSupplements", label: "RCV Supplements" },
    ],
    placeholder: "Click to select",
    label: "Supplier",
  },
  {
    name: "productName",
    type: "select",
    onSelect: "selectProduct",
    items: [
      {
        value: null,
        label: "Plese Select Product",
      },
    ],
    placeholder: "Click to select",
    label: "Product Name",
  },
  {
    name: "dueDate",
    type: "date",
    placeholder: "20/02/2021",
    label: "Due Date",
  },
  {
    name: "invoiceTitle",
    type: "input",
    placeholder: "Invoice for Games",
    label: "Invoice Name",
  },
  {
    name: "invoiceAmount",
    type: "number",
    placeholder: "$29.99",
    label: "Invoice Amount",
  },
  {
    name: "paidAmount",
    type: "number",
    placeholder: "$29.99",
    label: "Paid Amount",
  },
  {
    name: "status",
    type: "select",
    onSelect: "selectStatus",
    items: [
      { value: "paid", label: "Paid" },
      { value: "waiting", label: "Waiting" },
    ],
    label: "Status",
    placeholder: "Click to select status",
  },
  {
    name: "invoiceFile",
    // onChange: "selectInvoiceFile",
    type: "file",
    placeholder: "example.pdf",
    label: "Attachment",
  },
];
