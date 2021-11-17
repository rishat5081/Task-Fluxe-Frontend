import { DashboardLayout } from "layouts";
import {
  FadedButton,
  TaskTable,
  Spinner,
  TextArea,
  Forms,
  Icon,
  Chip,
} from "components";
import { taskTableColumns, table } from "constants/pages/trackerProduct";
import * as S from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import {
  checkedProductLaunchDetailsTask,
  getProductTrackingDetails,
  updateProductLaunchInformation,
} from "APIs/Product Launch/productLaunch";
import { callErrorToast } from "components/Toast/toast";
import { callSuccessToast } from "components/Toast/toast";
import Add_Task_Row from "components/Forms/Add Task Row/AddTask Row";
import AddTask from "components/Forms/Add Task/AddTask";
import { AddTaskList } from "components/Forms";

const TrackerProduct = ({
  location: {
    state: { productInfo },
  },
  id,
}) => {
  const [loadingStatus, setloadingStatus] = useState(true);
  const [tableData, setTable] = useState([]);
  const [productTrackerTitle, setproductTrackerTitle] = useState(null);
  const [productTrackerComment, setproductTrackerComment] = useState(null);
  const [appearForm, setAppearForm] = useState(null);
  const [appearNewTaskListForm, setappearNewTaskListForm] = useState(null);
  const [displayAddTask, setDisplayAddTask] = useState(false);
  const [taskList, setTaskList] = useState();
  const [updateTable, setUpdateTable] = useState(false);

  //create new task list on submit of the model
  const createTaskList = (data) => {
    setloadingStatus(true);
    setTable([
      ...tableData,
      {
        productLaunchListsTitle: (
          <FadedButton onClick={() => onCreateNewTask(data)} icon="add-filled">
            {data.productLaunchListsTitle}
          </FadedButton>
        ),
        productLaunchListsUUID: data.productLaunchListsUUID,
        tasklist: [],
      },
    ]);
    setloadingStatus(false);
  };

  //create new task on submit of the model
  const addNewTask = (
    data,
    finalDate,
    productLaunchListsUUID,
    status,
    priority,
    uuid
  ) => {
    console.log(data);
    setloadingStatus(true);
    var newTask = {
      uuid,
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
            <S.CheckBox
              className="checkbox-circle"
              type="checkbox"
              onChange={() => checkBoxonChange(uuid)}
            />
          </span>
          {data.taskName}
        </div>
      ),
      date: finalDate,
      assigned: data.taskAssignedTo,
      status: (
        <span
          style={{
            padding: "8px",
            borderRadius: "10px",
            backgroundColor: status.productLaunchDetailsColor,
            color: "white",
          }}
        >
          {status.productLaunchDetailsTitle}
        </span>
      ),
      priority: (
        <Chip
          type="priority"
          chipStyle={priority.productLaunchDetailsPriorityTitle}
          color={priority.productLaunchDetailsPriorityColor}
        />
      ),
      comment: data.comments,
    };

    setTable((prev) =>
      prev.map((taskListDetails) => {
        if (taskListDetails.productLaunchListsUUID === productLaunchListsUUID) {
          const tasklist =
            taskListDetails.tasklist === undefined
              ? [newTask]
              : [...taskListDetails.tasklist, newTask];

          const newRow = { ...taskListDetails, tasklist };

          return newRow;
        } else {
          return taskListDetails;
        }
      })
    );
    setloadingStatus(false);
  };

  //create new task modal
  const onCreateNewTask = (values) => {
    setDisplayAddTask(true);
  };

  //create new task list modal
  const onCreateNewTaskList = () => {
    setappearNewTaskListForm(!appearNewTaskListForm);
  };

  //on load of the component
  useEffect(() => {
    setloadingStatus(true);
    getProductTrackingDetails(productInfo.productLaunchUUID)
      .then((result) => {
        const dbTaskList = result.productLaunchTaskLists.map((task) => ({
          label: task.productLaunchListsTitle,
          value: task.productLaunchListsUUID,
        }));
        setTaskList(dbTaskList);
        setproductTrackerTitle(result.productLaunchDetails.productLaunchTitle);
        setproductTrackerComment(
          result.productLaunchDetails.productLaunchComments
        );

        createTaskTable(result.productLaunchTaskLists);
        setUpdateTable(false);
      })
      .catch((err) => {
        console.log(err);
        callErrorToast("Error Getting Product Launch Information");
      });

    setloadingStatus(false);
  }, [updateTable]);

  //creating the table according to the API response
  const createTaskTable = (taskLists) => {
    setloadingStatus(true);
    const data = taskLists.map((Task) => ({
      productLaunchListsTitle: (
        <>
          <div style={{ cursor: "pointer" }} value={Task}>
            {Task.productLaunchListsTitle}

            <Icon width={35} height={15} name="add-filled" />
          </div>
          <div>
            <div style={{ display: "none" }} id={Task.productLaunchListsUUID}>
              <AddTask createNewTask={addNewTask} values={Task} userID={id} />
            </div>
          </div>
        </>
      ),
      productLaunchListsUUID: Task.productLaunchListsUUID,
      tasklist:
        Task.ProductLaunchDetails.length === 0
          ? []
          : Task.ProductLaunchDetails.map((details) => ({
              uuid: details.productLaunchDetailsUUID,
              title: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      marginRight: "10px",
                      color: "#c4c4c4",
                    }}
                  >
                    <S.CheckBox
                      className="checkbox-circle"
                      type="checkbox"
                      defaultChecked={
                        details.productLaunchDetailsChecked === true
                          ? "Checked"
                          : ""
                      }
                      onChange={() =>
                        checkBoxonChange(details.productLaunchDetailsUUID)
                      }
                    />
                  </span>
                  {details.productLaunchDetailsTitle}
                </div>
              ),
              date: details.productLaunchDetailsDueDate,
              assigned: details.productLaunchDetailsAssigned,
              status: (
                <Chip
                  type="status"
                  chipStyle={
                    details.ProductLaunchDetailsStatus.productLaunchDetailsTitle
                  }
                  color={
                    details.ProductLaunchDetailsStatus.productLaunchDetailsColor
                  }
                />
              ),
              priority: (
                <Chip
                  type="priority"
                  chipStyle={
                    details.ProductLaunchDetailsPriority
                      .productLaunchDetailsPriorityTitle
                  }
                  color={
                    details.ProductLaunchDetailsPriority
                      .productLaunchDetailsPriorityColor
                  }
                />
              ),
              comment: details.productLaunchDetailsComments,
            })),
    }));
    setTable(data);
    setloadingStatus(false);
  };

  const onAddTextArea = (event) => {
    setproductTrackerComment(event.target.value);
  };
  const enteredTitle = (event) => {
    setproductTrackerTitle(event.target.value);
  };
  const showForm = () => {
    setAppearForm(!appearForm);
  };
  const updateFields_BTN = async () => {
    if ((productTrackerComment, productTrackerComment)) {
      setloadingStatus(true);
      await updateProductLaunchInformation(
        productTrackerTitle,
        productTrackerComment,
        productInfo.productLaunchUUID
      )
        .then((result) => {
          if (result) {
            callSuccessToast("Updated");
            setloadingStatus(false);
          }
        })
        .catch((err) => {
          callErrorToast("Error! Please Try Again");
        });
    } else {
      callErrorToast("All Fields are Required");
    }
  };

  const updateAfterTable = () => {
    setUpdateTable(true);
  };

  const checkBoxonChange = async (uuid) => {
    checkedProductLaunchDetailsTask(uuid)
      .then((result) => {
        if (result.status === "Updated") callSuccessToast("Task Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DashboardLayout title="Product Launch Tracker">
      {loadingStatus === true ? (
        <Spinner />
      ) : (
        <div>
          <S.Section>
            <S.TrackerProductDetail>
              <S.Title>Product Name</S.Title>
              <S.DescWrapper>
                <S.Input
                  placeholder="Product name.."
                  onBlur={enteredTitle}
                  defaultValue={productTrackerTitle}
                />
              </S.DescWrapper>
            </S.TrackerProductDetail>
            <S.TrackerProductDetail>
              <S.Title>Comments</S.Title>
              <S.DescWrapper>
                <TextArea
                  placeholder="Type your notes here"
                  defaultValue={
                    productTrackerComment ? productTrackerComment : ""
                  }
                  onBlur={onAddTextArea}
                ></TextArea>
              </S.DescWrapper>
            </S.TrackerProductDetail>
            <button
              className="btn btn-primary btn-sm"
              onClick={updateFields_BTN}
            >
              {" Update"}
            </button>
          </S.Section>
          <S.Section>
            <S.TaskButtons>
              <S.FadedButton onClick={showForm}>
                <Icon width={25} height={15} name="add-filled" />
                New Task
              </S.FadedButton>
              <S.FadedButton onClick={onCreateNewTaskList}>
                <Icon width={25} height={15} name="add-filled" />
                New Task List
              </S.FadedButton>
            </S.TaskButtons>
            {appearForm === true ? (
              <Add_Task_Row
                taskList={taskList}
                createNewTask={addNewTask}
                userID={id}
                updateAddedStatus={() => showForm()}
              />
            ) : (
              ""
            )}
            {appearNewTaskListForm === true ? (
              <AddTaskList
                createNewTaskList={createTaskList}
                productInfo={productInfo}
                userID={id}
                updateAddedStatus={() => onCreateNewTaskList()}
              />
            ) : (
              ""
            )}
            <TaskTable
              table={tableData}
              columns={taskTableColumns}
              updateTable={updateAfterTable}
            />
          </S.Section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TrackerProduct;
