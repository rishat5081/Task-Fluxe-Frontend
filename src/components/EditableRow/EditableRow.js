import { getProductStatus_Priorities } from "APIs/Product Launch/productLaunch";
import { Icon, Spinner } from "components";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import * as Style from "./style";

const EditableRow = ({
  editAbleFormValues,
  handleEditFormChange,
  hideEditableRow,
}) => {
  const [loading, setloading] = useState(true);
  const [Status, setStatus] = useState(null);
  const [Priority, setPriority] = useState(null);

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

            setStatus(status);
            setPriority(priority);
            // fields_1[3].items = status;
            // fields_1[4].items = priority;

            //setting the status and priority to the state to send back to the parent
            //make ease for the react

            // setStatusData(response.productLaunchDetailsStatus);
            // setPriorityData(response.productLaunchDetailsPriority);
            // setFields(fields_1);
            // setFieldsLoading(false);
            setloading(false);
            return response;
          }
          //   else {
          //     // setFieldsLoading(true);
          //     // callErrorToast("Try Again");
          //   }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            // setFieldsLoading(true);
            // callErrorToast(getCompanyNamesError);
            // onHide();
          }
        });
    } catch (error) {
      console.error("Error: ", error);
      //   setFieldsLoading(true);
      //   callToast(getCompanyNamesError);
    }
  };

  useEffect(() => {
    getStatusandPriority();
  }, []);
  return (
    <Fragment>
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          <Style.Input
            defaultValue={editAbleFormValues.title}
            type="text"
            placeholder="Enter the Title"
            name="title"
            onChange={(event) => {
              handleEditFormChange(event);
            }}
          />
          <Style.Input
            defaultValue={editAbleFormValues.date}
            type="date"
            placeholder="Enter the Date"
            name="date"
            onChange={(event) => {
              handleEditFormChange(event);
            }}
          />
          <Style.Input
            defaultValue={editAbleFormValues.assigned}
            type="text"
            placeholder="Assigned To"
            name="assignedTo"
            onChange={(event) => {
              handleEditFormChange(event);
            }}
          />
          <Style.Select
            name="status"
            onChange={(event) => {
              handleEditFormChange(event);
            }}
          >
            {Status.map((optStatus) => (
              <option key={optStatus.productLaunchDetailsStatusUUID}>
                {" "}
                {optStatus.label}{" "}
              </option>
            ))}
          </Style.Select>
          <Style.Select
            name="priority"
            onChange={(event) => {
              handleEditFormChange(event);
            }}
          >
            {Priority.map((optStatus) => (
              <option key={optStatus.productLaunchDetailsPriorityUUID}>
                {" "}
                {optStatus.label}{" "}
              </option>
            ))}
          </Style.Select>
          <Style.Textarea
            type="text"
            placeholder="Enter the Comments"
            name="comments"
            defaultValue={editAbleFormValues.comments}
            onChange={(event) => {
              handleEditFormChange(event);
            }}
          />
          <div className="flex" style={{ display: "flex", marginLeft: "50%" }}>
            <button type="submit" style={{ backgroundColor: "transparent" }}>
              <img src="/assets/icons/saveIcon.png" width={20} />
            </button>
            <div onClick={() => hideEditableRow()}>
              <Icon name="close" />
            </div>
          </div>
        </>
      )}{" "}
    </Fragment>
  );
};

export default EditableRow;
