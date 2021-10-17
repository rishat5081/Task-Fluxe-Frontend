import { useContext } from "react";

import { DashboardLayout } from "layouts";
import { FadedButton, TaskTable, EditableText } from "components";
import { trackerDetails, table } from "constants/pages/trackerProduct";
import { ModalContext } from "store/modalContext";
import * as S from "./styles";

const TrackerProduct = () => {
  const { onShow } = useContext(ModalContext);

  const topbarAction = {
    name: "New Launch",
    onClick: () => {
      onShow({
        title: "Create New Product Launch",
        content: "This will be the form to create new tracker",
      });
    },
  };

  const onCreateNewTask = () => {
    onShow({
      title: "Create new Task",
      content: "This will be the form to create new task",
    });
  };

  const onCreateNewTaskList = () => {
    onShow({
      title: "Create new task list",
      content: "This will be the form to create new task list",
    });
  };

  return (
    <DashboardLayout topbarAction={topbarAction} title="Product Launch Tracker">
      <S.Section>
        <S.TrackerProductDetail>
          <S.Title>Product Name</S.Title>
          <S.DescWrapper>
            <EditableText placeholder="Product name.." initialValue="Fidget Spinner" />
          </S.DescWrapper>
        </S.TrackerProductDetail>
        <S.TrackerProductDetail>
          <S.Title>Comments</S.Title>
          <S.DescWrapper>
            {trackerDetails.map((detail) => (
              <EditableText placeholder="Detail here..." initialValue={detail} key={detail}>
                {detail}
              </EditableText>
            ))}
          </S.DescWrapper>
        </S.TrackerProductDetail>
      </S.Section>
      <S.Section>
        <S.TaskButtons>
          <FadedButton onClick={onCreateNewTask} icon="add-filled">
            New Task
          </FadedButton>
          <FadedButton onClick={onCreateNewTaskList} icon="add-filled">
            New Task List
          </FadedButton>
        </S.TaskButtons>
        <TaskTable payload={table} />
      </S.Section>
    </DashboardLayout>
  );
};

export default TrackerProduct;
