import { useTable } from "react-table";

import * as S from "./styles";

const Table = ({ payload: { data, columns }, noWrap }) => {
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
                <S.TableHeaderColumn {...column.getHeaderProps()}>
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
                    <S.TableData noWrap={noWrap} {...cell.getCellProps()}>
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

export default Table;
