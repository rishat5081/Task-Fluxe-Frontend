import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Toast, Spinner } from "components";
import { callSuccessToast, callErrorToast } from "../../Toast/toast";
import { schema, fields_1 } from "./validations";
import { ModalContext } from "store/modalContext";
import { useState, useEffect } from "react";
import {
  createNewTaskAPI,
  getProductStatus_Priorities,
} from "APIs/Product Launch/productLaunch";

const CreateNewSupplier = ({ createNewTask, values, userID }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fields, setFields] = useState(null);
  const [fieldsLoading, setFieldsLoading] = useState(true);
  const [statusData, setStatusData] = useState();
  const [priorityData, setPriorityData] = useState();
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState();
  const [selectedCompanyUUID, setSelectedCompanyUUID] = useState("");

  //on form submission
  const onSubmit = async (data) => {
    const statusObject = statusData.find(
      (statusInfo) => statusInfo.productLaunchDetailsStatusUUID === status
    );
    const priorityObject = priorityData.find(
      (priorityInfo) =>
        priorityInfo.productLaunchDetailsPriorityUUID === priority
    );

    createNewTaskAPI(
      values.productLaunchListsUUID,
      data.taskName,
      data.taskDate.toString(),
      data.taskAssignedTo,
      statusObject.productLaunchDetailsStatusUUID,
      priorityObject.productLaunchDetailsPriorityUUID,
      data.comments,
      userID
    )
      .then((result) => {
        if (result) {
          createNewTask(
            data,
            values.productLaunchListsUUID,
            statusObject,
            priorityObject
          );
          onHide();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectedStatus = (statusUUID) => {
    setStatus(statusUUID);
  };

  const selectedPriority = (priorityUUID) => {
    setPriority(priorityUUID);
  };

  const getStatusandPriority = async () => {
    try {
      //calling an api for the company names
      await getProductStatus_Priorities()
        .then((response) => {
          if (
            response.productLaunchDetailsPriority.length > 0 &&
            response.productLaunchDetailsStatus.length > 0
          ) {
            const priority = response.productLaunchDetailsPriority.map(
              (priority) => {
                return {
                  label: priority.productLaunchDetailsPriorityTitle,
                  value: priority.productLaunchDetailsPriorityUUID,
                };
              }
            );
            const status = response.productLaunchDetailsStatus.map((status) => {
              return {
                label: status.productLaunchDetailsTitle,
                value: status.productLaunchDetailsStatusUUID,
              };
            });
            fields_1[3].items = status;
            fields_1[4].items = priority;

            //setting the status and priority to the state to send back to the parent
            //make ease for the react

            setStatusData(response.productLaunchDetailsStatus);
            setPriorityData(response.productLaunchDetailsPriority);
            setFields(fields_1);
            setFieldsLoading(false);
            return response;
          } else {
            setFieldsLoading(true);
            callErrorToast("Try Again");
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
    await getStatusandPriority();
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
                    selectedValue={
                      name === "status" ? selectedStatus : selectedPriority
                    }
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
