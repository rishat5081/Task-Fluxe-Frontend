import { Icon } from "components";
import * as S from "./styles";

const TaskTable = ({ columns, table }) => {
  return (
    <S.Table>
      <S.TableHeader columnCount={columns.length}>
        {columns.map((column) => (
          <S.TableHeaderCell key={column}>{column}</S.TableHeaderCell>
        ))}
      </S.TableHeader>
      {table.map((taskList) => (
        <S.TaskList key={taskList.productLaunchListsUUID}>
          <S.TableSubtitleRow>
            <S.TableSubtitle>
              {taskList.productLaunchListsTitle}
            </S.TableSubtitle>
          </S.TableSubtitleRow>
          {taskList.tasklist.map((task, index) => (
            <S.TableRow key={index} columnCount={columns.length}>
              {task.map((cell, index) => (
                <S.TableCell key={index}>{cell}</S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </S.TaskList>
      ))}
    </S.Table>
  );
};

export default TaskTable;
