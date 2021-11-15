import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  // companyName: yup.string().required("Select Company name!"),
  taskName: yup.string().required("Task Name is required"),
  taskDate: yup.date().required("Task Date is required"),
  taskAssignedTo: yup.string().required("Assignedto Name is required"),
  status: yup.string().required("Status  is required"),
  priority: yup.string().required("Priority  is required"),
  comments: yup.string().required("Comments  is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields_1 = [
  {
    name: "taskList",
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
    label: "Select List",
  },
  {
    name: "taskName",
    type: "text",
    placeholder: "e.g Development",
    label: "Task Name",
  },
  {
    name: "taskDate",
    type: "date",
    placeholder: "e.g Development",
    label: "Task Date",
  },
  {
    name: "taskAssignedTo",
    type: "text",
    placeholder: "e.g Development",
    label: "Task Assigned To",
  },
  {
    name: "status",
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
    label: "Select Status",
  },
  {
    name: "priority",
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
    label: "Select Priority",
  },
  {
    name: "comments",
    type: "text",
    placeholder: "e.g Development",
    label: "Comments",
  },
];
