import { Icon } from "components";
import * as S from "./styles";

const TaskTable = ({ payload: { columns, data } }) => {
  return (
    <S.Table>
      <S.TableHeader columnCount={columns.length}>
        {columns.map((column) => (
          <S.TableHeaderCell key={column}>{column}</S.TableHeaderCell>
        ))}
      </S.TableHeader>
      {data.map((taskList) => (
        <S.TaskList key={taskList.taskListTitle}>
          <S.TableSubtitleRow>
            <S.TableSubtitle>{taskList.taskListTitle}</S.TableSubtitle>
            <Icon name="add-filled" />
          </S.TableSubtitleRow>
          {taskList.tasklist.map((task) => (
            <S.TableRow columnCount={columns.length}>
              {task.map((cell) => (
                <S.TableCell>{cell}</S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </S.TaskList>
      ))}
    </S.Table>
  );
};

export default TaskTable;
