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

const Add_Task_Row = ({
  createNewTask,
  values,
  userID,
  taskList,
  updateAddedStatus,
}) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);
  const [fields, setFields] = useState(null);
  const [fieldsLoading, setFieldsLoading] = useState(true);
  const [statusData, setStatusData] = useState();
  const [priorityData, setPriorityData] = useState();
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState();
  const [selectedTaskList, setSelectedTaskList] = useState(null);

  //on form submission
  const onSubmit = async (data) => {
    // console.log(data);
    // console.log(new Date(data.taskDate).toDateString());
    const statusObject = statusData.find(
      (statusInfo) => statusInfo.productLaunchDetailsStatusUUID === status
    );
    const priorityObject = priorityData.find(
      (priorityInfo) =>
        priorityInfo.productLaunchDetailsPriorityUUID === priority
    );

    createNewTaskAPI(
      selectedTaskList,
      data.taskName,
      new Date(data.taskDate).toDateString(),
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
            selectedTaskList,
            statusObject,
            priorityObject,
            result.createdTask.productLaunchDetailsUUID
          );
          callSuccessToast("Task Added");
          updateAddedStatus();
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
  const selectTaskList = (taskListUUID) => {
    console.log(taskListUUID);
    setSelectedTaskList(taskListUUID);
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
            fields_1[0].items = taskList;
            fields_1[4].items = status;
            fields_1[5].items = priority;

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

    // fields_1[0].items = taskList;
    // setFields(fields_1);
    // setFieldsLoading(false);
  }, []);

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fieldsLoading === true ? (
          <Spinner />
        ) : (
          <div className="flex flex-row" style={{ display: "flex" }}>
            {fields.map(({ name, label, value, type, ...rest }) => (
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
                      <div className="p-2">
                        <Select
                          value={value}
                          label={label}
                          onChange={onChange}
                          selectedValue={
                            name === "status"
                              ? selectedStatus
                              : name === "priority"
                              ? selectedPriority
                              : selectTaskList
                          }
                          error={error}
                          {...rest}
                        />
                      </div>
                    )}
                  />
                ) : (
                  <div className="p-2">
                    <Input
                      key={name}
                      label={label}
                      error={errors[name]?.message}
                      type={type}
                      {...register(name)}
                      {...rest}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        )}
        <SubmitButton>Create</SubmitButton>
      </form>
    </div>
  );
};

export default Add_Task_Row;
