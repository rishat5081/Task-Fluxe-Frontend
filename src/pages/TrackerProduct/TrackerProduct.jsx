import { useContext } from "react";

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
import { ModalContext } from "store/modalContext";
import * as S from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import {
  getProductTrackingDetails,
  updateProductLaunchInformation,
} from "APIs/Product Launch/productLaunch";
import { callErrorToast } from "components/Toast/toast";
import { callSuccessToast } from "components/Toast/toast";

const TrackerProduct = ({
  location: {
    state: { productInfo },
  },
  id,
}) => {
  const { onShow: showModal } = useContext(ModalContext);
  const [loadingStatus, setloadingStatus] = useState(true);
  const [tableData, setTable] = useState([]);
  const [productTrackerTitle, setproductTrackerTitle] = useState(null);
  const [productTrackerComment, setproductTrackerComment] = useState(null);

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
  const addNewTask = (data, productLaunchListsUUID, status, priority) => {
    setloadingStatus(true);
    var newTask = [
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
          <Icon width={22} height={22} name="check-circle-outline" />
        </span>
        {data.taskName}
      </div>,
      data.taskDate.toString(),
      data.taskAssignedTo,

      <Chip
        type="status"
        chipStyle={status.productLaunchDetailsTitle}
        color={status.productLaunchDetailsColor}
      />,
      <Chip
        type="priority"
        chipStyle={priority.productLaunchDetailsPriorityTitle}
        color={priority.productLaunchDetailsPriorityColor}
      />,

      data.comments,
    ];
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
    //passing values to keep track of which task list is it
    showModal({
      title: "Create New Task",
      content: (
        <Forms.AddTask createNewTask={addNewTask} values={values} userID={id} />
      ),
    });
  };

  //create new task list modal
  const onCreateNewTaskList = () => {
    showModal({
      title: "Create New List",
      content: (
        <Forms.AddTaskList
          createNewTaskList={createTaskList}
          productInfo={productInfo}
          userID={id}
        />
      ),
    });
  };

  //on load of the component
  useEffect(() => {
    setloadingStatus(true);
    getProductTrackingDetails(productInfo.productLaunchUUID)
      .then((result) => {
        setproductTrackerTitle(result.productLaunchDetails.productLaunchTitle);
        setproductTrackerComment(
          result.productLaunchDetails.productLaunchComments
        );

        createTaskTable(result.productLaunchTaskLists);
      })
      .catch((err) => {
        console.log(err);
        callErrorToast("Error Getting Product Launch Information");
      });

    setloadingStatus(false);
  }, []);

  //creating the table according to the API response
  const createTaskTable = (taskLists) => {
    setloadingStatus(true);
    const data = taskLists.map((Task) => ({
      productLaunchListsTitle: (
        <FadedButton
          onClick={() => onCreateNewTask(Task)}
          icon="add-filled"
          value={Task}
        >
          {Task.productLaunchListsTitle}
        </FadedButton>
      ),
      productLaunchListsUUID: Task.productLaunchListsUUID,
      tasklist:
        Task.ProductLaunchDetails.length === 0
          ? []
          : Task.ProductLaunchDetails.map((details) => [
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "10px", color: "#c4c4c4" }}>
                  <Icon width={22} height={22} name="check-circle-outline" />
                </span>
                {details.productLaunchDetailsTitle}
              </div>,

              details.productLaunchDetailsDueDate,
              details.productLaunchDetailsAssigned,
              <Chip
                type="status"
                chipStyle={
                  details.ProductLaunchDetailsStatus.productLaunchDetailsTitle
                }
                color={
                  details.ProductLaunchDetailsStatus.productLaunchDetailsColor
                }
              />,
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
              />,
              details.productLaunchDetailsComments,
            ]),
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
              className="btn btn-primary btn-sm mt-5"
              onClick={updateFields_BTN}
            >
              {" Update"}
            </button>
          </S.Section>
          <S.Section>
            <S.TaskButtons>
              <FadedButton onClick={onCreateNewTaskList} icon="add-filled">
                New Task List
              </FadedButton>
            </S.TaskButtons>
            <TaskTable table={tableData} columns={taskTableColumns} />
          </S.Section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TrackerProduct;
