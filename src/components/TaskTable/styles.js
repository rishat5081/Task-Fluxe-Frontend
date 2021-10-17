import styled from "styled-components";

import theme from "theme";

export const Table = styled.section`
  width: 100%;
`;

export const GridRow = styled.div.attrs((props) => ({
  columnCount: props.columnCount || 4,
}))`
  display: grid;
  grid-template-columns: minmax(400px, 1fr) repeat(${(p) => p.columnCount - 1}, minmax(150px, 1fr));
`;

export const TableHeader = styled(GridRow)`
  background-color: #fcfcfc;

  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;

  margin: 0 -30px;
  padding: 20px 30px;
`;

export const TaskList = styled.div`
  margin-top: 24px;
  margin-bottom: 34px;

  & + & {
    margin-top: 0;
    padding-top: 34px;

    border-top: 2px solid #f3f3f3;
  }
`;

export const TableSubtitleRow = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  color: ${theme.main.colors.primary};
`;

export const TableSubtitle = styled.h3`
  font-size: ${theme.font.bg.size};
  font-weight: 600;

  margin-right: 10px;
`;

export const TableHeaderCell = styled.div`
  font-size: 13px;
  font-weight: 800;

  color: #a5a5a5;
  text-transform: uppercase;
`;

export const TableCell = styled.div`
  color: ${theme.main.colors.text};
`;

export const TableRow = styled(GridRow)`
  padding: 10px 0;
  align-items: center;

  & + & {
    border-top: 1px solid #f5f5f5;
  }
`;
