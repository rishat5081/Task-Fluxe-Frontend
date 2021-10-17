import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 24px;
`;

export const Table = styled.table`
  width: fit-content;
`;

export const TableHeader = styled.thead`
  margin-bottom: 10px;
`;

export const TableHeaderColumn = styled.th`
  font-size: 14px;
  font-weight: 500;

  white-space: nowrap;
  color: #8d8d8d;

  text-align: left;
  padding-right: 60px;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
  color: black;
`;

export const TableData = styled.td`
  font-size: 14px;

  padding: 10px 0;
`;
