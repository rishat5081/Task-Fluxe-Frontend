import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  title: yup.string().required("Select Status!"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields_1 = [
  {
    name: "title",
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
    label: "Supplier Status",
  },
];
