import {
  deleteProductLaunchDetailsRow,
  updateProductLaunchDetailsRow,
} from "APIs/Product Launch/productLaunch";
import { Icon, Spinner } from "components";
import EditableRow from "components/EditableRow/EditableRow";
import ReadOnlyRow from "components/ReacOnlyRow/ReadOnlyRow";
import { callSuccessToast } from "components/Toast/toast";
import { useState } from "react";
import * as S from "./styles";

const TaskTable = ({ columns, table, onToggle, updateTable }) => {
  const [userEditing, setUserEditing] = useState(null);
  const [loading, setloading] = useState(false);
  const [userInfo, setuserInfo] = useState(table);
  const [editAbleFormValues, setEditAbleFormValues] = useState({
    assigned: "",
    comments: "",
    date: "",
    priority: "",
    status: "",
    title: "",
    uuid: "",
  });

  const displayAddTaskForm = (id) => {
    const addTask = document.getElementById(id);
    // if (addTask.style.display === "block") addTask.style.display = "none";
    // elses
    addTask.style.display = "block";
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    console.log(editAbleFormValues.date);
    const newDate = getFormattedDate(editAbleFormValues.date);
    console.log(editAbleFormValues.date);
    await updateProductLaunchDetailsRow(
      editAbleFormValues.assigned,
      editAbleFormValues.comments,
      editAbleFormValues.date,
      editAbleFormValues.priority,
      editAbleFormValues.status,
      editAbleFormValues.title,
      editAbleFormValues.uuid
    )
      .then((result) => {
        if (result.status === "Updated") callSuccessToast(result.status);
        updateTable();
      })
      .catch((err) => {
        console.log(err);
      });
    setUserEditing(null);

    //updating the Tracker Product js file, calling the api again to render the inforamtion
  };

  function getFormattedDate(date) {
    let tempDate = date.split("-") || date.split("/");
    let year = tempDate[0].split("0");
    return tempDate[1] + "/" + tempDate[2] + "/" + year[1];
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    if (fieldName === "date") {
      const tempDate = getFormattedDate(fieldValue);
      const newFormData = { ...editAbleFormValues };
      editAbleFormValues[fieldName] = tempDate;
    } else {
      const newFormData = { ...editAbleFormValues };
      editAbleFormValues[fieldName] = fieldValue;
    }
  };

  const handleEditAbleRow = (event, column) => {
    const formValues = {
      assigned: column.assigned,
      comments: column.comment,
      date: column.date,
      priority: column.priority.props.chipStyle,
      status: column.status.props.children[0],
      title: column.title.props.children[1],
      uuid: column.uuid,
    };
    setEditAbleFormValues(formValues);

    setUserEditing(column.uuid);
  };
  const handleDeleteRow = async (event, column) => {
    await deleteProductLaunchDetailsRow(column.uuid)
      .then((result) => {
        if (result.status === "Deleted") callSuccessToast("Task Deleted");
        updateTable();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hideEditableRow = () => {
    setUserEditing(null);
  };

  return (
    <S.Table>
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          <S.TableHeader columnCount={columns.length}>
            <div className="flex" style={{ display: "flex", margin: "10px" }}>
              <div
                style={{
                  margin: "0px 20px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Task
              </div>
              <div
                style={{
                  margin: "0px 80px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Due Date
              </div>
              <div
                style={{
                  margin: "0px 60px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Assigned To
              </div>
              <div
                style={{
                  margin: "0px 60px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Status
              </div>
              <div
                style={{
                  margin: "0px 60px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Priority
              </div>
              <div
                style={{
                  margin: "0px 60px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Comments
              </div>
              <div
                style={{
                  margin: "0px 100px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  color: "#a5a5a5",
                  fontSize: "13px",
                }}
              >
                Action
              </div>
            </div>
          </S.TableHeader>
          {table.map((taskList) => (
            <S.TaskList key={taskList.productLaunchListsUUID}>
              <S.TableSubtitleRow>
                <div style={{ display: "flex" }}>
                  <S.TableSubtitle
                    onClick={() =>
                      displayAddTaskForm(taskList.productLaunchListsUUID)
                    }
                  >
                    {taskList.productLaunchListsTitle}
                  </S.TableSubtitle>
                </div>
              </S.TableSubtitleRow>
              <form onSubmit={handleFormSubmission}>
                {taskList.tasklist.map((task, index) => (
                  <S.TableRow key={index} columnCount={columns.length}>
                    {userEditing === task.uuid ? (
                      <EditableRow
                        editAbleFormValues={editAbleFormValues}
                        handleEditFormChange={handleEditFormChange}
                        hideEditableRow={hideEditableRow}
                      />
                    ) : (
                      <ReadOnlyRow
                        column={task}
                        handleEditAbleRow={handleEditAbleRow}
                        handleDeleteRow={handleDeleteRow}
                      />
                    )}
                  </S.TableRow>
                ))}
              </form>
            </S.TaskList>
          ))}
        </>
      )}
    </S.Table>
  );
};

export default TaskTable;
