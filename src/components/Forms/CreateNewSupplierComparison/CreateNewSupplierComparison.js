import { Fragment, useContext, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useFormWithYup } from "hooks";
import { SubmitButton, Select, Spinner, Input } from "components";
import { schema, createComparisonSupplierFields } from "./validations";
import { ModalContext } from "store/modalContext";
import { callErrorToast, callSuccessToast } from "components/Toast/toast";
import { addNewSupplierComparison } from "APIs/Supplier Comparison/supplierComparison";

const CreateNewProductComparison = ({ onAddProduct }) => {
  /**
   *
   *   //start of states
   */
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fields, setFields] = useState(createComparisonSupplierFields);
  const [loadingStatus, setLoadingStatus] = useState(true);
  // /**
  //  *
  //  *   //end of states
  //  */
  // /**
  //  * start of API for getting the name of product
  //  */

  // /**
  //  * end of API
  //  */

  useEffect(() => {
    setLoadingStatus(false);
  }, []);
  const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
    addNewSupplierComparison(data.productName)
      .then((response) => {
        if (response) {
          onAddProduct({
            comparisonTitle: data.productName,
            comparisonUUID: response.productList.comparisonUUID,
            comparisonRatingID: "  -",
          });
          onHide();

          callSuccessToast("Product Added Successfully");
        }
      })
      .catch((err) => {
        if (err) {
          callErrorToast("Error Creating Product");
          onHide();
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loadingStatus === true ? (
        <Spinner />
      ) : (
        fields.map(({ name, label, onSelect, value, type, ...rest }, index) => (
          <Input
            key={name}
            label={label}
            error={errors[name]?.message}
            type={type}
            {...register(name)}
            {...rest}
          />
        ))
      )}
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};

export default CreateNewProductComparison;
