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
          if (response.status === "Email Already Exists") {
            callErrorToast("Supplier Already Exists");
            return;
          } else {
            console.log(response);
            createSupplier({
              supplierUUID: response.supplier.supplierUUID,
              companyUUID: selectedCompanyUUID,
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
        .then((dbResponse) => dbResponse.companies)
        .then((response) => {
          if (response.length > 0) {
            const names = response.map((company) => {
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
          } else {
            setFieldsLoading(true);
            callErrorToast("No Company Found");
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            setFieldsLoading(true);
            callErrorToast(getCompanyNamesError);
            onHide();
          }
        });
    } catch (error) {
      console.error("Error: ", error);
      setFieldsLoading(true);
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
