import styled from "styled-components";

import theme from "theme";

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeader = styled.thead`
  margin-bottom: 10px;
  background-color: #f5f5f5;

  border-radius: 5px;
`;

export const TableHeaderColumn = styled.th`
  font-size: 12px;
  font-weight: 800;

  white-space: nowrap;

  color: #676767;

  text-align: left;
  text-transform: uppercase;

  padding: 16px 35px;
  border-bottom: 10px solid #fafafa;

  &:first-child {
    border-radius: 12px 0 0 12px;
  }

  &:last-child {
    border-radius: 0 12px 12px 0;
  }
`;

export const TableBody = styled.tbody`
  background-color: #fff;
  color: black;

  box-shadow: ${theme.main.boxShadow};
`;

export const TableData = styled.td`
  font-size: 14px;

  padding: 20px 35px;

  ${(p) => p.noWrap && "white-space: nowrap;"}
`;
