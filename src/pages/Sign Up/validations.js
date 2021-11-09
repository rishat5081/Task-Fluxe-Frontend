import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  // companyName: yup.string().required("Select Company name!"),
  firstname: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields_1 = [
  {
    name: "firstname",
    type: "text",
    placeholder: "e.g Joe",
    label: "First Name",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "e.g Don",
    label: "Last Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "e.g dev@gmail.com",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    label: "Password",
  },
  {
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
  },
];
