import styled from "styled-components";
import { breakpoints } from "theme";

export const TableOptions = styled.div`
  margin-bottom: 25px;

  & > * {
    margin-bottom: 5px;
  }

  @media ${breakpoints.md} {
    display: flex;

    & > * {
      margin-bottom: 0;
      margin-right: 25px;
    }
  }
`;
