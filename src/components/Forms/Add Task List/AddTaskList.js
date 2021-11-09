import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Toast, Spinner } from "components";
import { callSuccessToast, callErrorToast } from "../../Toast/toast";
import { schema, fields_1 } from "./validations";
import { ModalContext } from "store/modalContext";
import { useState, useEffect } from "react";

import { createNewTaskListAPI } from "APIs/Product Launch/productLaunch";

const AddTaskList = ({ createNewTaskList, productInfo }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fieldsLoading, setFieldsLoading] = useState(true);

  //on form submission
  const onSubmit = async (data) => {
    await createNewTaskListAPI(
      data.taskListTitle,
      productInfo.productLaunchUUID
    )
      .then((response) => {
        if (response) {
          callSuccessToast("Task List Added Successfully");
          createNewTaskList(response.result);
          onHide();
          return;
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          callErrorToast("Error Adding Task List.");
          callErrorToast("Please Try Again");
          onHide();
        }
      });
  };

  // use effect used for loading the Modal
  useEffect(async () => {
    setFieldsLoading(false);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fieldsLoading === true ? (
        <Spinner />
      ) : (
        fields_1.map(({ name, label, value, type, ...rest }) => (
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

export default AddTaskList;
