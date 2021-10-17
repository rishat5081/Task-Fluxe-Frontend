import { useTable } from "react-table";
import { v4 as uuidv4 } from "uuid";

import * as S from "./styles";

const OverviewTable = ({ payload: { data, columns } }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <S.TableWrapper>
      <S.Table {...getTableProps()}>
        <S.TableHeader>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <S.TableHeaderColumn key={uuidv4()} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </S.TableHeaderColumn>
              ))}
            </tr>
          ))}
        </S.TableHeader>
        <S.TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <S.TableData key={uuidv4()} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </S.TableData>
                  );
                })}
              </tr>
            );
          })}
        </S.TableBody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default OverviewTable;
