// import { useFormWithYup } from "hooks";

// import { Input, Select, SubmitButton } from "components";
// import { schema, fields } from "./validations";
// import * as S from "./styles";
// import { Fragment } from "react";
// import { Controller } from "react-hook-form";

// const CreateNewSupplier = ({ createSupplier }) => {
//   const { register, handleSubmit, errors, control } = useFormWithYup(schema);

//   const onSubmit = (data) => {
//     // do whatever you want with data
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {fields.map(({ name, label, type, ...rest }) => (
//         <Fragment key={label}>
//           {type === "select" ? (
//             <Controller
//               control={control}
//               name={name}
//               render={({
//                 field: { onChange, value },
//                 fieldState: { error },
//               }) => (
//                 <Select
//                   label={label}
//                   onChange={onChange}
//                   // selectedCompany={selectedCompany}
//                   error={error}
//                   {...rest}
//                 />
//               )}
//             />
//           ) : (
//             <Input
//               key={name}
//               label={label}
//               error={errors[name]?.message}
//               type={type}
//               {...register(name)}
//               {...rest}
//             />
//           )}
//         </Fragment>
//       ))}
//       <SubmitButton>Create</SubmitButton>
//     </form>
//   );
// };

// export default CreateNewSupplier;

import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Toast, Spinner } from "components";
import { callSuccessToast, callErrorToast } from "../../Toast/toast";
import { schema, fields_1 } from "./validations";
import { ModalContext } from "store/modalContext";
import { useState, useEffect } from "react";
import {
  getCompanyNames,
  getCompanyNamesSuucess,
  getCompanyNamesError,
} from "APIs/apis";
import {
  addSupplierAPi,
  onFailedSupplier,
  onSuccessSupplier,
} from "APIs/Supplier/supplierApi";

const CreateNewSupplier = ({ createSupplier }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fields, setFields] = useState(null);
  const [fieldsLoading, setFieldsLoading] = useState(true);
  const [companyData, setCompanyData] = useState([]);
  const [selectedCompanyUUID, setSelectedCompanyUUID] = useState("");

  //on form submission
  const onSubmit = async (data) => {
    const { supplierName, email } = data;
    //checking if the values are null or empty then the request will not be made to the server
    if (
      (selectedCompanyUUID, email, supplierName === null) ||
      !(selectedCompanyUUID, email, supplierName)
    ) {
      //displaying the toast to end the correct info
    } else {
      await addSupplierAPi(selectedCompanyUUID, email, supplierName)
        .then((response) => {
          if (response) {
            console.log(response);

            createSupplier({
              id: response.supplier.supplierUUID,
              companyName: response.companies.companyName,
              supplierName: response.supplier.supplierName,
              supplierEmail: response.supplier.supplierEmail,
              outStanding: `--`,
              paidInvoice: `--`,
              dueDate: `--`,
              status: `--`,
            });
            onHide();

            callSuccessToast(onSuccessSupplier);
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            callErrorToast(onFailedSupplier);
          }
        });
    }
  };

  const selectedCompany = (companyUUID) => {
    setSelectedCompanyUUID(companyUUID);
  };

  const callCompanyNameAPI = async () => {
    try {
      //calling an api for the company names
      await getCompanyNames()
        .then((response) => {
          console.log(response);
          if (response) {
            const names = response.companies.map((company) => {
              return {
                label: company.companyName,
                value: company.companyUUID,
              };
            });
            fields_1[0].items = names;
            setFields(fields_1);
            setCompanyData(names);
            callSuccessToast(getCompanyNamesSuucess);
            setFieldsLoading(false);
            return response;
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            callErrorToast(getCompanyNamesError);
            onHide();
          }
        });
    } catch (error) {
      console.error("Error: ", error);
      callToast(getCompanyNamesError);
      onHide();
    }
  };

  // use effect used for loading the companies names from the API
  useEffect(async () => {
    await callCompanyNameAPI();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fieldsLoading === true ? (
        <Spinner />
      ) : (
        fields.map(({ name, label, value, type, ...rest }) => (
          <Fragment key={label}>
            {type === "select" ? (
              <Controller
                control={control}
                name={name}
                value={value}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Select
                    value={value}
                    label={label}
                    onChange={onChange}
                    selectedValue={selectedCompany}
                    error={error}
                    {...rest}
                  />
                )}
              />
            ) : (
              <Input
                key={name}
                label={label}
                error={errors[name]?.message}
                type={type}
                {...register(name)}
                {...rest}
              />
            )}
          </Fragment>
        ))
      )}
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};

export default CreateNewSupplier;
